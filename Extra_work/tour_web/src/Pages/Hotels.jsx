import { useState, useEffect } from "react";
import { Houses } from "../Data/HouseData"; // Assuming your hotel data is imported from a file
import "../Styles/package.css"; // Reusing the same styles as the Packages component
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";

export const Hotels = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a delay
  useEffect(() => {
    setTimeout(() => {
      setHotelData(Houses); // Set the hotel data
      setLoading(false); // Update loading state
    }, 2000); // Simulate a 2-second delay
  }, []);

  // Display a spinner while loading
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading hotels...</p>
      </div>
    );
  }

  // Display the data once loaded
  return (
    <div className="packages-container">
      <h1 className="text-3xl font-bold text-center mb-8">Hotels</h1>
      <div className="tours-grid">
        {hotelData.map((hotel) => (
          <div
            key={hotel.id}
            className="tour-card bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={hotel.img}
                alt={hotel.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Rating */}
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <div className="flex items-center">
                  <span className="mr-2">{hotel.rating}</span>
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} size={20} className="text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Title */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  {hotel.title}
                </h3>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-3 text-gray-600">
                <TfiLocationPin />
                <span>{hotel.location}</span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-3">
                <span className="text-red-500 text-2xl font-bold mr-2">
                  {hotel.price}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  {hotel.originalPrice}
                </span>
              </div>

              {/* Button */}
              <Link
                to={`/hotels/${hotel.id}`} // Update this to your actual route
                className="inline-block w-full text-center bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
