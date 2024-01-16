import React from "react";
import "./SearchBar.css";
import search from "../Icons/search.png";
const SearchBar = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          gap: "10px 20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "center",
            display: "flex",
            position: "relative",
            alignContent: "center",
          }}
        >
          <img className="searchIcon" src={search} alt="" />
          <input className="searchInput" type="text" placeholder="Search" />
        </div>
        <select name="" id="selectCategories">
          <option selected disabled value="">
            Tags
          </option>
          <option value="">Entertainment</option>
          <option value="">Funny</option>
          <option value="">Facts</option>
        </select>
      </div>
    </>
  );
};

export default SearchBar;
