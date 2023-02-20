import "./scss/style.scss";
import React from "react";
import Header from "./components/Header";
import Visual from "./pages/Visual";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Life from "./pages/Life";
import Vision from "./pages/Vision";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Visual />
        <Profile />
        <Skills />
        <Portfolio />
        <Life />
        <Vision />
      </div>
      <Footer />
    </div>
  );
};

export default App;
