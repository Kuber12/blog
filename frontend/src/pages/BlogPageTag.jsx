import React, { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import NewCard from "../component/NewCard";
import axios from "axios";
import { useParams } from "react-router-dom";
const BlogPageTag = () => {
  const [data, setData] = useState([]);
  const { tag } = useParams();
  console.log(tag);
  useEffect(() => {
    // alert(tag);
    axios
      .get(`http://localhost:5000/api/blog/${tag}/tag`)
      //   .get(`http://localhost:5000/api/blog/Entertainment/tag`)
      .then((res) => {
        console.log(res.data.message);
        setData(res.data.message);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, [tag]);
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
        <NewCard data={data} />
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
