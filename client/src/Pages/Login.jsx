import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";



import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for token in URL (from Google auth redirect)
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const userId = params.get("userId");

    if (token && userId) {
      const referralApplied = params.get("referralApplied");
      if (referralApplied) {
        localStorage.setItem("referralApplied", "true");
      }
      localStorage.removeItem("referralCode");
      login(token, userId);
      navigate("/auth-redirect", { 
      replace: true,
      state: { 
        from: location.state?.from || "/profile" 
      }
    });
    return;
    }

    // Redirect if already logged in
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [location, user, navigate, login]);

  // const handleGoogleLogin = () => {

  //     // Get referral code from URL if exists
  //     const queryParams = new URLSearchParams(window.location.search);
  //     const urlReferral = queryParams.get('referral'); // Note: Typo in 'referral'?

  //     // Store in localStorage if exists
  //     if (urlReferral) {
  //       localStorage.setItem('referralCode', urlReferral);
  //     }

  //     // Get any stored referral code
  //     const referralCode = localStorage.getItem('referralCode');
  //     const state = referralCode ? JSON.stringify({ referralCode }) : undefined;

  //   // Use the full backend URL from environment variables if available
  //   const backendUrl = "http://localhost:3001";
  //    // Initiate Google auth
  //     window.location.href = `${backendUrl}/auth/google?state=${state}`;
  //   // window.location.href = `${backendUrl}/auth/google`;
  // };

  // Get error from URL if present

  const handleGoogleLogin = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const urlReferral = queryParams.get("referral");

    // Clear any existing referral code first
    localStorage.removeItem("referralCode");

    let referralCode = null;

    if (urlReferral) {
      referralCode = urlReferral;
      localStorage.setItem("referralCode", referralCode);
      console.log("Referral code stored:", referralCode);
    }

    const state = referralCode ? JSON.stringify({ referralCode }) : undefined;

    const backendUrl = "https://mn-tech-pvltd-596.vercel.app";
    window.location.href = `${backendUrl}/auth/google${
      state ? `?state=${encodeURIComponent(state)}` : ""
    }`;
  };

  const searchParams = new URLSearchParams(location.search);
  const error = searchParams.get("error");

  return (
    <div className="flex items-center justify-center p-10 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100 mt-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 mb-4 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-center">
            Sign in to access your account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error === "google_auth_failed"
              ? "Google authentication failed. Please try again."
              : error}
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm font-medium cursor-pointer"
        >
          <FcGoogle className="w-6 h-6 mr-3" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Alternative Option */}
        <div className="text-center text-sm text-gray-500">
          {/* Don't have an account?{" "}
          <button
            onClick={handleGoogleLogin}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Sign up with Google
          </button> */}

          <Link to="/adminLogin">
            <p>Admin Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
