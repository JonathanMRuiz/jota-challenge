import React from "react";
import Grids from "../components/Grids";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-full dark:bg-gray-800">
      <Navbar logo={"Challenge"} />
      <Grids />
    </div>
  );
};

export default Home;
