import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="e-home py-5 px-6">
      <div className="lg:container mx-auto">
        <div className="e-flex-container">
          <div>
            <h1 className="text-6xl font-serif font-bold text-gray-100">
              Ezone
            </h1>
            <h2 className="text-gray-300 font-thin text-2xl py-2">
              Buy the things under the affordable prices!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
