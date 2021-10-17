import React from "react";
import "./SpecsCmp.scss";

const SpecsCmp = ({ currentItem }) => {
  console.log(currentItem);
  if (currentItem.length === 0) return null;
  return (
    <div className="py-5 px-6">
      <div className="lg:container mx-auto">
        <div className="e-flex-container-specs">
          {/* Left Portion */}
          <div>
            <img src={currentItem.image.url} alt={currentItem.name} />
          </div>
          {/* Right Portion */}
          <div>
            {/* Title */}
            <div>
              <div>
                <h2 className="text-3xl font-black">{currentItem.name}</h2>
              </div>
              {/* All about the specs */}
              <div className="py-8">
                <div
                  className="e-own-style text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: currentItem.description,
                  }}
                ></div>
              </div>
              <div>
                <h2 className="font-bold text-xl">Select Quantity</h2>
                <div className="py-2">
                  <input
                    type="number"
                    defaultValue="1"
                    className="e-quantity-hld"
                    min="1"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black">
                  {currentItem.price.formatted_with_symbol}
                </h2>
              </div>
              <div className="py-3">
                <button className="px-10 py-2 hover:bg-gray-900 hover:text-gray-100 border-gray-500 rounded-full border">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsCmp;
