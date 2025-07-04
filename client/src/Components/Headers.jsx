import React, { useState, useEffect } from "react";

const Headers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Business",
      highlight: "Digital Signage",
      description: "Engage customers, reduce costs, and stay ahead with our cutting-edge digital signage solutions",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500",
      button1: "Schedule Free Consultation",
      button2: "Watch Demo"
    },
    {
      title: "Next-Gen",
      highlight: "Interactive Displays",
      description: "Create immersive customer experiences with our touch-enabled digital display solutions",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500",
      button1: "Explore Solutions",
      button2: "View Case Studies"
    },
    {
      title: "Revolutionize Your",
      highlight: "Retail Space",
      description: "Increase sales and brand awareness with dynamic digital signage tailored for retail",
      bgImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1500",
      button1: "Retail Solutions",
      button2: "Get Inspired"
    },
    {
      title: "Smart Digital",
      highlight: "Wayfinding",
      description: "Enhance visitor experience with intuitive digital navigation systems",
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500",
      button1: "Learn More",
      button2: "Request Demo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <React.Fragment>
      {/* Hero Slider Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white h-screen max-h-[800px] overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.bgImage})`,
                  filter: 'brightness(0.4)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Content Slides */}
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-center w-full">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${index === activeSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title} <br className="hidden md:block" /> with{" "}
                    <span className="text-yellow-300 animate-pulse">{slide.highlight}</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      {slide.button1}
                    </button>
                    <button className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
                      {slide.button2}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-yellow-400 w-6' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Animated Scrolling Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Stats Section (unchanged) */}
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