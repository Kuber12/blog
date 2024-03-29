/* The code is defining a functional component called `SearchBar` in JavaScript React. */
import React, { useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import search from "../Icons/search.png";
import axios from "axios";
import SearchContext from "../pages/SearchContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { searchTxt, SetSearchTxt } = useContext(SearchContext);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-backend-3dcg.onrender.com/api/tag")
      .then((res) => setTags(res.data.message))
      .catch((err) => console.log(err));
  }, []);
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
          <input
            className="searchInput"
            onChange={(e) => SetSearchTxt(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div>
        <div className="tags-container">
          <Link className="tags" to={`/Blogs`}>
            All
          </Link>
          {Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((tag, index) => (
              <Link
                className="tags"
                key={index}
                to={`/BlogPageTag/${tag.tagname}`}
              >
                {tag.tagname}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
