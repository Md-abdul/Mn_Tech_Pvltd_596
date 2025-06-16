import logo from "../assets/web-logo-2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
      setShowLogoutModal(false);
    }
  };

  return (
    <>
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Confirm Logout
              </h3>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center disabled:opacity-50 cursor-pointer"
              >
                {isLoggingOut ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75 cursor-pointer"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Logging Out...
                  </>
                ) : (
                  <>
                    <FaSignOutAlt className="mr-2 cursor-pointer" />
                    Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-sm py-2 px-6 sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          {user ? (
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-indigo-50 transition-colors">
                    <FaUser className="text-lg text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className="font-medium">{user.name}</span>
                </Link>

                <Link
                  to="/user_watch_videos"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-indigo-50 transition-colors">
                    <MdVideoLibrary className="text-lg text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className="font-medium">My Videos</span>
                </Link>
              </div>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center space-x-2 bg-white border border-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="flex items-center space-x-2 bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md cursor-pointer">
                <AiOutlineLogin />
                <span>Get Started</span>
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation (if needed) */}
        {user && (
          <div className="md:hidden flex justify-center mt-3 space-x-8 pb-2">
            <Link
              to="/profile"
              className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-colors"
              title="Profile"
            >
              <div className="p-2 rounded-full bg-gray-100">
                <FaUser className="text-lg" />
              </div>
              <span className="text-xs mt-1">Profile</span>
            </Link>

            <Link
              to="/user_watch_videos"
              className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-colors"
              title="Videos"
            >
              <div className="p-2 rounded-full bg-gray-100">
                <MdVideoLibrary className="text-lg" />
              </div>
              <span className="text-xs mt-1">Videos</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;