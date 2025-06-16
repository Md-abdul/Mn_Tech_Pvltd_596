// routes/videos.js
const express = require("express");
const videoRoutes = express.Router();
const Video = require("../modals/Video");
const cloudinary = require("cloudinary").v2;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const UserModel = require("../modals/User");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Authorization header missing or invalid" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check for isAdmin flag instead of role
    if (!decoded.isAdmin) {
      return res.status(403).json({
        error: "Forbidden - Admin access required",
        details: "Token does not have admin privileges",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      error: "Invalid token",
      details: error.message,
    });
  }
};

// Apply middleware to all video routes
// videoRoutes.use(verifyAdmin);

// Get Cloudinary upload signature
videoRoutes.get("/upload-signature", verifyAdmin, (req, res) => {
  try {
    // Debug: Verify environment variables are loaded
    console.log("Cloudinary Config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET ? "***" : "MISSING",
    });

    const folder = req.query.folder || "videos";
    const timestamp = Math.round(Date.now() / 1000);
    const upload_preset = "video_preset"; // Must match exactly with Cloudinary

    // Create the string to sign - MUST be in alphabetical order
    const stringToSign = `folder=${folder}&timestamp=${timestamp}&upload_preset=${upload_preset}`;

    // Verify we have the API secret
    if (!process.env.CLOUDINARY_API_SECRET) {
      throw new Error("Cloudinary API secret is not configured");
    }

    // Generate the signature - IMPORTANT: No spaces or extra characters
    const signature = crypto
      .createHash("sha1")
      .update(stringToSign + process.env.CLOUDINARY_API_SECRET)
      .digest("hex");

    console.log("Signature Generation Details:", {
      stringToSign,
      signature,
      timestamp,
      usingSecret: process.env.CLOUDINARY_API_SECRET.substring(0, 5) + "...",
    });

    res.json({
      signature,
      timestamp,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      upload_preset,
    });
  } catch (error) {
    console.error("Signature generation failed:", error);
    res.status(500).json({
      error: "Failed to generate upload signature",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

videoRoutes.post("/", verifyAdmin, async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl } = req.body;

    console.log("Received data for MongoDB:", {
      title,
      description,
      videoUrl,
      thumbnailUrl,
      userId: req.user?.userId,
    });

    // Validate required fields
    if (!title || !videoUrl) {
      return res.status(400).json({
        error: "Title and videoUrl are required",
      });
    }

    const video = new Video({
      title,
      description: description || "",
      videoUrl,
      thumbnailUrl: thumbnailUrl || videoUrl.replace(".mp4", ".jpg"), // Fallback if no thumbnail
      uploadedBy: req.user.userId,
    });

    const savedVideo = await video.save();

    console.log("Video saved to MongoDB:", savedVideo);

    res.status(201).json(savedVideo);
  } catch (error) {
    console.error("MongoDB save error:", {
      error: error.message,
      stack: error.stack,
      validationErrors: error.errors,
    });

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: Object.values(error.errors).map((e) => e.message),
      });
    }

    res.status(500).json({
      error: "Failed to save video",
      details: error.message,
    });
  }
});

// Add this route to your videos.js file before module.exports
videoRoutes.get("/", verifyAdmin, async (req, res) => {
  try {
    const videos = await Video.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .populate("uploadedBy", "username email"); // Populate user info if needed

    res.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({
      error: "Failed to fetch videos",
      details: error.message,
    });
  }
});


// Add this route to videos.js (before module.exports)
videoRoutes.get("/user", async (req, res) => {
  try {
    // Verify user token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get all videos (no admin check needed)
    const videos = await Video.find().sort({ createdAt: -1 }).lean(); // Convert to plain JS object

    // Add user's watch time to each video if available
    const videosWithWatchTime = videos.map((video) => {
      const watchTimeArray = Array.isArray(video.watchTime)
        ? video.watchTime
        : [];

      const userWatchEntry = watchTimeArray.find(
        (entry) => entry.userId.toString() === decoded.userId
      );

      return {
        ...video,
        userWatchTime: userWatchEntry ? userWatchEntry.timeWatched : 0,
      };
    });

    res.json(videosWithWatchTime);
  } catch (error) {
    console.error("Error fetching videos for user:", error);
    res.status(500).json({
      error: "Failed to fetch videos",
      details: error.message,
    });
  }
});

// Add this route to videos.js
videoRoutes.post("/update-user-watch-time", async (req, res) => {
  try {
    const { userId } = req.body;

    // Get all videos where this user has watch time
    const videos = await Video.find({
      'watchTime.userId': userId
    });

    // Calculate total watch time
    let totalSeconds = 0;
    videos.forEach(video => {
      const userWatchEntry = video.watchTime.find(entry => 
        entry.userId.toString() === userId
      );
      if (userWatchEntry) {
        totalSeconds += userWatchEntry.timeWatched;
      }
    });

    // Update user's total watch time
    await UserModel.findByIdAndUpdate(userId, {
      totalWatchTime: totalSeconds
    });

    res.json({ success: true, totalSeconds });
  } catch (error) {
    console.error("Error updating user watch time:", error);
    res.status(500).json({ error: "Failed to update user watch time" });
  }
});

module.exports = videoRoutes;
