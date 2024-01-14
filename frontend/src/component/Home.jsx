import React, { useContext } from "react";
import Slider from "./slider";
import { Helmet } from "react-helmet";
import CardsHome from "./CardsHome";
import BestBlog from "./BestBlog";
import TopContributor from "./TopContri";
import { GlobalContext } from "./GlobalContent";
const Home = () => {
  const data = useContext(GlobalContext);
  return (
    <div>
      <Helmet>
        <title>Home Page </title>
        <div>{data.username}</div>
      </Helmet>
      <Slider />
      <BestBlog />
      <TopContributor />
      <CardsHome />
    </div>
  );
};

export default Home;
