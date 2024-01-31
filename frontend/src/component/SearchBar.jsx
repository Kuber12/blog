import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import search from "../Icons/search.png";
import axios from "axios";
const SearchBar = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tag", { timeout: 5000 })
      .then((res) => setTags(res.data.message))
      .catch((err) => console.log(err));
  });
  const handleByTags = (tagValue) => {
    axios
      .get(`http://localhost:5000/api/blog/${tagValue}/tag`)
      .then((res) => {
        setTags(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        {/* <select className="selectCategories" name="" id="selectCategories">
          <option selected disabled value="">
            Tags
          </option>
          <option value="">Entertainment</option>
          <option value="">Funny</option>
          <option value="">Facts</option>
        </select> */}
      </div>
      <div>
        <div className="search-tags-container">
          {tags &&
            tags.map((tag, index) => (
              <button
                className="search-tags"
                onClick={() => handleByTags(tag.tagname)}
              >
                {tag.tagname}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
