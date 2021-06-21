import React from "react";
import "./css/App.css";

import Covid from "./components/Covid-19";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";


export const App = () => {
  return (
    <>
      <Nav title="COVID-19" />
      <Main />

      <Covid />

      <Footer />
     
    </>
  );
};

export default App;
