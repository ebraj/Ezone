import React from "react";

// Importing the Product
import Products from "../Products/Products";

const Laptops = ({ getCurrentItem, phonesList, addItemsToCart }) => {
  return (
    <div className="pt-4 px-6">
      <div className="lg:container mx-auto phones-cmp">
        <div>
          {/* All about the title Section */}
          <div className="title py-5 pt-8">
            <div className="flex items-center justify-center text-gray-900 text-xl md:text-2xl">
              <span className="font-serif">02</span>
              <div className="filler"></div>
              <span>Phones</span>
            </div>
          </div>
        </div>

        {/* Laptops Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {phonesList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {phonesList.map((laptop) => (
                    <Products
                      key={laptop.id}
                      laptop={laptop}
                      getCurrentItem={getCurrentItem}
                      addItemsToCart={addItemsToCart}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptops;
