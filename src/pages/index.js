import SearchData from "../api/SearchData";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";

const Index = () => {
  return (
    <div className="h-full dark:bg-gray-800">
      <Navbar logo={"Challenge"} />
      <SearchData />
      <Home />
    </div>
  );
};

export default Index;
