// const express = require("express");
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { oauth2Client } = require("../utils/googleClient");
// const UserModel = require("../modals/User");
// const router = express.Router();
// const shortid = require('shortid');

// // Add this route to INITIATE Google auth
// router.get("/", (req, res) => {
//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: ["profile", "email"],
//     prompt: "select_account",
//   });
//   res.redirect(url);
// });

// router.get("/callback", async (req, res) => {
//   const code = req.query.code;
//   const state = req.query.state ? JSON.parse(req.query.state) : null;
//   const referralCode = state?.referralCode || req.query.referral;

//   try {
//     // 1. Exchange code for tokens
//     const { tokens } = await oauth2Client.getToken(code);
//     oauth2Client.setCredentials(tokens);

//     // 2. Get user info from Google
//     const { data } = await axios.get(
//       "https://www.googleapis.com/oauth2/v3/userinfo",
//       {
//         headers: { Authorization: `Bearer ${tokens.access_token}` },
//       }
//     );

//     // 3. Generate a random password for Google-authenticated users
//     const randomPassword =
//       Math.random().toString(36).slice(-8) +
//       Math.random().toString(36).slice(-8);
//     const hashedPassword = await bcrypt.hash(randomPassword, 10);

//     // 4. Find or create user
//     let user = await UserModel.findOne({
//       $or: [
//         { email: data.email },
//         { googleId: data.sub }
//       ]
//     });

//     let referredByUser = null;

//     // Handle referral if code exists
//     if (referralCode) {
//       referredByUser = await UserModel.findOne({ referralCode: referralCode });
//     }

//     const isNewUser = !user;

//     if (isNewUser) {
//       // Generate a referral code for new user
//       const userReferralCode = shortid.generate();

//       user = new UserModel({
//         name: data.name || data.email.split("@")[0],
//         email: data.email,
//         password: hashedPassword,
//         isGoogleAuth: true,
//         avatar: data.picture || null,
//         referralCode: userReferralCode,
//         referredBy: referredByUser ? referredByUser._id : null,
//         googleId: data.sub, // Store Google's unique ID
//         tokens: [], // Initialize tokens array
//         loginSessions: [] // Initialize login sessions
//       });

//       await user.save();

//       // Add to referrer's referrals if exists
//       if (referredByUser) {
//         referredByUser.referrals.push({
//           userId: user._id,
//           hasLoggedIn: false
//         });
//         await referredByUser.save();
//       }
//     } else {
//       // Update existing user with any missing Google auth data
//       if (!user.googleId) {
//         user.googleId = data.sub;
//       }
//       if (!user.password) {
//         user.password = hashedPassword;
//       }
//       if (!user.referralCode) {
//         user.referralCode = shortid.generate();
//       }
//       if (!user.isGoogleAuth) {
//         user.isGoogleAuth = true;
//       }
//       if (!user.avatar && data.picture) {
//         user.avatar = data.picture;
//       }

//       await user.save();
//     }

//     // 5. Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );

//     // 6. Store token in MongoDB
//     user.tokens.push({
//       token,
//       createdAt: new Date(),
//     });

//     // Add login session
//     const loginTime = new Date();
//     user.loginSessions.push({
//       loginTime,
//       duration: 0 // Will be updated on logout
//     });
//     user.lastLoginTime = loginTime;

//     // Check if this is first login and user was referred
//     if (user.referredBy && isNewUser) {
//       const referrer = await UserModel.findById(user.referredBy);
//       if (referrer) {
//         // Update the referral record
//         const referral = referrer.referrals.find(ref =>
//           ref.userId.toString() === user._id.toString()
//         );

//         if (referral && !referral.hasLoggedIn) {
//           referral.hasLoggedIn = true;
//           referrer.referralEarnings += 1; // Add 1 to earnings
//           await referrer.save();
//         }
//       }
//     }

//     await user.save();

//     // 7. Redirect to frontend with token in URL
//     const redirectUrl = `${process.env.FRONTEND_URL.replace(/\/+$/, '')}/login?token=${token}&userId=${user._id}`;
//     res.redirect(redirectUrl);
//   } catch (error) {
//     console.error("Google auth error:", error);

//     // More specific error handling
//     let errorMessage = "google_auth_failed";
//     if (error.code === 11000) {
//       errorMessage = "account_already_exists";
//     }

