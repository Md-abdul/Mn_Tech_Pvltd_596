import explore from "../assets/Sepratir.png";
export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-gray-600 text-center mb-10 mt-15">
              Discover the World with Us
            </h1>

        <div className=" overflow-hidden shadow-lg mb-12">
          <img
            src={explore}
            alt="Travel Adventure"
            className="w-full h-full object-cover"
          />
        </div>


        {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            
          </div> */}
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Wanderia Travels, we believe that travel is more than just
              visiting new places—its about creating unforgettable experiences.
              Our mission is to provide you with unique and personalized travel
              adventures that inspire and enrich your life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are seeking a relaxing beach getaway, a thrilling
              mountain expedition, or a cultural immersion, we have got you
              covered. Our team of expert guides and travel enthusiasts is
              dedicated to making your journey seamless and memorable.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Our Tours
            </button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Travel Consultant</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Michael Brown
              </h3>
              <p className="text-gray-600">Adventure Guide</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Emily Davis
              </h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                Wanderia Travels made our trip to Iceland unforgettable. The
                guides were knowledgeable, and the itinerary was perfectly
                planned!
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                - Sarah Johnson
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic">
                From start to finish, everything was seamless. We can not wait
                to book our next adventure with Wanderia Travels!
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                - Mark Williams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AboutUs;
