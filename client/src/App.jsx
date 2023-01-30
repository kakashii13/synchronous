import { ChakraProvider, Container } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { theme } from "../theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="5xl" py="30px">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
