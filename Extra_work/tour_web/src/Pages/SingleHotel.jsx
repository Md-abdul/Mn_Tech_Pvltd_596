import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Houses } from "../Data/HouseData"; // Import your hotel data
import { CiStar } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import TestimonialSlider from "./TestimonialSlider";

const SingleHotel = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [hotel, setHotel] = useState(null);

  // Fetch the hotel details based on the `id`
  useEffect(() => {
    const selectedHotel = Houses.find((item) => item.id === parseInt(id));
    setHotel(selectedHotel);
  }, [id]);

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <h1 className="text-3xl font-bold text-gray-800">{hotel.title}</h1>

        {/* Hotel Details */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <img
              src={hotel.img}
              alt={hotel.title}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Details */}
          <div className="md:w-1/2 space-y-4">
            {/* Location */}
            <div className="flex items-center text-gray-600 text-lg">
              <TfiLocationPin className="mr-2 text-rose-500" />
              <span>{hotel.location}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">{hotel.rating}</span>
              {[...Array(5)].map((_, i) => (
                <CiStar key={i} size={22} className="text-yellow-400" />
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-rose-600">
                {hotel.price}
              </span>
              <span className="text-gray-400 text-lg line-through ml-3">
                {hotel.originalPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{hotel.description}</p>

            {/* CTA Button */}
            <button className="bg-rose-600 hover:bg-rose-700 text-white text-lg font-semibold px-6 py-3 rounded-lg w-full md:w-auto cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <TestimonialSlider />
    </>
  );
};

export default SingleHotel;
