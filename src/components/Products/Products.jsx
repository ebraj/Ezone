import React from "react";
import { Link as PageLink } from "react-router-dom";
import "./Products.scss";

const Products = ({ laptop, getCurrentItem }) => {
  const getTheCurrentItem = (e_item) => {
    getCurrentItem(e_item);
  };
  return (
    <>
      <div key={laptop.id} className="flex flex-col justify-between p-4">
        <div>
          <img src={laptop.image.url} alt="laptop.name" />
        </div>
        <div className="h-full py-2 flex flex-col justify-between items-center">
          <div>
            <h2 className="pb-2 px-5">{laptop.name}</h2>
          </div>
          <h4 className="text-xl font-black">
            {laptop.price.formatted_with_symbol}
          </h4>
        </div>
        <div className="py-2">
          <button className="px-6 py-2 hover:bg-gray-900 hover:text-gray-100 border-gray-500 rounded-full border">
            <PageLink
              to="/specs"
              onClick={() => {
                getTheCurrentItem(laptop);
              }}
            >
              Show Specs
            </PageLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
