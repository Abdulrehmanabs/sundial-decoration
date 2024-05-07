import React from "react";
import logo from "../assets/sundial-logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border py-1">
      <div className="max-w-screen-2xl mx-auto sm:px-12 px-4">
        <div className="flex justify-center sm:justify-between">
          <img src={logo.src} alt="" className="max-w-[280px]" />
          <div className="sm:flex hidden gap-4 items-center ">
            <Link href="/" className="flex items-center">
              <span className="bg-light_black text-white  py-2 rounded-full mr-2">
                <svg
                  className="w-8"
                  stroke="#fff"
                  fill="#fff"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  color="#fff"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                </svg>
              </span>
              <div className="xl:block hidden">
                <h2 className="font-semibold">My Account</h2>
                <p>Sign In</p>
              </div>
            </Link>
            <Link href="/" className="flex items-center">
              <span className="bg-light_black text-white  py-2 rounded-full mr-2">
                <svg
                  className="w-8"
                  stroke="#fff"
                  fill="#fff"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  color="#fff"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                </svg>
              </span>
              <div className="xl:block hidden">
                <h2 className="font-semibold">Cart</h2>
                <p>0 Items</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
