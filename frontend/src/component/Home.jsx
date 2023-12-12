import React from "react";
import Slider from "./slider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Slider />
    </div>
  );
};

export default Home;
