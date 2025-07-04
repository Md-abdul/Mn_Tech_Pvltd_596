import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiLogIn,
  FiRefreshCw,
  FiChevronDown,
  FiChevronUp,
  FiClock,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
  });

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(
        `https://mn-tech-pvltd-596.vercel.app/api/users?page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUsers(response.data.data);
      setPagination({
        currentPage: response.data.pagination.currentPage,
        totalPages: response.data.pagination.totalPages,
        totalUsers: response.data.pagination.totalUsers,
      });
      setExpandedRows([]); // Reset expanded rows when page changes
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Never";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleRow = (userId) => {
    setExpandedRows((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const formatWatchTime = (seconds) => {
    if (!seconds) return "0s";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let result = [];
    if (hours > 0) result.push(`${hours}h`);
    if (minutes > 0) result.push(`${minutes}m`);
    if (secs > 0 || result.length === 0) result.push(`${secs}s`);

    return result.join(" ");
  };

  const formatLoggedTime = (seconds) => {
    if (!seconds) return "0s";

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let result = [];
    if (days > 0) result.push(`${days}d`);
    if (hours > 0) result.push(`${hours}h`);
    if (minutes > 0 || result.length === 0) result.push(`${minutes}m`);

    return result.join(" ");
  };

  const getUserInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FiRefreshCw className="animate-spin text-indigo-500 text-2xl" />
        <span className="ml-2 text-gray-600">Loading users...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg max-w-md mx-auto">
        <p className="font-medium">Error loading users</p>
        <p className="text-sm mt-1">{error}</p>
        <button
          onClick={() => fetchUsers()}
          className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiUser className="mr-2" /> User Management
          </h2>
          <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
            Total: {pagination.totalUsers} users
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Watch Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Activity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <React.Fragment key={user._id}>
                <tr
                  className={`hover:bg-gray-50 ${
                    expandedRows.includes(user._id) ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
                        {user.avatar ? (
                          <img
                            className="h-full w-full object-cover"
                            src={user.avatar}
                            alt={user.name || "User avatar"}
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "block";
                            }}
                          />
                        ) : null}
                        <span
                          className={`text-indigo-600 font-medium text-lg ${
                            user.avatar ? "hidden" : "block"
                          }`}
                        >
                          {getUserInitial(user.name)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name || "Unknown User"}
                          <span className="ml-2 text-xs text-gray-500">
                            ID: {user._id.substring(0, 6)}...
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <FiMail className="mr-1 text-gray-400" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.isGoogleAuth
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.isGoogleAuth ? (
                          <span className="flex items-center">
                            <FaGoogle className="mr-1" /> Google
                          </span>
                        ) : (
                          "Email"
                        )}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <FiLogIn className="mr-1" />
                        {user.tokens?.length || 0}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiClock className="mr-2 text-gray-400" />
                      <span className="text-sm font-medium">
                        {formatWatchTime(user.totalWatchTime)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {formatDate(
                        user.tokens?.length > 0
                          ? user.tokens[user.tokens.length - 1].createdAt
                          : null
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => toggleRow(user._id)}
                      className="text-indigo-600 hover:text-indigo-900 flex items-center cursor-pointer"
                    >
                      {expandedRows.includes(user._id) ? (
                        <>
                          <FiChevronUp className="mr-1" /> Less
                        </>
                      ) : (
                        <>
                          <FiChevronDown className="mr-1" /> More
                        </>
                      )}
                    </button>
                  </td>
                </tr>
                {expandedRows.includes(user._id) && (
                  <tr className="bg-gray-50">
                    <td colSpan="5" className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">Joined:</span>
                            <span className="font-medium">
                              {formatDate(user.createdAt)}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">
                              Last Login:
                            </span>
                            <span className="font-medium">
                              {user.tokens?.length > 0
                                ? formatDate(
                                    user.tokens[user.tokens.length - 1]
                                      .createdAt
                                  )
                                : "Never"}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">
                              Last Session:
                            </span>
                            <span className="font-medium">
                              {user.lastLogoutTime
                                ? `${formatDate(
                                    user.lastLoginTime
                                  )} to ${formatDate(user.lastLogoutTime)}`
                                : "Currently active"}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">
                              Total Time:
                            </span>
                            <span className="font-medium">
                              {formatLoggedTime(user.totalLoggedInTime)}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">
                              Login Count:
                            </span>
                            <span className="font-medium">
                              {user.tokens?.length || 0}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-500 w-32">User ID:</span>
                            <span className="font-mono text-xs">
                              {user._id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => fetchUsers(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-sm text-gray-700">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
              onClick={() => fetchUsers(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing page{" "}
                <span className="font-medium">{pagination.currentPage}</span> of{" "}
                <span className="font-medium">{pagination.totalPages}</span>
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => fetchUsers(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <span className="sr-only">Previous</span>
                  &larr;
                </button>
                {Array.from(
                  { length: Math.min(5, pagination.totalPages) },
                  (_, i) => {
                    let pageNum;
                    if (pagination.totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (pagination.currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (
                      pagination.currentPage >=
                      pagination.totalPages - 2
                    ) {
                      pageNum = pagination.totalPages - 4 + i;
                    } else {
                      pageNum = pagination.currentPage - 2 + i;
                    }
                    return pageNum;
                  }
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => fetchUsers(page)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      page === pagination.currentPage
                        ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => fetchUsers(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <span className="sr-only">Next</span>
                  &rarr;
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUser;
