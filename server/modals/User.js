const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: function () {
      return !this.isGoogleAuth;
    },
  },
  googleId: { type: String, unique: true, sparse: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.isGoogleAuth;
    },
  },
  isGoogleAuth: { type: Boolean, default: false },
  avatar: { type: String },
  tokens: [
    {
      token: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

  loginSessions: [
    {
      loginTime: { type: Date, required: true },
      logoutTime: { type: Date },
      duration: { type: Number }, // in seconds
    },
  ],
  totalLoggedInTime: { type: Number, default: 0 }, // in seconds
  lastLoginTime: { type: Date },
  lastLogoutTime: { type: Date },

  totalWatchTime: { type: Number, default: 0 }, // in seconds
  earnings: { type: Number, default: 0 }, // in your currency
  watchHistory: [
    {
      videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
      timeWatched: Number, // in seconds
      date: { type: Date, default: Date.now },
    },
  ],

  // Add validation to your UserSchema
referralCode: { 
  type: String, 
  unique: true,
  sparse: true,
  validate: {
    validator: function(v) {
      return /^[a-zA-Z0-9_-]{6,12}$/.test(v);
    },
    message: props => `${props.value} is not a valid referral code!`
  },
  default: function() {
    return shortid.generate();
  }
},
referredBy: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: "User",
  validate: {
    validator: async function(v) {
      if (!v) return true;
      const user = await mongoose.model('User').findById(v);
      return !!user;
    },
    message: props => `Referrer with ID ${props.value} does not exist!`
  },
  default: null
},
referrals: [{
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true 
  },
  joinedAt: { 
    type: Date, 
    default: Date.now 
  },
  hasLoggedIn: { 
    type: Boolean, 
    default: false 
  },
  earned: { 
    type: Boolean, 
    default: false 
  }
}],
referralEarnings: { 
  type: Number, 
  default: 0,
  min: 0 
}
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
