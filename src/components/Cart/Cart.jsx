import React, { useState } from "react";
import Payment from "../Payment/Payment";
import SuccessCmp from "../SuccessCmp/SuccessCmp";
import CartContent from "./CartContent";
import "./CartContent.scss";

const Cart = ({
  cartContents,
  retrievedData,
  removeTheCartItem,
  deleteTheCart,
}) => {
  const [isMailSent, setIsMailSent] = useState(false);
  const checkTheMailSent = () => {
    setIsMailSent(true);
  };
  if (cartContents.length === 0)
    return (
      <div className="p-4 font-bold text-xl text-center">Cart is Empty.</div>
    );
  if (isMailSent) return <SuccessCmp removeTheCartItem={removeTheCartItem} />;
  return (
    <>
      <div className="py-5 px-6">
        <div className="lg:container mx-auto ">
          {/* Mapping through the products */}
          <div className="e-flex-container-cart-part">
            <div>
              {/* Right Section */}
              <div className="e-grid-container-cart  py-3 text-center font-bold border-b">
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
              <div className="m- p-2 flex items-center justify-between flex-wrap border-t">
                <div className="text-xl font-bold py-2">
                  Total Price - {retrievedData.subtotal.formatted_with_symbol}
                </div>
                {/* <div>
                  <button className="my-2 px-6 py-3 rounded-full border inline-block bg-gray-900 text-gray-100">
                    <Link to="/payment">Proceed To Checkout</Link>
                  </button>
                </div> */}
              </div>
            </div>
            {/* Left Section */}
            <div>
              <Payment
                retrievedData={retrievedData}
                checkTheMailSent={checkTheMailSent}
                deleteTheCart={deleteTheCart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
