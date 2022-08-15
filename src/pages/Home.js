import React from "react";
import FetchData from "../api/FetchData";
import Navbar from "../components/Navbar/Navbar";
import Details from "./Details";

const Home = () => {
  return (
    <div className="h-full dark:bg-gray-800">
      <Navbar logo={"Challenge"} />
      <Details />

      {/* <FetchData /> */}
    </div>
  );
};

export default Home;
