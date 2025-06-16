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
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "http://localhost:3000",
      "http://localhost:5173",
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
