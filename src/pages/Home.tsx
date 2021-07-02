import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Packages from "../components/Packages";

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <Packages />
      <Footer />
    </div>
  );
};

export default Home;
