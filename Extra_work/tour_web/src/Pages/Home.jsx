// import TextSlider from "../Components/TextSlider";
// import TextSlider from "../Components/TextSlider";
import { CarRenter } from "./CarRenter";
import HoneymoonSpecial from "./HoneymoonSpecial";
import { Servicess } from "./Servicess";
import TestimonialSlider from "./TestimonialSlider";
import { TravelCardSlider } from "./TravelCard";

export const Home = () => {
  return (
    <div>
      <TravelCardSlider />
      <HoneymoonSpecial />
      <CarRenter />
      <Servicess />
      {/* <TextSlider />_redirects  /* /index.html 200 */}
      <TestimonialSlider />
    </div>
  );
};
