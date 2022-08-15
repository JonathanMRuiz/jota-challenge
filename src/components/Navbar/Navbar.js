import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchFilter from "../SearchFilter/SearchFilter";

const Navbar = ({ logo }) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {logo}
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <SearchFilter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
