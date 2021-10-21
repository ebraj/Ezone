import React from "react";
import { Link } from "react-router-dom";
import "./Payment.scss";

const Payment = () => {
  return (
    <div className="pl-3">
      <div className="lg:container mx-auto">
        <div className="e_payment">
          <div className="e_payment-container rounded-lg mx-auto">
            <h2 className="bg-gray-900 p-5 text-center text-xl text-gray-100 rounded-tr-lg rounded-tl-lg">
              Customer Details
            </h2>

            <form className="py-4 px-6">
              <div className="my-3 flex justify-between items-center">
                <input
                  className=" p-4 rounded-lg w-full outline-none"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="my-3">
                <input
                  className=" p-4 w-full rounded-lg outline-none"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="my-3">
                <input
                  className=" p-4 w-full rounded-lg outline-none"
                  type="number"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <Link to="/success">
                <button className=" my-4 rounded-lg p-4 text-gray-100 bg-gray-900 w-full">
                  Send Details
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
