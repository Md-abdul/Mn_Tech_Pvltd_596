import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaShareAlt, FaUsers, FaCoins } from "react-icons/fa";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [referralStats, setReferralStats] = useState(null);
  const [copied, setCopied] = useState(false);
  const [referralSuccess, setReferralSuccess] = useState(false);

  // Add this useEffect at the top of your component
  // useEffect(() => {
  //   // Check for referral success in URL params
  //   const params = new URLSearchParams(location.search);
  //   const referralApplied = params.get("referralApplied");

  //   if (referralApplied === "true") {
  //     setReferralSuccess(true);
  //     // Remove the param from URL without reload
  //     const newUrl = window.location.pathname;
  //     window.history.replaceState({}, "", newUrl);
  //   }

  //   // Check for referral code in localStorage (for signup)
  //   const storedReferral = localStorage.getItem("referralCode");
  //   if (storedReferral) {
  //     console.log("Detected referral code in storage:", storedReferral);
  //     localStorage.removeItem("referralCode");
  //   }
  // }, [location]);

  useEffect(() => {
    const referralApplied = localStorage.getItem("referralApplied");
    if (referralApplied === "true") {
      setReferralSuccess(true);
      localStorage.removeItem("referralApplied"); // clear after use
    }
  }, []);

  // Your existing useEffect for auth and data fetching
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      fetchUserData();
      fetchReferralStats();
    }
  }, [user, navigate]);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3001/api/users/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReferralStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3001/api/users/${user._id}/referral-stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReferralStats(response.data);
    } catch (error) {
      console.error("Error fetching referral stats:", error);
    }
  };

  if (!user || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Referral Success Notification */}
      {referralSuccess && (
        <div className="max-w-md mx-auto mb-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          <p>
            🎉 Referral successfully applied! You've earned credit for your
            referrer.
          </p>
        </div>
      )}

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          {/* ... [rest of your existing profile code] ... */}
          <div className="flex items-center justify-center mb-6">
            {userData?.avatar ? (
              <img
                src={userData.avatar.replace("=s96-c", "=s200-c")} // Increase size and remove size parameter
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if fallback fails
                  e.target.src =
                    "https://www.gravatar.com/avatar/default?s=200"; // Fallback image
                }}
              />
            ) : (
              <FaUserCircle className="h-24 w-24 text-gray-400" />
            )}
          </div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            User Profile
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-gray-900 font-medium">
                {userData?.name || "Not provided"}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-gray-900 font-medium">{userData?.email}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Account Type</p>
              <p className="text-gray-900 font-medium">
                {userData?.isGoogleAuth ? "Google Account" : "Email Account"}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Total Watch Time</p>
              <p className="text-gray-900 font-medium">
                {userData?.formattedWatchTime || "0h 0m 0s"}
              </p>
            </div>
          </div>
          {referralStats && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                <FaShareAlt className="mr-2" /> Referral Program
              </h3>

              <div className="mb-4">
                <p className="text-gray-500 text-sm">Your Referral Code</p>
                <div className="flex items-center mt-1">
                  <input
                    type="text"
                    readOnly
                    value={referralStats.referralCode}
                    className="border rounded-l px-3 py-2 flex-grow"
                  />
                  <CopyToClipboard
                    text={referralStats.referralCode}
                    onCopy={() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                  >
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-r hover:bg-blue-600">
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 text-sm">Your Referral Link</p>
                <p className="text-blue-500 font-medium break-all">
                  {`${window.location.origin}/login?referral=${referralStats.referralCode}`}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Share this link and earn when friends sign up and login
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-100 p-3 rounded text-center">
                  <FaUsers className="mx-auto text-gray-600 mb-1" />
                  <p className="text-sm text-gray-500">Total Referrals</p>
                  <p className="font-bold">{referralStats.totalReferrals}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded text-center">
                  <FaUsers className="mx-auto text-green-600 mb-1" />
                  <p className="text-sm text-gray-500">Active Referrals</p>
                  <p className="font-bold">{referralStats.activeReferrals}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded text-center">
                  <FaCoins className="mx-auto text-yellow-600 mb-1" />
                  <p className="text-sm text-gray-500">Earnings</p>
                  <p className="font-bold">${referralStats.referralEarnings}</p>
                </div>
              </div>

              {referralStats.referredBy && (
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-gray-500 text-sm">You were referred by</p>
                  <p className="text-gray-900 font-medium">
                    {referralStats.referredBy.name} (
                    {referralStats.referredBy.email})
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
