import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./context/GlobalCOntext.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ChakraProvider>
);
