import React, { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter as Router,
} from "react-router-dom";

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
import SuccessCmp from "./SuccessCmp/SuccessCmp";

const App = () => {
  const [currentItem, setCurrentItem] = useState([]);
  const [laptopsList, setLaptopsList] = useState([]);
  const [phonesList, setPhonesList] = useState([]);
  const [retrievedData, setRetrievedData] = useState([]);
  const [cartContents, setCartContents] = useState([]);

  const getCurrentItem = (curItem) => {
    setCurrentItem(curItem);
  };

  /**
   * Function to add the item to the cart....!
   */
  const addItemsToCart = (productID, quantity = 1) => {
    commerce.cart.add(productID, quantity);
  };

  // useEffect for the laptopsList
  useEffect(() => {
    commerce.products
      .list({ category_slug: ["laptop"] })
      .then((response) => setLaptopsList(response.data));
  }, []);
  // useEffect for the phonesList
  useEffect(() => {
    commerce.products
      .list({ category_slug: ["phone"] })
      .then((response) => setPhonesList(response.data));
  }, []);
  // useEffect for retrieving the products
  useEffect(
    () =>
      commerce.cart.retrieve().then((response) => setRetrievedData(response)),
    [retrievedData]
  );
  // useEffect for the obtaining the cart contents
  useEffect(() => {
    commerce.cart.contents().then((items) => setCartContents(items));
  }, [cartContents]);

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
          <Route path="/specs">
            <div className="flex-grow">
              <SpecsCmp
                currentItem={currentItem}
                addItemsToCart={addItemsToCart}
              />
            </div>
          </Route>
          <Route path="/cart">
            <div className="flex-grow">
              <Cart cartContents={cartContents} retrievedData={retrievedData} />
            </div>
          </Route>
          <Route path="/success">
            <div className="flex-grow">
              <SuccessCmp />
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
