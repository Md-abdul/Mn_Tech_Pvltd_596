import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import { Home } from "../Pages/Home";
import AuthRedirect from "../Pages/AuthRedirect";
import UserProfile from "../Pages/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "../Admin/AdminLogin";
import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from "../Admin/AdminDashboard";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import Video_Uploading from "../Admin/video_Uploading";
import AllVideos from "../Admin/AllVideos";
import AllUser from "../Admin/AllUser";
import UserVideos from "../Pages/UserVideos";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/auth-redirect" element={<AuthRedirect />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user_watch_videos"
        element={
          <ProtectedRoute>
            <UserVideos />
          </ProtectedRoute>
        }
      />

      {/* admin routes */}
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="video_upload" element={<Video_Uploading />} />
        <Route path="all_video" element={<AllVideos />} />
        <Route path="all_user" element={<AllUser />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
