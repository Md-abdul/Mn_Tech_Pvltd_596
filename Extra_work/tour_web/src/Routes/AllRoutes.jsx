import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { About } from "../Pages/About";
import { Packages } from "../Pages/Packages";
import { SingleTour } from "../Pages/SingleTour";
import { Hotels } from "../Pages/Hotels";
import SingleHotel from "../Pages/SingleHotel";
export const AllRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/packages/:id" element={<SingleTour />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </React.Fragment>
  );
};
