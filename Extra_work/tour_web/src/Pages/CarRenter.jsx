// // import React from "react";
// import { FaStar, FaMapMarkerAlt, FaCar,  } from "react-icons/fa";

// const cars = [
//   {
//     id: 1,
//     name: "Toyota Innova",
//     image: "https://via.placeholder.com/300",
//     price: "₹1500/day",
//     features: ["7 Seater", "AC", "Comfortable"],
//     fuelType: "Diesel",
//     rating: 4.5,
//     availableRoutes: [
//       "Delhi to Jammu Kashmir",
//       "Delhi to Punjab",
//       "Delhi to Haryana",
//     ],
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: "Maruti Swift",
//     image: "https://via.placeholder.com/300",
//     price: "₹1000/day",
//     features: ["5 Seater", "AC", "Economical"],
//     fuelType: "Petrol",
//     rating: 4.2,
//     availableRoutes: [
//       "Delhi to Uttarakhand",
//       "Delhi to Himachal",
//       "Delhi to Uttar Pradesh",
//     ],
//     isAvailable: false,
//   },
//   {
//     id: 3,
//     name: "Mahindra Scorpio",
//     image: "https://via.placeholder.com/300",
//     price: "₹2000/day",
//     features: ["7 Seater", "AC", "Luxury"],
//     fuelType: "Diesel",
//     rating: 4.8,
//     availableRoutes: [
//       "Delhi to Jammu Kashmir",
//       "Delhi to Punjab",
//       "Delhi to Haryana",
//     ],
//     isAvailable: true,
//   },
// ];

