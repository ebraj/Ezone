import React from "react";
import "./Home.scss";

// Related to the carousel
import Carousel from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="e-home py-5 px-6">
      <div className="lg:container mx-auto">
        <div className="e-flex-container">
          <div className="e__home">
            <div className="e__home--left">
              <h1 className="font-serif font-bold text-gray-100 text-5xl md:text-7xl">
                Ezone
              </h1>
              <h2 className="text-gray-300 font-light text-xl md:text-2xl py-2">
                Buy the stuffs under the affordable prices!
              </h2>
            </div>
            <div className="e__home--right">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
