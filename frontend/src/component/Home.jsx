import React from "react";
import Slider from "./slider";
import { Helmet } from "react-helmet";
import CardsHome from "./CardsHome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Slider />
      <CardsHome />
    </div>
  );
};

export default Home;
