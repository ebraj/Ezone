import React from "react";
// import { commerce } from "../../lib/commerce";
import "./CartContent.scss";

// Importing the commerceJS

const CartContent = ({ cartItem, removeTheCartItem }) => {
  return (
    <>
      <div className="e-grid-container-cart border my-5 p-2 font-light">
        {/* Image */}
        <div className="w-44 text-center">
          <img src={cartItem.image.url} alt={cartItem.name} />
        </div>
        <div>
          <h2>{cartItem.name}</h2>
        </div>
        <div className="text-center">{cartItem.quantity}</div>
        <div className="text-center font-black">
          {cartItem.line_total.formatted_with_symbol}
        </div>
        <div className="text-center grid place-content-center">
          <span
            className="cursor-pointer"
            onClick={() => {
              removeTheCartItem(cartItem.id);
            }}
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z" />
            </svg>
          </span>
        </div>
        {/* Update and Remove */}
      </div>
    </>
  );
};

export default CartContent;
