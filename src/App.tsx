import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { navLinks } from "./consts";

import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import PageContainer from "./layout/PageContainer";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar homeLink={{ name: "Home", path: "/" }} links={navLinks} />
          <PageContainer>
            <Routes />
          </PageContainer>
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
