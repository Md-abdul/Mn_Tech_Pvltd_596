import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Video_Uploading = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  
  const handleUpload = async () => {
  if (!videoFile || !title) return;

  setIsUploading(true);
  setProgress(0);

  try {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      throw new Error("Admin not authenticated");
    }

    // 1. Get Cloudinary upload signature
    const signatureResponse = await axios.get(
      "https://mn-tech-pvltd-596.onrender.com/api/video_upload/upload-signature",
      {
        params: { folder: "videos" },
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    const { signature, timestamp, apiKey, cloudName, upload_preset } =
      signatureResponse.data;

    // 2. Prepare FormData with all required fields
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", "videos");
    formData.append("upload_preset", upload_preset);

    // 3. Upload to Cloudinary
    const uploadResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // 4. Save video metadata to MongoDB
    const saveResponse = await axios.post(
      "https://mn-tech-pvltd-596.onrender.com/api/video_upload",
      {
        title,
        description,
        videoUrl: uploadResponse.data.secure_url,
        thumbnailUrl: uploadResponse.data.secure_url.replace('.mp4', '.jpg'),
        uploadedBy: "uploaded_by_admin"
      },
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );
    console.log(saveResponse)
    toast.success("Video uploaded successfully!");
    
    // Reset form
    setVideoFile(null);
    setPreviewUrl("");
    setTitle("");
    setDescription("");
    
  } catch (error) {
    console.error("Upload failed:", error);
    if (error.response) {
      console.error("Error details:", error.response.data);
    }
    toast.error(
      error.response?.data?.error ||
        error.message ||
        "Upload failed. Please try again."
    );
  } finally {
    setIsUploading(false);
  }
};


 
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Video</h2>

      <div className="space-y-6">
        {!previewUrl ? (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
            onClick={() => fileInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your video here, or click to select
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: MP4, MOV, AVI, etc.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="video/*"
              className="hidden"
            />
          </div>
        ) : (
          <div className="relative">
            <video
              src={previewUrl}
              controls
              className="w-full rounded-lg bg-black"
            />
            <button
              onClick={() => {
                setVideoFile(null);
                setPreviewUrl("");
              }}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video title"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video description"
          />
        </div>

        {isUploading && (
          <div className="pt-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Uploading...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-3 pt-2">
          <button
            onClick={() => {
              setVideoFile(null);
              setPreviewUrl("");
              setTitle("");
              setDescription("");
            }}
            disabled={isUploading}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!videoFile || !title || isUploading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video_Uploading;
