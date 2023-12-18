import React from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";

const CardsHome = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#BDE3FF",
          margin: "0 auto",
          width: "100%",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <SearchBar />
        <Cards />
      </div>
    </>
  );
};

export default CardsHome;
