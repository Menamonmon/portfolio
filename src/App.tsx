import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

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
          <Helmet>
            <link
              rel="icon"
              type="image/jpg"
              href="https://lh3.googleusercontent.com/ogw/ADGmqu_3jjBeW4mWdjaNMdhLFxLJdgqNjNxbwhLuJ8yvTA=s32-c-mo"
            />
          </Helmet>
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
