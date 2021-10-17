import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing the commerce
import { commerce } from "../lib/commerce";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
import Phones from "./Phones/Phones";
import Footer from "./Footer/Footer";
import SpecsCmp from "./SpecsCmp/SpecsCmp";
import Cart from "./Cart/Cart";

const App = () => {
  const [currentItem, setCurrentItem] = useState([]);
  const [laptopsList, setLaptopsList] = useState([]);
  const [phonesList, setPhonesList] = useState([]);
  const [retrievedData, setRetrievedData] = useState([]);

  // About the Commerce Cart
  // commerce.cart.retrieve().then((cart) => console.log(cart));

  const getCurrentItem = (curItem) => {
    setCurrentItem(curItem);
  };

  /**
   * Function to add the item to the cart....!
   */
  const addItemsToCart = (productID, quantity = 1) => {
    commerce.cart
      .add(productID, quantity)
      .then((response) => console.log(response));
  };

  useEffect(() => {
    commerce.products
      .list({ category_slug: ["laptop"] })
      .then((response) => setLaptopsList(response.data));
  }, []);
  useEffect(() => {
    commerce.products
      .list({ category_slug: ["phone"] })
      .then((response) => setPhonesList(response.data));
  }, []);
  useEffect(() =>
    commerce.cart.retrieve().then((response) => setRetrievedData(response))
  );

  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen justify-between">
        <Navbar retrievedData={retrievedData} />
        <Switch>
          <Route path="/" exact>
            <div>
              <Home />
              <Laptops
                getCurrentItem={getCurrentItem}
                laptopsList={laptopsList}
              />
              <Phones getCurrentItem={getCurrentItem} phonesList={phonesList} />
            </div>
          </Route>
          <Router path="/specs">
            <div>
              <SpecsCmp
                currentItem={currentItem}
                addItemsToCart={addItemsToCart}
              />
            </div>
          </Router>
          <Router path="/cart">
            <div>
              <Cart />
            </div>
          </Router>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
