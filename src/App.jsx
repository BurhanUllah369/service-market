import React from "react";
import Nav from "./components/reusableComponents/Nav";
import Header from "./components/reusableComponents/Header";
import Home from "./components/homepage/Home";
import Locations from "./components/reusableComponents/Locations";
import Footer from "./components/reusableComponents/Footer";

const App = () => {
  return (
    <main className="text-gray-800">
      <Nav />
      <Header />
      <Home />
      <Locations/>
      <Footer/>
    </main>
  );
};

export default App;
