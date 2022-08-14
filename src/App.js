import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import GetData from "./api/GetData";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <Home />
      <QueryClientProvider client={queryClient}>
        <GetData />
      </QueryClientProvider>
    </div>
  );
}

export default App;
