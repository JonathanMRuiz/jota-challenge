import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Details from "./pages/Details";
import Index from "./pages";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
