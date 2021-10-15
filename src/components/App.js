import React from "react";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
import Phones from "./Phones/Phones";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Laptops />
      {/* <Phones /> */}
    </div>
  );
};

export default App;
