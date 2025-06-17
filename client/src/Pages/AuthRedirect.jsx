import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const AuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [status, setStatus] = useState("Authenticating...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const authenticateUser = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");
      const userId = params.get("userId");

      if (!token || !userId) {
        setError("Missing authentication data");
        setStatus("Redirecting to login...");
        setTimeout(() => {
          navigate("/login?error=missing_auth_data");
        }, 1500);
        return;
      }

      try {
        setStatus("Verifying your session...");

        // First verify the token structure before making API calls
        if (token.split('.').length !== 3) {
          throw new Error("Invalid token format");
        }

        // Store the token temporarily
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setStatus("Fetching your profile...");
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL || 'https://mn-tech-pvltd-596.onrender.com'}/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            timeout: 10000, // 10 seconds timeout
          }
        );

        if (!response.data) {
          throw new Error("No user data received");
        }

        const userData = {
          _id: response.data._id,
          name: response.data.name || response.data.email.split("@")[0],
          email: response.data.email,
          avatar: response.data.avatar || null,
          isGoogleAuth: response.data.isGoogleAuth || false,
        };

        setStatus("Finalizing your login...");
        
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        
        // Update auth context
        login(token, userData);
        
        // Redirect to home or previous protected page
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });

      } catch (error) {
        console.error("Authentication error:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });

        // Clear any stored data
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("user");

        let errorMessage = "Authentication failed";
        if (error.response) {
          errorMessage = error.response.data?.message || 
                        error.response.statusText || 
                        `Server error (${error.response.status})`;
        } else if (error.request) {
          errorMessage = "No response from server";
        } else {
          errorMessage = error.message || "Authentication error";
        }

        setError(errorMessage);
        setStatus("Redirecting to login...");

        setTimeout(() => {
          navigate(`/login?error=${encodeURIComponent(errorMessage)}`, {
            state: { from: location },
          });
        }, 2000);
      }
    };

    authenticateUser();
  }, [location, navigate, login]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        {error ? (
          <>
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-2">Error</h2>
            </div>
            <p className="text-gray-600 mb-4">{error}</p>
          </>
        ) : (
          <>
            <div className="text-blue-500 mb-4">
              <FaSpinner className="h-12 w-12 mx-auto animate-spin" />
              <h2 className="text-xl font-bold mt-2">Please wait</h2>
            </div>
            <p className="text-gray-600">{status}</p>
          </>
        )}
        <p className="text-sm text-gray-400 mt-4">
          {error ? "You'll be redirected shortly..." : "This may take a moment..."}
        </p>
      </div>
    </div>
  );
};

export default AuthRedirect;
//manglantechnology
