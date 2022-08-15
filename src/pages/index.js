import Navbar from "../components/Navbar/Navbar";
import Details from "./Details";
import Home from "./Home";

const Index = () => {
  return (
    <div className="h-full dark:bg-gray-800">
      <Navbar logo={"Challenge"} />
      <Home />
      <Details />
    </div>
  );
};

export default Index;
