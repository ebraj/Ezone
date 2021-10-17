import React from "react";

//Importing this way so the I can use both the links
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-black py-6 px-6">
      <nav className="lg:container mx-auto text-gray-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold">
            <PageLink to="/">EZONE</PageLink>
          </h4>
        </div>
        <ul className="flex items-center text-gray-400">
          <li className="px-3 hover:text-gray-100  cursor-pointer">
            <Link to="laptops-cmp" spy={true} smooth={true} duration={600}>
              Laptops
            </Link>
          </li>
          <li className="px-3 hover:text-gray-100 cursor-pointer">
            <Link to="phones-cmp" spy={true} smooth={true} duration={900}>
              Phones
            </Link>
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="#eeeeff"
              >
                <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
