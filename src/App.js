import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import FetchData from "./api/FetchData";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <FetchData />
    </QueryClientProvider>
  );
}

export default App;