//     res.redirect(`${process.env.FRONTEND_URL}/login?error=${errorMessage}`);
//   }
// });

// module.exports = router;

const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { oauth2Client } = require("../utils/googleClient");
const UserModel = require("../modals/User");
const router = express.Router();
const shortid = require("shortid");
const mongoose = require("mongoose");
const crypto = require("crypto"); // Add this import at the top

// Add this route to INITIATE Google auth
// Handle frontend -> /auth/google?state=...
router.get("/", (req, res) => {
  const state = req.query.state; // <-- catch it here
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    prompt: "select_account",
    ...(state && { state }), // <-- add if exists
  });
  res.redirect(url);
});

router.get("/callback", async (req, res) => {
  const code = req.query.code;
  const state = req.query.state
    ? JSON.parse(decodeURIComponent(req.query.state))
    : null;
  const referralCode = state?.referralCode || req.query.referral;

  try {
    // 1. Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // 2. Get user info from Google
    const { data } = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
      }
    );

    // Validate required fields
    if (!data.email || !data.sub) {
      throw new Error("Incomplete Google profile data");
    }

    // 3. Generate a secure random password
    const randomPassword = require("crypto").randomBytes(16).toString("hex");
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // 4. Find or create user with referral handling
    let user = await UserModel.findOne({
      $or: [{ email: data.email }, { googleId: data.sub }],
    });

    let referredByUser = null;
    let referralApplied = false;

    // Handle referral if code exists
    if (referralCode) {
      referredByUser = await UserModel.findOne({ referralCode: referralCode });
      // Prevent self-referral
      if (referredByUser && referredByUser.email === data.email) {
        referredByUser = null;
      }
    }

    const isNewUser = !user;

    if (isNewUser) {
      // Generate unique referral code
      const userReferralCode = require("shortid").generate();

      user = new UserModel({
        name: data.name || data.email.split("@")[0],
        email: data.email,
        password: hashedPassword,
        isGoogleAuth: true,
        avatar: data.picture || null,
        referralCode: userReferralCode,
        referredBy: referredByUser ? referredByUser._id : null,
        googleId: data.sub,
        tokens: [],
        loginSessions: [],
      });

      await user.save();

      // Process referral if exists
      if (referredByUser) {
        referredByUser.referrals.push({
          userId: user._id,
          hasLoggedIn: true,
          earned: true,
        });
        referredByUser.referralEarnings += 1;
        await referredByUser.save();
        referralApplied = true;
      }
    } else {
      // Update existing user
      if (!user.googleId) user.googleId = data.sub;
      if (!user.password) user.password = hashedPassword;
      if (!user.referralCode) user.referralCode = require("shortid").generate();
      if (!user.isGoogleAuth) user.isGoogleAuth = true;
      if (!user.avatar && data.picture) user.avatar = data.picture;

      if (referralCode && !user.referredBy && referredByUser) {
        user.referredBy = referredByUser._id;
        referredByUser.referrals.push({
          userId: user._id,
          hasLoggedIn: true,
          earned: true,
        });
        referredByUser.referralEarnings += 1;
        await referredByUser.save();
        referralApplied = true;
      }

      await user.save();
    }

    // 5. Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // 6. Store token and session
    user.tokens.push({ token, createdAt: new Date() });
    user.loginSessions.push({
      loginTime: new Date(),
      duration: 0,
    });
    user.lastLoginTime = new Date();
    await user.save();

    // 7. Construct and validate redirect URL
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    const redirectUrl = new URL(`${frontendUrl}/login`);

    redirectUrl.searchParams.set("token", token);
    redirectUrl.searchParams.set("userId", user._id);
    if (referralApplied) {
      redirectUrl.searchParams.set("referralApplied", "true");
    }

    // Ensure URL is properly encoded
    const finalRedirectUrl = redirectUrl.toString();
    if (!finalRedirectUrl.startsWith("http")) {
      throw new Error("Invalid redirect URL");
    }

    res.redirect(finalRedirectUrl);
  } catch (error) {
    console.error("Google auth error:", error);

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    const errorUrl = new URL(`${frontendUrl}/login`);

    errorUrl.searchParams.set(
      "error",
      error.code === 11000 ? "account_already_exists" : "google_auth_failed"
    );

    if (referralCode) {
      errorUrl.searchParams.set("retryReferral", referralCode);
    }

    res.redirect(errorUrl.toString());
  }
});

module.exports = router;
