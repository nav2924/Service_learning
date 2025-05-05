import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShimmerButton from "./magicui/shimmer-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Approach", path: "/approach" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 s backdrop-blur-md w-6/12 sm:w-4/5 md:w-4/5 text-center flex flex-col sm:flex-row justify-between items-center p-4 my-4 mx-auto border border-gray-200 rounded-full shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="/logo.png"
            className="h-8 md:h-10 w-auto"
            alt="Flowbite Logo"
          />
        </div>
        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`flex flex-col text-xl sm:flex-row gap-8 md:gap-12 mt-4 text-green-900 font-semibold sm:mt-0 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        {Menu.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="hover:underline cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div className="hidden sm:block mt-4 sm:mt-0">
        <Link to="/donate">
          <ShimmerButton className="shadow-xl bg-primary px-3 py-1 md:px-4 md:py-2">
            <span className="text-center text-xs md:text-sm font-medium leading-none tracking-tight text-white">
              Donate
            </span>
          </ShimmerButton>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
