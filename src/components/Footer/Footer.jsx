import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="bg-black py-10 px-6">
      <div className=" e-flex-container-footer lg:container mx-auto text-gray-100">
        <div>
          <h2>© 2021 Ezone</h2>
        </div>
        <div>
          <h2 className="pb-2">Category</h2>
          <ul className="text-gray-400">
            <li>Laptops</li>
            <li>Phones</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h2 className="pb-2">Social Handles</h2>
          <ul className="text-gray-400">
            <li className="hover:text-gray-100">
              <a href="https://www.instagram.com/_anizh_g/">Instagram</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="https://github.com/ebraj">GitHub</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="https://twitter.com/ebraj_g">Twitter</a>
            </li>
            <li className="hover:text-gray-100">
              <a href="https://www.linkedin.com/in/ebrajgrg/">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Ebraj Grg.</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
