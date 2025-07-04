import React, { useEffect, useState } from "react";
import axios from "axios";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.get(
          "https://mn-tech-pvltd-596.vercel.app/api/video_upload",
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

    fetchVideos();
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
                {/* Video Player Container */}
                <div className="relative pt-[56.25%]">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                  >
                    <source src={`${video.videoUrl}#t=0.5`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                   Title :- {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                   Descripation :- {video.description || "No description available"}
                  </p>
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
                   Uploaded Date :- {new Date(video.createdAt).toLocaleDateString("en-US", {
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

export default AllVideos;
