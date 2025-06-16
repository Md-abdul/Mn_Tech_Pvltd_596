import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

const ProtectedAdminRoute = ({ children }) => {
  const { admin, loading } = useAdminAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return admin ? (
    children || <Outlet />
  ) : (
    <Navigate to="/adminLogin" state={{ from: location }} replace />
  );
};

export default ProtectedAdminRoute;