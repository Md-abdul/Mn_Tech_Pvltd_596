import { useState, useEffect } from "react";
import { data } from "../Data/data"; // Assuming your data is imported from a file
import "../Styles/package.css"; // Optional: for styling the spinner and data display
import { Link } from "react-router-dom";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";

export const Packages = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a delay
  useEffect(() => {
    setTimeout(() => {
      setTourData(data); // Set the data
      setLoading(false); // Update loading state
    }, 2000); // Simulate a 2-second delay
  }, []);

  // Display a spinner while loading
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading tours...</p>
      </div>
    );
  }

  // Display the data once loaded
  return (
    <div className="packages-container">
      <h1 className="text-3xl font-bold text-center mb-8">Tour Packages</h1>
      <div className="tours-grid">
        {tourData.map((tour) => (
          <div
            key={tour.id}
            className="tour-card bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Days and People */}
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <div className="flex items-center mr-4">
                  <CiCalendarDate size={20} />
                  <span className="ml-2">{tour.days}</span>
                </div>
                <div className="flex items-center">
                  <GrGroup size={15} />
                  <span className="ml-2">{tour.people}</span>
                </div>
              </div>

              {/* Title and Rating */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  {tour.title}
                </h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} size={20} className="text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-3 text-gray-600">
                <TfiLocationPin />
                <span>{tour.location}</span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-3">
                <span className="text-red-500 text-2xl font-bold mr-2">
                  {tour.price}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  {tour.originalPrice}
                </span>
              </div>

              {/* Button */}
              <Link
                to={`/packages/${tour.id}`} // Update this to your actual route
                className="inline-block w-full text-center bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition duration-300"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
