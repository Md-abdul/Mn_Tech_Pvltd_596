import React from "react";
import "../Styles/textSlider.css";
export default function TextSlider() {
  return (
    <React.Fragment>
      <div className="text-slider-container">
        <div className="text-slider">
          <div className="text-item">
            Explore the world with Wanderia Travels! 🌍
          </div>
          <div className="text-item">
            Your adventure starts here—book your dream trip now! ✈️
          </div>
          <div className="text-item">
            Exclusive deals for top destinations await you! 🏖️
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
