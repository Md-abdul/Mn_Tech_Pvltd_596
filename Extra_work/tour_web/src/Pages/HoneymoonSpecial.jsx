import React from "react";
import imageR from "../assets/romantic.png";
import efil from "../assets/efiltowr.png";
import { Link } from "react-router-dom";
const HoneymoonSpecial = () => {
  return (
    <React.Fragment>
      <div className="text-center mt-20">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Special Tour Packages
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Uncover hidden gems, iconic landmarks, and unforgettable experiences
          with our exclusive tour
        </p>
      </div>
      <section className="container mx-auto px-6 lg:px-20 py-12 flex flex-col lg:flex-row lg:items-center justify-center">
        {/* Left Section - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full sm:h-96 h-auto lg:h-auto overflow-hidden flex justify-center items-center sm:w-120 sm:mt-0 sm:-ml-0 -ml-20">
            <img
              src={imageR}
              alt="Romantic Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12 text-left flex flex-col items-center lg:items-start">
          <h4 className="text-sm font-semibold text-rose-500 tracking-wide uppercase">
            Honeymoon Specials
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
            Our Romantic Tropical <br /> Destinations
          </h2>
          <p className="text-gray-600 mt-4">
            Embark on a dreamy honeymoon escape to paradise, where golden <br />
            beaches, luxurious resorts, and intimate moments create the perfect{" "}
            <br />
            beginning to your forever love story in breathtaking <br />
            destinations worldwide.
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition duration-300">
            View Packages
          </button> */}
          <Link
            to="/packages"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-600 rounded-xl group mt-10"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-rose-500 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-rose-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore now
            </span>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-20 py-12 flex flex-col-reverse lg:flex-row lg:items-center justify-center">
        {/* Right Section - Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12 text-left flex flex-col items-center lg:items-start lg:ml-50">
          <h4 className="text-sm font-semibold text-rose-500 tracking-wide uppercase">
            Best Specials
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
            Our Best Tropical <br /> Destinations
          </h2>
          <p className="text-gray-600 mt-4">
            Embark on a dreamy tour escape to paradise, where golden <br />
            beaches, luxurious resorts, and intimate moments create the perfect{" "}
            <br />
            beginning to your forever love story in breathtaking <br />
            destinations worldwide.
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition duration-300">
            View Packages
          </button> */}
          <Link
            to="/packages"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-600 rounded-xl group mt-10"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-rose-500 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-rose-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore now
            </span>
          </Link>
        </div>

        {/* Right Section - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full lg:h-auto overflow-hidden flex justify-center items-center sm:w-90">
            <img
              src={efil}
              alt="Romantic Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HoneymoonSpecial;
