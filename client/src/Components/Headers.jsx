import React from "react";

const Headers = () => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500')] bg-cover"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Business <br className="hidden md:block" /> with{" "}
            <span className="text-yellow-300">Digital Signage</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Engage customers, reduce costs, and stay ahead with our cutting-edge
            digital signage solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">400%</div>
              <div className="text-gray-600">More Engagement</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Content Updates</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Print Waste</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Headers;
