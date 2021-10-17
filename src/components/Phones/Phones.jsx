import React, { useState, useEffect } from "react";
import { Link as PageLink } from "react-router-dom";

// Importing the commerce
import { commerce } from "../../lib/commerce";

const Phone = ({ getCurrentItem }) => {
  const [phonesList, setPhonesList] = useState([]);
  const getTheCurrentPhone = (e_phone) => {
    getCurrentItem(e_phone);
  };
  useEffect(() => {
    commerce.products
      .list({ category_slug: ["phone"] })
      .then((response) => setPhonesList(response.data));
  }, []);
  if (phonesList.length === 0) return false;
  return (
    <div className="py-8 px-6">
      <div className="lg:container mx-auto">
        <div className="phones-cmp">
          {/* All about the title Section */}
          <div className="title py-5 pt-8">
            <div className="flex items-center justify-center text-gray-900 text-xl md:text-2xl">
              <span className="font-serif">02</span>
              <div className="filler"></div>
              <span>Phones</span>
            </div>
          </div>
        </div>

        {/* Phone Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {phonesList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {phonesList.map((phone) => (
                    <div
                      key={phone.id}
                      className="flex flex-col justify-between p-4"
                    >
                      <div>
                        <img src={phone.image.url} alt="phone.name" />
                      </div>
                      <div className="h-full py-2 flex flex-col justify-between items-center">
                        <div>
                          <h2 className="pb-2 px-5">{phone.name}</h2>
                          {/* <div
                            className="e-own-style font-light text-gray-700 p-2"
                            dangerouslySetInnerHTML={{
                              __html: phone.description,
                            }}
                          ></div> */}
                        </div>
                        <h4 className="text-xl font-black">
                          {phone.price.formatted_with_symbol}
                        </h4>
                      </div>
                      <div className="py-2">
                        <button className="px-6 py-2 hover:bg-gray-900 hover:text-gray-100 border-gray-500 rounded-full border">
                          <PageLink
                            to="/specs"
                            onClick={() => {
                              getTheCurrentPhone(phone);
                            }}
                          >
                            Show Specs
                          </PageLink>
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

export default Phone;
