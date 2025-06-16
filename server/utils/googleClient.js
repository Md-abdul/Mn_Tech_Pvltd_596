const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://mn-tech-pvltd-596-1.onrender.com/auth/google/callback" // Hardcode the callback URL for development
);

module.exports = { oauth2Client };
