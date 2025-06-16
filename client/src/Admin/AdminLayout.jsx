import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

const AdminLayout = () => {
  const { admin, loading, logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-4">
        <div className="flex items-center mb-8 p-2">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="space-y-2">
          <Link
            to="/admin/dashboard"
            className={`block px-4 py-2 rounded hover:bg-indigo-600 transition ${
              location.pathname.includes("/admin/dashboard")
                ? "bg-indigo-800"
                : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/video_upload"
            className={`block px-4 py-2 rounded hover:bg-indigo-600 transition ${
              location.pathname.includes("/admin/video_upload")
                ? "bg-indigo-800"
                : ""
            }`}
          >
            Upload Video
          </Link>
          <Link
            to="/admin/all_video"
            className={`block px-4 py-2 rounded hover:bg-indigo-600 transition ${
              location.pathname.includes("/admin/all_video")
                ? "bg-indigo-800"
                : ""
            }`}
          >
            Video Library
          </Link>
          <Link
            to="/admin/all_user"
            className={`block px-4 py-2 rounded hover:bg-indigo-600 transition ${
              location.pathname.includes("/admin/all_user")
                ? "bg-indigo-800"
                : ""
            }`}
          >
            User Management
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/adminLogin");
            }}
            className="w-full text-left px-4 py-2 rounded hover:bg-indigo-600 transition mt-4"
          >
            Logout
          </button>
        </nav>
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
    </div>
  );
};

export default AdminLayout;
