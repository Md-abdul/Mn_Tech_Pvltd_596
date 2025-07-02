import React from "react";
// import Navbar from "../Components/Navbar";
import Headers from "../Components/Headers";
import FAQComponent from "./FAQComponent";
import ServicesLandingPage from "./ServicesLandingPage";

export const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Headers />
      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Digital Signage Benefits
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">✅</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Dynamic Content
            </h3>
            <p className="text-gray-600">
              Change your messaging in real-time. Showcase new products,
              promotions, events, or customer testimonials—all without
              reprinting.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">✅</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Higher Engagement
            </h3>
            <p className="text-gray-600">
              Moving visuals and animations capture 400% more attention than
              static signs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">✅</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Cost-Effective
            </h3>
            <p className="text-gray-600">
              Save long-term on printing costs and manual updates. Our
              cloud-based platforms let you update content across multiple
              locations instantly.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">✅</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Going digital means less paper, ink, and waste—great for
              sustainability-focused brands.
            </p>
          </div>
        </div>
      </section>

      <ServicesLandingPage />

      {/* Why We're Different Section */}
      <section id="why-us" className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
              OUR DIFFERENCE
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Why We're Different
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl mx-auto">
                🔧
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                In-House Experts
              </h3>
              <p className="text-gray-600 text-center">
                Designers, fabricators, installers—all under one roof. This
                ensures quality control and consistent communication throughout
                the project.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                Results-Focused
              </h3>
              <p className="text-gray-600 text-center">
                We don't just make signs—we help you reach goals. Whether it's
                increasing foot traffic, reinforcing brand image, or promoting
                offers, we design with purpose.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl mx-auto">
                🌟
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                Proven Track Record
              </h3>
              <p className="text-gray-600 text-center">
                Trusted by small businesses, franchises, real estate developers,
                and Fortune 500 companies alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section id="trends" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            INNOVATION
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Signage Trends to Watch in 2025
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Trend 1 */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Interactive Displays
            </h3>
            <p className="text-gray-600">
              Touchscreens and motion-activated content are becoming standard in
              retail and event environments.
            </p>
          </div>

          {/* Trend 2 */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              AI-Driven Content
            </h3>
            <p className="text-gray-600">
              Smart signage that adapts messaging based on time of day,
              audience, or local weather.
            </p>
          </div>

          {/* Trend 3 */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              QR Integration
            </h3>
            <p className="text-gray-600">
              Bridge the gap between physical and digital with QR codes linking
              to promotions, menus, or AR experiences.
            </p>
          </div>

          {/* Trend 4 */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Sustainable Materials
            </h3>
            <p className="text-gray-600">
              Bamboo signs, biodegradable vinyl, and energy-efficient LED
              lighting are in demand.
            </p>
          </div>

          {/* Trend 5 */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Augmented Reality (AR) Signage
            </h3>
            <p className="text-gray-600">
              Next-gen signage that blends physical displays with AR experiences
              via smartphones or AR glasses.
            </p>
          </div>
        </div>
      </section>
      <FAQComponent />
    </div>
  );
};
