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
  const { tag } = useParams();
  // console.log(tag);
  useEffect(() => {
    // alert(tag);
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${tag}/tag`)
      //   .get(`http://localhost:5000/api/blog/Entertainment/tag`)
      .then((res) => {
        // console.log(res.data.message);
        setData(res.data.message);
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
        // console.log(res.data);
        setFilteredData(res.data.message);
        // console.log(res.data.totalPages);
        // console.log(filteredData)
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
      {data.length > 0 ? (
        <NewCard data={inputFocued ? filteredData : data} />
      ) : (
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
