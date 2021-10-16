import React from "react";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
// import Phones from "./Phones/Phones";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Laptops />
      <Footer />
    </div>
  );
};

export default App;
