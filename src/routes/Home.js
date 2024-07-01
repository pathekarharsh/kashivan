import React from "react";
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
import Footer from "../components/Footer";
import AboutCenter from "../components/AboutCenter";
import PlacesExp from "../components/PlacesExp";
import CardContainer from "../components/CardContainer";
import { Dakshin1 } from "../components/Dakshin1";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <AboutCenter />
      <Dakshin1 />
      <PlacesExp />

      <CardContainer />

      <Footer />
    </div>
  );
};

export default Home;
