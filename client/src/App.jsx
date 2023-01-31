import { ChakraProvider, Container } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { theme } from "../theme";
import { SynchronousContextProvider } from "./context/Context";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SynchronousContextProvider>
        <Container maxW="5xl" py="30px" h="100vh">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </SynchronousContextProvider>
    </ChakraProvider>
  );
}

export default App;
