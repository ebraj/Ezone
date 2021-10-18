import React from "react";
import CartContent from "./CartContent";
import "./CartContent.scss";

const Cart = ({ cartContents }) => {
  if (cartContents.length === 0) return false;
  return (
    <div className="py-5 px-6">
      <div className="lg:container mx-auto">
        {/* Mapping through the products */}
        {/* <div className="e-grid-container-cart my-5 p-2 text-center font-bold">
          <div>Item</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>T.Price</div>
          <div>Remove</div>
        </div> */}
        {cartContents.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <CartContent cartItem={cartItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
