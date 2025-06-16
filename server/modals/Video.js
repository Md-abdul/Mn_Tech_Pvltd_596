// models/Video.js
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  uploadedBy: {
    type: String,
  },
  duration: {
    type: Number,
  },
  // Add this new field for tracking watch time
  watchTime: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      timeWatched: { type: Number, default: 0 }, // in seconds
      lastUpdated: { type: Date, default: Date.now },
      completed: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Video", videoSchema);
