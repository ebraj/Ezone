import React from "react";

// Importing the Product
import Products from "../Products/Products";

const Laptops = ({ getCurrentItem, laptopsList }) => {
  return (
    <div className="pt-8 px-6">
      <div className="lg:container mx-auto laptops-cmp">
        <div>
          {/* All about the title Section */}
          <div className="title py-5 pt-8">
            <div className="flex items-center justify-center text-gray-900 text-xl md:text-2xl">
              <span className="font-serif">01</span>
              <div className="filler"></div>
              <span>Laptops</span>
            </div>
          </div>
        </div>

        {/* Laptops Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {laptopsList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {laptopsList.map((laptop) => (
                    <Products
                      key={laptop.id}
                      laptop={laptop}
                      getCurrentItem={getCurrentItem}
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