// export const CarRenter = () => {
//   return (
//     <div className="font-sans bg-gray-100 min-h-screen p-8">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
//         🚗 Rent a Car with Ease
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cars.map((car) => (
//           <div
//             key={car.id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
//           >
//             {/* Car Image */}
//             <div className="relative">
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-56 object-cover"
//               />
//               {car.isAvailable ? (
//                 <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
//                   Available
//                 </span>
//               ) : (
//                 <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
//                   Booked
//                 </span>
//               )}
//             </div>

//             {/* Car Details */}
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
//                 <FaCar className="mr-2 text-blue-500" /> {car.name}
//               </h2>

//               {/* Price */}
//               <p className="text-lg font-bold text-blue-600 mb-3">{car.price}</p>

//               {/* Features */}
//               <div className="mb-3">
//                 <h3 className="text-md font-semibold text-gray-700">
//                   Features:
//                 </h3>
//                 <ul className="list-disc list-inside text-gray-600 text-sm">
//                   {car.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Fuel Type & Rating */}
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-gray-600 font-medium">
//                   ⛽ {car.fuelType}
//                 </span>
//                 <span className="text-yellow-500 flex items-center">
//                   <FaStar className="mr-1" /> {car.rating}
//                 </span>
//               </div>

//               {/* Routes */}
//               <div className="mb-4">
//                 <h3 className="text-md font-semibold text-gray-700">
//                   Available Routes:
//                 </h3>
//                 <ul className="list-disc list-inside text-gray-600 text-sm">
//                   {car.availableRoutes.map((route, index) => (
//                     <li key={index}>{route}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Pickup Location */}
//               <div className="mb-4">
//                 <h3 className="text-md font-semibold text-gray-700 flex items-center">
//                   <FaMapMarkerAlt className="mr-2 text-red-500" />
//                   Pickup Location:
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Main Bazar Rd, Chuna Mandi, Paharganj, New Delhi, Delhi 110055
//                 </p>
//               </div>

//               {/* Book Now Button */}
//               <button
//                 className={`w-full py-3 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
//                   car.isAvailable
//                     ? "bg-blue-600 hover:bg-blue-700"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//                 disabled={!car.isAvailable}
//               >
//                 {car.isAvailable ? "Book Now" : "Unavailable"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// import React from "react";
import { FaStar, FaCar, FaGasPump, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";

const cars = [
  {
    id: 1,
    name: "Toyota Innova",
    image: "https://via.placeholder.com/300",
    price: "₹1500/day",
    features: ["7 Seater", "AC", "Comfortable"],
    fuelType: "Diesel",
    rating: 4.5,
    availableRoutes: [
      "Delhi to Jammu Kashmir",
      "Delhi to Punjab",
      "Delhi to Haryana",
    ],
    isAvailable: true,
    reviews: 32,
  },
  {
    id: 2,
    name: "Maruti Swift",
    image: "https://via.placeholder.com/300",
    price: "₹1000/day",
    features: ["5 Seater", "AC", "Economical"],
    fuelType: "Petrol",
    rating: 4.2,
    availableRoutes: [
      "Delhi to Uttarakhand",
      "Delhi to Himachal",
      "Delhi to Uttar Pradesh",
    ],
    isAvailable: true,
    reviews: 20,
  },
  {
    id: 3,
    name: "Mahindra Scorpio",
    image: "https://via.placeholder.com/300",
    price: "₹2000/day",
    features: ["7 Seater", "AC", "Luxury"],
    fuelType: "Diesel",
    rating: 4.8,
    availableRoutes: [
      "Delhi to Jammu Kashmir",
      "Delhi to Punjab",
      "Delhi to Haryana",
    ],
    isAvailable: true,
    reviews: 45,
  },
];

export const CarRenter = () => {
  return (
    <div className="font-sans  min-h-screen p-8">
      {/* Hero Section */}
      <div className="bg-blue-50 text-black text-center py-12 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-extrabold">Find Your Perfect Ride 🚗</h1>
        <p className="text-lg mt-3">Reliable. Affordable. Comfortable.</p>
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Car Image */}
            <div className="relative">
              {/* <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover rounded-t-lg"
              /> */}
              {car.isAvailable ? (
                <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  Available
                </span>
              ) : (
                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  Booked
                </span>
              )}
            </div>

            {/* Car Details */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                <FaCar className="mr-2 text-blue-500" /> {car.name}
              </h2>

              {/* Price & Rating */}
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-bold text-blue-600">{car.price}</p>
                <span className="text-yellow-500 flex items-center">
                  <FaStar className="mr-1" /> {car.rating} ({car.reviews}{" "}
                  reviews)
                </span>
              </div>

              {/* Features */}
              <div className="mb-3">
                <h3 className="text-md font-semibold text-gray-700">
                  Features:
                </h3>
                <ul className="list-none flex flex-wrap gap-2 text-gray-600 text-sm">
                  {car.features.map((feature, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fuel Type & Routes */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span className="flex items-center text-sm">
                  <FaGasPump className="mr-2" /> {car.fuelType}
                </span>
                <span className="flex items-center text-sm">
                  <MdOutlineAirlineSeatReclineExtra className="mr-2" />{" "}
                  {car.features[0]}
                </span>
              </div>

              {/* Routes */}
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-700">
                  Available Routes:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {car.availableRoutes.map((route, index) => (
                    <li key={index}>{route}</li>
                  ))}
                </ul>
              </div>

              {/* Book Now Button */}
              {/* <button
                className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-md ${
                  car.isAvailable
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-400 cursor-not-allowed text-white"
                }`}
                disabled={!car.isAvailable}
              >
                {car.isAvailable ? "Book Now" : "Unavailable"}
              </button> */}

               {/* Pickup Location */}
               <div className="mb-4">
                 <h3 className="text-md font-semibold text-gray-700 flex items-center">
                   <FaMapMarkerAlt className="mr-2 text-red-500" />
                   Pickup Location:
                 </h3>
                 <p className="text-gray-600 text-sm">
                   Main Bazar Rd, Chuna Mandi, Paharganj, New Delhi, Delhi 110055
                 </p>
               </div>

              <button className="inline-block w-full text-center bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition duration-300">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
