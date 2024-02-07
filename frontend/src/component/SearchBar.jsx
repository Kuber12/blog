import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import search from "../Icons/search.png";
import axios from "axios";
import useSearch from "../SearchContext/search";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tag", { timeout: 5000 })
      .then((res) => setTags(res.data.message))
      .catch((err) => console.log(err));
  });
  const handleByTags = (tagValue) => {
    // axios
    //   .get(`http://localhost:5000/api/blog/${tagValue}/tag`)
    //   .then((res) => {
    //     setData(res.data.message);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // settagFilter(tagValue);
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
      </div>
      <div>
        <div className="search-tags-container">
          <Link className="search-tags" to={`/Blogs`}>
            All
          </Link>
          {tags &&
            tags.map((tag, index) => (
              <Link className="search-tags" to={`/BlogPageTag/${tag.tagname}`}>
                {tag.tagname}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
