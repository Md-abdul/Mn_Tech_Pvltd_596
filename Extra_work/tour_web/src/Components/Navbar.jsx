import { useEffect, useState } from "react";
import banner1 from "../assets/banners.png";
import banner2 from "../assets/about-us-banner1.png";
import banner3 from "../assets/banner3-c.png";
import banner4 from "../assets/banners4.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSticky ? "bg-white shadow-md" : "bg-white/10 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto px-4">
          <div className="mr-4 -mt-23 sm:ml-0 -ml-10">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="cursor-pointer w-70" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/hotels"
              className="px-5 py-3 rounded-md hover:bg-gray-200 font-semibold text-black-600"
            >
              Hotels
            </Link>
            <Link
              to="/packages"
              className="px-5 py-3 rounded-md hover:bg-gray-200 font-medium text-black-600"
            >
              Packages
            </Link>
            <Link
              to="/about"
              className="px-5 py-3 rounded-md hover:bg-gray-200 font-medium text-black-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-md bg-gray-200 hover:bg-gray-400 font-medium text-black-600"
            >
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          <button
            className="flex md:hidden p-2 rounded-md bg-gray-200 text-black hover:bg-gray-400"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative overflow-hidden h-64 md:h-150">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${banner1})`,
              animation: "slide 30s infinite",
            }}
          ></div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-opacity-25 z-50 transform transition-transform duration-600 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4">
          <button
            className="mb-4 p-2 rounded-md bg-gray-200 text-black hover:bg-gray-400"
            onClick={toggleDrawer}
          >
            <IoMdClose />
          </button>
          <div className="space-y-4">
            <Link
              to="/hotels"
              className="block px-5 py-3 rounded-md hover:bg-gray-200 font-medium text-gray-600"
            >
              Hotels
            </Link>
            <Link
              to="/packages"
              className="block px-5 py-3 rounded-md hover:bg-gray-200 font-medium text-gray-600"
            >
              Packages
            </Link>
            <Link
              to="/Contact"
              className="block px-5 py-3 rounded-md hover:bg-gray-200 font-medium text-gray-600"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="block px-5 py-3 rounded-md bg-gray-200 hover:bg-gray-400 font-medium text-gray-600"
            >
              About
            </Link>
            {user ? (
              <>
                <div className="flex items-center space-x-3 px-5 py-3">
                  {user.avatar && (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-gray-700">Welcome, {user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS for sliding banners
const styles = document.createElement("style");
styles.innerHTML = `
  @keyframes slide {
    0% { background-image: url(${banner1}); }
    33% { background-image: url(${banner2}); }
    66% { background-image: url(${banner3}); }
    100% { background-image: url(${banner4}); }
  }
`;
document.head.appendChild(styles);
