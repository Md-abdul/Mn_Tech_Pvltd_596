import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      fetchUserData(token, userId);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token, userId) => {
    try {
      // Ensure userId is a string
      const userIdStr = userId.toString();

      const response = await axios.get(
        `https://mn-tech-pvltd-596.vercel.app/api/users/${userIdStr}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setUser(response.data);
      console.log(response.data)
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
      logout();
    }
  };

  const login = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    fetchUserData(token, userId);
    navigate("/profile");
  };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   navigate("/login");
  // };

   const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // Call the backend logout endpoint
        await axios.post(
          "https://mn-tech-pvltd-596.vercel.app/api/users/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Continue with client-side logout even if API call fails
    } finally {
      // Perform client-side cleanup
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    }
  };


  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
