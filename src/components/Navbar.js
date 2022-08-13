import React, { useState } from "react";

const Navbar = ({ logo }) => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {logo}
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <input className="rounded text-center" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
