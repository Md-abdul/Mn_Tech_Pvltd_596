import React from "react";
import guide from "../assets/tour-guide 1.png";
import flight from "../assets/travelling flight.png";
import religious from "../assets/hands 1.png";
import care from "../assets/medical-team 1.png";

export const Servicess = () => {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Explore Our Premium Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Wanderia Travels offers a range of carefully curated services to
            make your journey memorable and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Guided Tours */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img src={guide} alt="Guided Tours" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Guided Tours
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Experience local cultures with professional guides who make every
              destination come alive.
            </p>
          </div>

          {/* Service 2: Best Flights */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={flight}
                alt="Best Flights Options"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Best Flight Deals
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Enjoy exclusive flight options tailored to your budget and
              schedule for seamless travel.
            </p>
          </div>

          {/* Service 3: Religious Tours */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={religious}
                alt="Religious Tours"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Religious Pilgrimages
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Embark on spiritual journeys with all-inclusive packages to sacred
              destinations.
            </p>
          </div>

          {/* Service 4: Medical Insurance */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img src={care} alt="Medical Insurance" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Travel Insurance
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Stay worry-free with our comprehensive travel and medical
              insurance plans.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
