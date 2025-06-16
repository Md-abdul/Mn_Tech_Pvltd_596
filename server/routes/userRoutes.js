const express = require("express");
const router = express.Router();
const UserModel = require("../modals/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Video = require("../modals/Video");

// Middleware to verify admin token
const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: "Admin access required" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


const verifyAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

router.get("/:userId", async (req, res) => {
  try {
    // Verify token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Find user
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the requesting user matches the token
    if (user._id.toString() !== decoded.userId) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    // Calculate total watch time from videos
    const videos = await Video.find({
      "watchTime.userId": user._id,
    });

    let totalSeconds = 0;
    videos.forEach((video) => {
      const userWatchEntry = video.watchTime.find(
        (entry) => entry.userId.toString() === user._id.toString()
      );
      if (userWatchEntry) {
        totalSeconds += userWatchEntry.timeWatched;
      }
    });

    // Update user's totalWatchTime if different
    if (user.totalWatchTime !== totalSeconds) {
      user.totalWatchTime = totalSeconds;
      await user.save();
    }

    // Return user data with formatted watch time
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isGoogleAuth: user.isGoogleAuth,
      totalWatchTime: totalSeconds,
      formattedWatchTime: `${hours}h ${minutes}m ${seconds}s`,
    };

    res.json(userData);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Get all users (admin only)
router.get("/", verifyUser, async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    // Search/filter parameters
    const searchQuery = req.query.search || "";
    const filter = searchQuery
      ? {
          $or: [
            { name: { $regex: searchQuery, $options: "i" } },
            { email: { $regex: searchQuery, $options: "i" } },
          ],
        }
      : {};

    // Get users with pagination and filtering
    const users = await UserModel.find(filter, {
      password: 0, // exclude password
      refreshToken: 0, // exclude refresh token
      loginSessions: 0 // Don't need all sessions here
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination info
    const totalUsers = await UserModel.countDocuments(filter);
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      success: true,
      data: users,
      pagination: {
        totalUsers,
        totalPages,
        currentPage: page,
        usersPerPage: limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Add this route to userRoutes.js
router.get("/:userId/total-watch-time", async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Get all videos where this user has watch time
    const videos = await Video.find({
      "watchTime.userId": userId,
    });

    // Calculate total watch time
    let totalSeconds = 0;
    videos.forEach((video) => {
      const userWatchEntry = video.watchTime.find(
        (entry) => entry.userId.toString() === userId
      );
      if (userWatchEntry) {
        totalSeconds += userWatchEntry.timeWatched;
      }
    });

    // Convert to hours, minutes, seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    res.json({
      totalSeconds,
      formatted: `${hours}h ${minutes}m ${seconds}s`,
      videosWatched: videos.length,
    });
  } catch (error) {
    console.error("Error calculating watch time:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});


router.post("/:videoId/watch-time", verifyAuth, async (req, res) => {
  try {
    const { videoId } = req.params;
    const userId = req.user.userId; // SECURE SOURCE
    const { timeWatched } = req.body;

    // Validate input
    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return res.status(400).json({ error: "Invalid video ID" });
    }

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const duration = video.duration || 0;

    const watchEntry = video.watchTime.find(
      (entry) => entry.userId.toString() === userId
    );

    let previousTime = 0;

    if (watchEntry) {
      watchEntry.timeWatched += timeWatched;
      watchEntry.lastUpdated = new Date();
      if (watchEntry.timeWatched >= duration * 0.95) {
        watchEntry.completed = true;
      }
    } else {
      video.watchTime.push({
        userId,
        timeWatched,
        lastUpdated: new Date(),
        completed: timeWatched >= duration * 0.95,
      });
    }

    await video.save();
    // Add time directly
    await UserModel.findByIdAndUpdate(userId, {
      $inc: { totalWatchTime: timeWatched },
    });

    // Update user's total watch time securely
    await UserModel.findByIdAndUpdate(userId, {
      $inc: { totalWatchTime: timeWatched - previousTime },
    });

    res.json({
      success: true,
      timeWatched,
      completed: timeWatched >= duration * 0.95,
    });
  } catch (error) {
    console.error("Error updating watch time:", error);
    res.status(500).json({ error: "Failed to update watch time" });
  }
});


// Add to userRoutes.js
router.post("/logout", verifyAuth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await UserModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the most recent login session without logout time
    const activeSession = user.loginSessions.find(s => !s.logoutTime);
    
    if (activeSession) {
      const logoutTime = new Date();
      const duration = Math.floor((logoutTime - activeSession.loginTime) / 1000); // in seconds
      
      activeSession.logoutTime = logoutTime;
      activeSession.duration = duration;
      user.totalLoggedInTime += duration;
      user.lastLogoutTime = logoutTime;
      
      await user.save();
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get('/:userId/referral-code', verifyAuth, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate referral code if doesn't exist
    if (!user.referralCode) {
      user.referralCode = shortid.generate();
      await user.save();
    }

    res.json({
      referralCode: user.referralCode,
      referralLink: `${process.env.FRONTEND_URL}/login?referral=${user.referralCode}`
    });
  } catch (error) {
    console.error("Error getting referral code:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get referral stats for a user
router.get('/:userId/referral-stats', verifyAuth, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId)
      .populate('referrals.userId', 'name email avatar')
      .populate('referredBy', 'name email');
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const stats = {
      referralCode: user.referralCode,
      referredBy: user.referredBy,
      totalReferrals: user.referrals.length,
      activeReferrals: user.referrals.filter(r => r.hasLoggedIn).length,
      referralEarnings: user.referralEarnings,
      referrals: user.referrals.map(ref => ({
        userId: ref.userId,
        joinedAt: ref.joinedAt,
        hasLoggedIn: ref.hasLoggedIn,
        earned: ref.earned
      }))
    };

    res.json(stats);
  } catch (error) {
    console.error("Error getting referral stats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
