import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 mt-15 mb-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-black">Get in Touch</h1>
        <p className="text-gray-600 mt-2 text-lg">
          We are here to help you. Reach out to us anytime!
        </p>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-10 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg h-40 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Send Message
              </span>
              <span className="relative invisible">Send Message</span>
            </a>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-700">
            Contact Information
          </h2>
          <div className="flex items-center space-x-4 text-gray-600 text-lg">
            <FaMapMarkerAlt className="text-orange-600 text-2xl" />
            <p>3rd floor,  77, elliot road, kolkata-16</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 text-lg">
            <FaPhoneAlt className="text-orange-600 text-2xl" />
            <p>+91 8116376344</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 text-lg">
            <FaEnvelope className="text-orange-600 text-2xl" />
            <p>info@wanderiatravels.club</p>
          </div>
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-md">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096273!2d144.95373531550488!3d-37.816279742021274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f41fd1%3A0x9089e4b482ddc3df!2sTravel%20Agency!5e0!3m2!1sen!2sus!4v1623910168262!5m2!1sen!2sus"
              allowFullScreen=""
              loading="kolkata"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
