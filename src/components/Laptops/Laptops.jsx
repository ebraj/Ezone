import React, { useState, useEffect } from "react";
import "./Laptops.scss";

// Importing the commerce
import { commerce } from "../../lib/commerce";

const Laptop = () => {
  const [laptopsList, setLaptopsList] = useState([]);
  useEffect(() => {
    commerce.products
      .list({ category_slug: ["laptop"] })
      .then((response) => setLaptopsList(response.data));
  }, []);
  if (laptopsList.length === 0) return false;
  return (
    <div className="py-8 px-6">
      <div className="lg:container mx-auto">
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

        {/* Laptop Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {laptopsList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {laptopsList.map((laptop) => (
                    <div
                      key={laptop.id}
                      className="flex flex-col justify-between p-4"
                    >
                      <div>
                        <img src={laptop.image.url} alt="laptop.name" />
                      </div>
                      <div className="h-full py-2 flex flex-col justify-between items-center">
                        <div>
                          <h2 className="pb-2 px-5">{laptop.name}</h2>
                          {/* <div
                            className="e-own-style font-light text-gray-700 p-2"
                            dangerouslySetInnerHTML={{
                              __html: laptop.description,
                            }}
                          ></div> */}
                        </div>
                        <h4 className="text-xl font-black">
                          {laptop.price.formatted_with_symbol}
                        </h4>
                      </div>
                      <div className="py-2">
                        <button className="px-6 py-2 hover:bg-gray-900 hover:text-gray-100 border-gray-500 rounded-full border">
                          Choose Specs
                        </button>
                      </div>
                    </div>
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

export default Laptop;
