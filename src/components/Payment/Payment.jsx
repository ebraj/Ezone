import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Payment.scss";

const Payment = ({ retrievedData, checkTheMailSent, deleteTheCart }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const submitDetails = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_l3c23cl",
      "contact_form",
      e.target,
      "user_LAt8z94Bl1sX0SxDEFy0U"
    );
  };
  return (
    <div>
      <div className="lg:container mx-auto">
        <div className="e_payment">
          <div className="e_payment-container rounded-lg mx-auto">
            <h2 className="bg-gray-900 p-5 text-center text-xl text-gray-100 rounded-tr-lg rounded-tl-lg">
              Customer Details
            </h2>

            <form
              className="py-4 px-6"
              onSubmit={(e) => {
                submitDetails(e);
                checkTheMailSent();
                setTimeout(() => {
                  deleteTheCart();
                }, 2000);
              }}
            >
              <div className="my-3 ">
                <input
                  className=" p-4 rounded-lg w-full outline-none"
                  type="text"
                  placeholder="Full Name"
                  required
                  name="user_name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="my-3">
                <input
                  className=" p-4 w-full rounded-lg outline-none"
                  type="email"
                  placeholder="Email"
                  required
                  name="user_email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3 e-flex-form">
                <div className="p-4 rounded-lg bg-gray-900 text-gray-100">
                  T.Quantity
                </div>
                <div className="w-full">
                  <input
                    className=" p-4 w-full rounded-lg outline-none"
                    type="text"
                    required
                    name="user_quantity"
                    value={retrievedData.total_items}
                    readOnly
                  />
                </div>
              </div>
              <div className="my-3 e-flex-form">
                <div className="p-4 rounded-lg bg-gray-900 text-gray-100">
                  T.Amount
                </div>
                <div className="w-full">
                  <input
                    className=" p-4 w-full rounded-lg outline-none"
                    type="text"
                    required
                    name="user_amount"
                    value={retrievedData.subtotal.formatted_with_symbol}
                    readOnly
                  />
                </div>
              </div>

              {/* <Link to="/success"> */}
              <button className=" my-4 rounded-lg p-4 text-gray-100 bg-gray-900 w-full">
                Checkout
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
