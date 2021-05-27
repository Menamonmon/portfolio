import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div>
        <Router>
          <Navbar
            title="Mena Filfil"
            homeLink={{ name: "Home", path: "/", key: "home" }}
            links={[
              { name: "Projects", path: "/projects", key: "projects" },
              { name: "About", path: "/about", key: "projects" },
            ]}
          />
          <Routes />
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;
