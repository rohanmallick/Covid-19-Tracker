import React from "react";

import Covid from "./components/Covid-19";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";

export const App = () => {
  return (
    <>
      <Nav title="COVID-19" />

      <Main />

      <Covid />

      <Search />

      <Footer />
    </>
  );
};

export default App;
