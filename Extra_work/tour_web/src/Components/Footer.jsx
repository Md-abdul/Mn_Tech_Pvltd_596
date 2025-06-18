// import React from "react";
// import { Link } from "react-router-dom";
import mountain from "../assets/Footer img.png";
const Footer = () => {
  return (
    <footer
      className="bg-gray-50 relative"
      style={{
        backgroundImage: `url(${mountain})`, // Adjust the path as per your local folder structure
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto px-3 py-10 grid md:grid-cols-5 grid-cols-2 gap-8 md:gap-10 md:px-30">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Wanderia Travels</h2>
          <p className="text-sm text-gray-600 mt-2">
            Wanderia Travels helps companies manage payments easily.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-infinity"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Destinations Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Our Hotels</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">
                Vist our Hotels
              </a>
            </li>
          </ul>
        </div>

        {/* Destinations Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/packages" className="text-gray-600 hover:text-gray-900">
                Tours & Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:-ml-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Join Our Newsletter
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Will send you weekly updates for your better tour packages.
          </p>
          <div className="mt-4 md:w-10">
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:ring-orange-300"
              />
              <button
                type="submit"
                className="bg-rose-500 text-white px-4 py-2 rounded-r-lg hover:bg-rose-600 transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6">
        <p className="text-sm text-gray-600 text-center py-4">
          Copyright © Wanderia Travels 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
