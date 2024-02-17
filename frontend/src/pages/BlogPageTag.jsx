/* This code is a React component called `BlogPageTag`. It imports necessary dependencies such as
`React`, `useContext`, `useEffect`, `useState`, `axios`, `useParams`, and `SearchContext`. It also
imports two components `SearchBar` and `NewCard` from their respective files. */
import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import NewCard from "../component/NewCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchContext from "./SearchContext";
const BlogPageTag = () => {
  const { searchTxt, inputFocued } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { tag } = useParams();

  useEffect(() => {
    if (searchTxt.length > 0) {
      return setIsInputFocused(true);
    } else {
      return setIsInputFocused(false);
    }
  }, [searchTxt]);
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${tag}/tag`)
      .then((res) => {
        setData(res.data.message.reverse());
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, [tag]);
  useEffect(() => {
    axios
      .get(
        `https://blog-backend-3dcg.onrender.com/api/blog/search/?query=${searchTxt}&tag=${tag}`
      )
      .then((res) => {
        setFilteredData(res.data.message.reverse());
        console.log(res.data.message.reverse());
      });
  }, [searchTxt]);
  return (
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
      {data.length || filteredData.length > 0 ? (
        <NewCard data={isInputFocused ? filteredData : data} />
      ) : (
        // <NewCard data={} />
        <h1
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "2rem",
            margin: "80px auto",
          }}
        >
          No Blogs Related To That Tag
        </h1>
      )}
    </div>
  );
};

export default BlogPageTag;
