import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/data"; // Import your data
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";
import TestimonialSlider from "./TestimonialSlider";

export const SingleTour = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [tour, setTour] = useState(null);

  // Fetch the tour details based on the `id`
  useEffect(() => {
    const selectedTour = data.find((item) => item.id === parseInt(id));
    setTour(selectedTour);
  }, [id]);

  if (!tour) {
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
        <h1 className="text-3xl font-bold text-gray-800">{tour.title}</h1>
        {/* Tour Details */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <img
              src={tour.img}
              alt={tour.title}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Details */}
          <div className="md:w-1/2 space-y-4">
            {/* Location */}
            <div className="flex items-center text-gray-600 text-lg">
              <TfiLocationPin className="mr-2 text-rose-500" />
              <span>{tour.location}</span>
            </div>

            {/* Days & People */}
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <CiCalendarDate size={22} className="mr-2 text-blue-500" />
                <span>{tour.days}</span>
              </div>
              <div className="flex items-center">
                <GrGroup size={18} className="mr-2 text-green-500" />
                <span>{tour.people}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <CiStar key={i} size={22} className="text-yellow-400" />
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-rose-600">
                {tour.price}
              </span>
              <span className="text-gray-400 text-lg line-through ml-3">
                {tour.originalPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{tour.description}</p>

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
