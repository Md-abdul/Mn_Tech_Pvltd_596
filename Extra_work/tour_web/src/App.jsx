import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AllRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
