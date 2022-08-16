import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

import FetchData from "./api/FetchData";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <QueryClientProvider client={queryClient}>
        <FetchData />
      </QueryClientProvider> */}
    </BrowserRouter>
  );
}

export default App;
