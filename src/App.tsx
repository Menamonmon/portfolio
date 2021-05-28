import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { footerLinks, navLinks, socialMediaLinks } from "./consts";

import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import PageContainer from "./layout/PageContainer";

import "./App.css";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar homeLink={{ name: "Home", path: "/" }} links={navLinks} />
          <PageContainer>
            <Routes />
          </PageContainer>
          <Footer
            footerLinks={footerLinks}
            socialMediaLinks={socialMediaLinks}
          />
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
