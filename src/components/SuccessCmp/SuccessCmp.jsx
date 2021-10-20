import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";

const SuccessCmp = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  useEffect(() => {
    commerce.cart.delete().then(() => setIsSuccessful(true));
  }, []);
  if (!isSuccessful) return null;
  return (
    <div>
      <div className="py-5 px-6">
        <div className="lg:container mx-auto flex justify-center">
          <div className="bg-green-200 rounded-lg p-10 w-9/12 md:w-4/12">
            <h2 className="text-gray-900 text-xl text-center">
              Thank You! Checkout Successful.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCmp;
