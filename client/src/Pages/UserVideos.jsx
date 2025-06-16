import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const UserVideos = () => {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRefs = useRef({});
  const watchIntervals = useRef({});
  const lastUpdateTimes = useRef({});

  // Format time for display
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://mn-tech-pvltd-596-1.onrender.com/api/video_upload/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setVideos(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch videos");
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchVideos();
    }
  }, [user]);

  // Track video play time
  const handlePlay = (videoId) => {
    if (!user) return;

    const video = videoRefs.current[videoId];
    if (!video) return;

    // Clear any existing interval for this video
    if (watchIntervals.current[videoId]) {
      clearInterval(watchIntervals.current[videoId]);
    }

    // Initialize last update time
    lastUpdateTimes.current[videoId] = Math.floor(video.currentTime);

    // Start new interval to track time
    watchIntervals.current[videoId] = setInterval(async () => {
      try {
        const currentTime = Math.floor(video.currentTime);

        // Only update if there's significant progress (at least 5 seconds)
        if (currentTime > lastUpdateTimes.current[videoId]) {
          const response = await axios.post(
            `https://mn-tech-pvltd-596-1.onrender.com/api/users/${videoId}/watch-time`,
            {
              timeWatched: currentTime,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          // Update local state if video was marked as completed
          if (response.data.completed) {
            setVideos((prevVideos) =>
              prevVideos.map((v) =>
                v._id === videoId
                  ? { ...v, userWatchTime: currentTime, completed: true }
                  : v
              )
            );
          }

          lastUpdateTimes.current[videoId] = currentTime;
        }
      } catch (err) {
        console.error("Error updating watch time:", err);
      }
    }, 5000); // Update every 5 seconds for better performance
  };

  const handlePause = (videoId) => {
    if (watchIntervals.current[videoId]) {
      clearInterval(watchIntervals.current[videoId]);
      delete watchIntervals.current[videoId];
    }
  };

  const handleEnded = (videoId) => {
  const currentIndex = videos.findIndex((v) => v._id === videoId);
  const nextVideo = videos[currentIndex + 1];
  if (nextVideo) {
    const nextVideoElement = videoRefs.current[nextVideo._id];
    if (nextVideoElement) {
      nextVideoElement.play();
    }
  }
};


  // Clean up intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(watchIntervals.current).forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {videos?.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="mt-4 text-gray-500 text-lg">
              No videos available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos?.map((video) => (
              <div
                key={video._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative pt-[56.25%]">
                  <video
                    ref={(el) => (videoRefs.current[video._id] = el)}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    onPlay={() => handlePlay(video._id)}
                    onPause={() => handlePause(video._id)}
                    onEnded={() => handleEnded(video._id)}
                  >
                    <source src={`${video.videoUrl}#t=0.5`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {video.completed && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description || "No description available"}
                  </p>

                  {/* Watch progress indicator */}
                  {video.userWatchTime > 0 && (
                    <div className="mt-2 mb-3">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          // style={{
                          //   width: `${Math.min(100, (video.userWatchTime / (video.duration || 1)) * 100%}`
                          // }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Watched: {formatTime(video.userWatchTime)} /{" "}
                        {formatTime(video.duration || 0)}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(video.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserVideos;
