import React from "react";

import Navbar from "./components/Navbar";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar
        title="Mena Filfil"
        homeLink={{ name: "Home", path: "/", key: "home" }}
        links={[
          { name: "Projects", path: "/projects", key: "projects" },
          { name: "About", path: "/about", key: "projects" },
        ]}
      ></Navbar>
    </div>
  );
};

export default App;
