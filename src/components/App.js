import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
import Phones from "./Phones/Phones";
import Footer from "./Footer/Footer";
import SpecsCmp from "./SpecsCmp/SpecsCmp";

const App = () => {
  const [currentItem, setCurrentItem] = useState([]);
  const getCurrentItem = (curItem) => {
    setCurrentItem(curItem);
  };
  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen justify-between">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div>
              <Home />
              <Laptops getCurrentItem={getCurrentItem} />
              <Phones getCurrentItem={getCurrentItem} />
            </div>
          </Route>
          <Router path="/specs">
            <div>
              <SpecsCmp currentItem={currentItem} />
            </div>
          </Router>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
