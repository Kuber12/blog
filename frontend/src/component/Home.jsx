/**
 * The Home component is a React functional component that renders a slider, best blog section, top
 * contributor section, and a commented out CardsHome component.
 * @returns The Home component is returning a JSX element.
 */
import React, { useContext, useEffect } from "react";
import Slider from "./slider";
import { Helmet } from "react-helmet";
// import CardsHome from "./CardsHome";
import BestBlog from "./BestBlog";
import TopContributor from "./TopContri";
import { GlobalContext } from "./GlobalContent";
const Home = () => {
  const data = useContext(GlobalContext);

  return (
    <div>
      <Helmet>
        <title>Home Page </title>
      </Helmet>
      <Slider />
      <BestBlog />
      <TopContributor />
    </div>
  );
};

export default Home;
