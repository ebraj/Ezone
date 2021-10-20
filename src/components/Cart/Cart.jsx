import React from "react";
import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import "./CartContent.scss";

const Cart = ({ cartContents, retrievedData, removeTheCartItem }) => {
  // if (cartContents.length === 0) return null;
  return (
    <>
      <div className="py-5 px-6">
        <div className="lg:container mx-auto">
          {/* Mapping through the products */}
          <div className="e-grid-container-cart my-2 p-2 text-center font-bold">
            <div>Item</div>
            <div>Description</div>
            <div>Quantity</div>
            <div>T.Price</div>
            <div>Remove</div>
          </div>
          {cartContents.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <CartContent
                  cartItem={cartItem}
                  removeTheCartItem={removeTheCartItem}
                />
              </div>
            );
          })}
          <div className="my-2 py-4 flex items-center justify-between flex-wrap">
            <div className="text-xl font-bold py-4">
              Total Price - {retrievedData.subtotal.formatted_with_symbol}
            </div>
            <div>
              <button className="px-6 py-2 rounded-full border inline-block bg-gray-900 text-gray-100">
                <Link to="/success">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
