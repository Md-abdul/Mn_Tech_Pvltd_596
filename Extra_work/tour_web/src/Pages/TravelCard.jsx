import { useEffect, useState } from "react";
// import cardImage from "../assets/card1.png";
// import amazon from "../assets/amazon.png";
// import egypt from "../assets/egypt.png";
// import maldives from "../assets/maldives.jpg";
// import bali from "../assets/bali.jpg";
// import tokyo from "../assets/tokyo.jpg";

import { CiCalendarDate, CiStar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
// const cardData = [
//   {
//     id: 1,
//     title: "Switzerland",
//     location: "Europe",
//     days: "8 Days",
//     people: "25 People Going",
//     price: "₹19000",
//     originalPrice: "₹1,200",
//     description:
//       "Explore Switzerland the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: cardImage,
//   },
//   {
//     id: 2,
//     title: "Gaza",
//     location: "Egypt",
//     days: "5 Days",
//     people: "15 People Going",
//     price: "₹900",
//     originalPrice: "₹1,100",
//     description:
//       "Explore the majestic Grand Canyon on this 6-day adventure in wonderfull location Gaza.",
//     img: egypt,
//   },
//   {
//     id: 3,
//     title: "Maldives",
//     location: "Asia",
//     days: "7 Days",
//     people: "10 People Going",
//     price: "₹2,000",
//     originalPrice: "₹2,500",
//     description:
//       "Explore the majestic Grand Canyon on this 6-day adventure in wonderfull location Maldives..",
//     img: maldives,
//   },
//   {
//     id: 4,
//     title: "Bali",
//     location: "Asia",
//     days: "6 Days",
//     people: "20 People Going",
//     price: "₹1,500",
//     originalPrice: "₹1,800",
//     description:
//       "Explore Bali the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: bali,
//   },
//   {
//     id: 5,
//     title: "Tokyo",
//     location: "Asia",
//     days: "4 Days",
//     people: "12 People Going",
//     price: "₹800",
//     originalPrice: "₹1,000",
//     description:
//       "Explore Tokyo the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: tokyo,
//   },
//   {
//     id: 6,
//     title: "Amazon",
//     location: "Brazil",
//     days: "9 Days",
//     people: "18 People Going",
//     price: "₹1,200",
//     originalPrice: "₹1,500",
//     description:
//       "Explore Tokyo the majestic Grand Canyon on this 6-day adventure in wonderfull location .",
//     img: amazon,
//   },
//   //   {
//   //     id: 7,
//   //     title: "Rome",
//   //     location: "Europe",
//   //     days: "9 Days",
//   //     people: "18 People Going",
//   //     price: "$1,200",
//   //     originalPrice: "$1,500",
//   //     description:
//   //       "Aperiam molestias maxime, eveniet cupiditate nihil consequatur dolores!",
//   //     img: cardImage,
//   //   },
// ];

// export const TravelCardSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 3) % cardData.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 3 < 0 ? cardData.length - 3 : prev - 3));
//   };

//   return (
//     <div className="relative max-w-7xl mx-auto py-8 px-4">
//       <div className="text-center mb-16 mt-20">
//         <h2 className="text-4xl font-extrabold text-gray-800">
//           Our Trending Tour Packages
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Embark on Unforgettable Journeys to the World Most Breathtaking
//           Destinations!
//         </p>
//       </div>
//       {/* Slider Container */}
//       <div className="flex items-center justify-center relative">
//         {/* Left Arrow */}
//         <button
//           className="absolute left-0 top-40 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md cursor-pointer"
//           onClick={prevSlide}
//         >
//           <MdArrowBackIos size={24} />
//         </button>

//         {/* Card Wrapper */}
//         <div className="overflow-hidden w-full rounded-xl py-5 ">
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-12"
//             style={{
//               transform: `translateX(-${
//                 currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))
//               }%)`,
//             }}
//           >
//             {cardData.map((card) => (
//               <div
//                 key={card.id}
//                 className="flex-shrink-0 w-full lg:w-[30%] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-400 hover:scale-105"
//               >
//                 {/* shadow-md hover:shadow-lg transition duration-300 */}
//                 {/* Image Section */}
//                 <div className="relative">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="w-full h-48 object-cover rounded-xl"
//                   />
//                   {/* <div className="absolute top-4 left-4">
//                       <img
//                         src={swissIcon}
//                         alt="Swiss Icon"
//                         className="w-10 h-10 rounded-full bg-white p-1 shadow-md"
//                       />
//                     </div> */}
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-4">
//                   {/* Days and People */}
//                   <div className="flex items-center text-gray-500 text-sm mb-2">
//                     <div className="flex items-center mr-4">
//                       <CiCalendarDate size={20} />
//                       <span className="ml-2">{card.days}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <GrGroup size={15} />
//                       <span className="ml-2">{card.people}</span>
//                     </div>
//                   </div>

//                   {/* Title and Rating */}
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-lg font-bold text-gray-800">
//                       {card.title}
//                     </h3>
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <CiStar key={i} size={20} className="text-yellow-400" />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="flex items-center gap-2 mb-3">
//                     <TfiLocationPin />
//                     {card.location}
//                   </div>

//                   {/* Price */}
//                   <div className="flex items-center mb-3">
//                     <span className="text-red-500 text-2xl font-bold mr-2">
//                       {card.price}
//                     </span>
//                     <span className="text-gray-400 text-sm line-through">
//                       {card.originalPrice}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 text-sm mb-6">
//                     {card.description}
//                   </p>

//                   {/* Button */}
//                   {/* <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
//                     Explore Now
//                   </button> */}
//                   <Link
//                     href="#_"
//                     className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-600 rounded-xl group"
//                   >
//                     <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-rose-500 rounded group-hover:-mr-4 group-hover:-mt-4">
//                       <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                     </span>
//                     <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-rose-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                     <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//                       Button Text
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-0 z-10 top-40 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md cursor-pointer"
//           onClick={nextSlide}
//         >
//           <MdArrowForwardIos size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// const cardData = [
//   {
//     id: 1,
//     title: "Switzerland",
//     location: "Europe",
//     days: "8 Days",
//     people: "25 People Going",
//     price: "₹ 19000",
//     originalPrice: "₹ 1,200",
//     description:
//       "Explore Switzerland the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: cardImage,
//   },
//   {
//     id: 2,
//     title: "Gaza",
//     location: "Egypt",
//     days: "5 Days",
//     people: "15 People Going",
//     price: "₹ 90000",
//     originalPrice: "₹ 1,100",
//     description:
//       "Explore the majestic Grand Canyon on this 6-day adventure in wonderfull location Gaza.",
//     img: egypt,
//   },
//   {
//     id: 3,
//     title: "Maldives",
//     location: "Asia",
//     days: "7 Days",
//     people: "10 People Going",
//     price: "₹ 20000",
//     originalPrice: "₹ 2,500",
//     description:
//       "Explore the majestic Grand Canyon on this 6-day adventure in wonderfull location Maldives..",
//     img: maldives,
//   },
//   {
//     id: 4,
//     title: "Bali",
//     location: "Asia",
//     days: "6 Days",
//     people: "20 People Going",
//     price: "₹ 15800",
//     originalPrice: "₹ 1,800",
//     description:
//       "Explore Bali the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: bali,
//   },
//   {
//     id: 5,
//     title: "Tokyo",
//     location: "Asia",
//     days: "4 Days",
//     people: "12 People Going",
//     price: "₹ 88900",
//     originalPrice: "₹1,000",
//     description:
//       "Explore Tokyo the majestic Grand Canyon on this 6-day adventure in wonderfull location.",
//     img: tokyo,
//   },
//   {
//     id: 6,
//     title: "Amazon",
//     location: "Brazil",
//     days: "9 Days",
//     people: "18 People Going",
//     price: "₹ 16900",
//     originalPrice: "₹ 1,900",
//     description:
//       "Explore Tokyo the majestic Grand Canyon on this 6-day adventure in wonderfull location .",
//     img: amazon,
//   },
// ];

const cardData = [
  {
    id: 1,
    title: "Kedarnath Yatra",
    location: "Uttarakhand, India",
    days: "6 Days",
    people: "20 People Going",
    price: "₹ 15,000",
    originalPrice: "₹ 18,000",
    description:
      "Embark on a spiritual journey to Kedarnath, one of the holiest shrines of Lord Shiva. Experience the divine aura of the Himalayas.",
    img: "https://www.trekupindia.com/tour/wp-content/uploads/2024/03/Kedarnath-Temple-Ek-Dham-Yatra-scaled.jpg",
  },
  {
    id: 2,
    title: "Badrinath Pilgrimage",
    location: "Uttarakhand, India",
    days: "7 Days",
    people: "18 People Going",
    price: "₹ 16,500",
    originalPrice: "₹ 19,000",
    description:
      "Visit the sacred Badrinath Temple, dedicated to Lord Vishnu. A perfect spiritual retreat in the Himalayas.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Badrinath_Temple_%2C_Uttarakhand.jpg/1200px-Badrinath_Temple_%2C_Uttarakhand.jpg",
  },
  {
    id: 3,
    title: "Vaishno Devi Yatra",
    location: "Jammu & Kashmir, India",
    days: "5 Days",
    people: "30 People Going",
    price: "₹ 10,000",
    originalPrice: "₹ 12,000",
    description:
      "Trek to the holy shrine of Mata Vaishno Devi in the Trikuta Mountains. Experience the spiritual energy of the Himalayas.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ioUd50vbPkoNY8sCrWRlBM_vi1qA-9FqsA&s",
  },
  {
    id: 4,
    title: "Amarnath Yatra",
    location: "Jammu & Kashmir, India",
    days: "8 Days",
    people: "12 People Going",
    price: "₹ 25,000",
    originalPrice: "₹ 28,000",
    description:
      "Undertake the challenging yet rewarding Amarnath Yatra to the holy cave of Lord Shiva. Explore the scenic beauty of Pahalgam and Sonamarg.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIWvd9PWfvgtivnObKufIa_teToMJAQ3dwQ&s",
  },
  {
    id: 5,
    title: "Golden Temple Pilgrimage",
    location: "Punjab, India",
    days: "3 Days",
    people: "40 People Going",
    price: "₹ 6,000",
    originalPrice: "₹ 7,500",
    description:
      "Visit the iconic Golden Temple in Amritsar, the holiest shrine of Sikhism. Experience the rich history and culture of Amritsar.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18RptbbmYHuS2KwiLI6KSsmCqgU-JbiUmlQ&s",
  },
  {
    id: 6,
    title: "Rameshwaram Darshan",
    location: "Tamil Nadu, India",
    days: "5 Days",
    people: "20 People Going",
    price: "₹ 12,000",
    originalPrice: "₹ 14,000",
    description:
      "Seek blessings at the Rameshwaram Temple, one of the Char Dhams. Explore the scenic beauty of Rameshwaram.",
    img: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/11/Rameshwaram-Temple-Rituals.jpg",
  },
];

export const TravelCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 cards on large screens

  // Function to handle window resize and update cardsToShow
  const updateCardsToShow = () => {
    if (window.innerWidth < 1024) {
      setCardsToShow(1); // Show 1 card on small screens
    } else {
      setCardsToShow(3); // Show 3 cards on large screens
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    updateCardsToShow(); // Set initial value
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsToShow) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - cardsToShow < 0
        ? cardData.length - cardsToShow
        : prev - cardsToShow
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-16 mt-20">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Our Trending Tour Packages
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Embark on Unforgettable Journeys to the World Most Breathtaking
          Destinations!
        </p>
      </div>
      {/* Slider Container */}
      <div className="flex items-center justify-center relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-40 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md cursor-pointer"
          onClick={prevSlide}
        >
          <MdArrowBackIos size={24} />
        </button>

        {/* Card Wrapper */}
        <div className="overflow-hidden w-full rounded-xl py-5">
          <div
            className="flex transition-transform duration-500 ease-in-out sm:gap-12 gap-0"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full lg:w-[30%] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-400 hover:scale-105"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Days and People */}
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <div className="flex items-center mr-4">
                      <CiCalendarDate size={20} />
                      <span className="ml-2">{card.days}</span>
                    </div>
                    <div className="flex items-center">
                      <GrGroup size={15} />
                      <span className="ml-2">{card.people}</span>
                    </div>
                  </div>

                  {/* Title and Rating */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-800">
                      {card.title}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <CiStar key={i} size={20} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <TfiLocationPin />
                    {card.location}
                  </div>

                  {/* Price */}
                  <div className="flex items-center mb-3">
                    <span className="text-red-500 text-2xl font-bold mr-2">
                      {card.price}
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      {card.originalPrice}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">
                    {card.description}
                  </p>

                  {/* Button */}
                  <Link
                    to="/packages"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-600 rounded-xl group"
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
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 z-10 top-40 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md cursor-pointer"
          onClick={nextSlide}
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </div>
  );
};
