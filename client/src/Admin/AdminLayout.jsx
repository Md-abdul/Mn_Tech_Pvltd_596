import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import {
  FiHome,
  FiUpload,
  FiVideo,
  FiUsers,
  FiLogOut,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

const AdminLayout = () => {
  const { admin, loading, logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );

  if (!admin) {
    navigate("/adminLogin");
    return null;
  }

  // Function to get the current page title based on route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("/admin/dashboard")) return "Dashboard";
    if (path.includes("/admin/video_upload")) return "Upload Video";
    if (path.includes("/admin/all_video")) return "Video Library";
    if (path.includes("/admin/all_user")) return "User Management";
    return "Admin Panel";
  };

  const handleLogout = () => {
    logout();
    navigate("/adminLogin");
    setShowLogoutModal(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-4 flex flex-col">
        <div className="flex items-center mb-8 p-2">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="space-y-1 flex-1">
          <Link
            to="/admin/dashboard"
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 group ${
              location.pathname.includes("/admin/dashboard")
                ? "bg-indigo-800 font-medium shadow-md"
                : ""
            }`}
          >
            <FiHome className="mr-3 group-hover:text-indigo-200" />
            <span>Dashboard</span>
            <FiChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/admin/video_upload"
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 group ${
              location.pathname.includes("/admin/video_upload")
                ? "bg-indigo-800 font-medium shadow-md"
                : ""
            }`}
          >
            <FiUpload className="mr-3 group-hover:text-indigo-200" />
            <span>Upload Video</span>
            <FiChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/admin/all_video"
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 group ${
              location.pathname.includes("/admin/all_video")
                ? "bg-indigo-800 font-medium shadow-md"
                : ""
            }`}
          >
            <FiVideo className="mr-3 group-hover:text-indigo-200" />
            <span>Video Library</span>
            <FiChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/admin/all_user"
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 group ${
              location.pathname.includes("/admin/all_user")
                ? "bg-indigo-800 font-medium shadow-md"
                : ""
            }`}
          >
            <FiUsers className="mr-3 group-hover:text-indigo-200" />
            <span>User Management</span>
            <FiChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </nav>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 group mt-auto cursor-pointer"
        >
          <FiLogOut className="mr-3 group-hover:text-indigo-200" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {getPageTitle()}
            </h2>
            <div className="text-sm text-gray-600">
              Logged in as: {admin.email}
            </div>
          </div>
          <Outlet />
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Confirm Logout</h3>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={20} />
              </button>
            </div>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
