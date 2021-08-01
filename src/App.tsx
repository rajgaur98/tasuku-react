import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

library.add(fas, fab);

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
