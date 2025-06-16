const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");
const passport = require("passport");
const session = require("express-session");
const googleAuthRouter = require("./routes/googleSignup");
const userRoutes = require("./routes/userRoutes");
const { adminRoutes } = require("./routes/adminRoutes");
const videoRoutes = require("./routes/videos");
const app = express();
dotenv.config();

// Database connection
connectDB();

// Middleware
// app.use(
//   cors({
//     origin: [
//       process.env.CLIENT_URL || "http://localhost:3000",
//       "http://localhost:5173",
//     ],
//     credentials: true,
//   })
// );

// Middleware
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "https://mn-tech-pvltd-596-1.onrender.com",
      "https://manglantechnology.netlify.app/",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Maglan Technology ..");
});

// Routes
app.use("/auth/google", googleAuthRouter);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/video_upload", videoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





/**
 * 
 * MONGO_URI="mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/maglan?retryWrites=true&w=majority"
JWT_SECRET=maglan@123
PORT=3001
GOOGLE_CLIENT_ID=75185574706-sgqrfoanla56o6nq0pll36ckq5q8b7o9.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3001
CALLBACK_URL=http://localhost:3001/auth/google/callback
SESSION_SECRET=maglan
VITE_API_BASE_URL=http://localhost:3001
CLOUDINARY_CLOUD_NAME=dirtbzw6e
CLOUDINARY_API_KEY=351464199457573
CLOUDINARY_API_SECRET=0flGw2DRAELvfABMn1ouxmjTZAc

# CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@dirtbzw6e
# cloudinary://351464199457573:0flGw2DRAELvfABMn1ouxmjTZAc>@dirtbzw6e
 */