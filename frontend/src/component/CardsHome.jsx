import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from "react-loader-spinner";
import NewCard from "./NewCard";
import "./SearchBar.css";
import search from "../Icons/search.png";
import { Link } from "react-router-dom";
// import useSearch from "../SearchContext/search";

const CardsHome = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tag", { timeout: 5000 })
      .then((res) => setTags(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blog/${page}/${limit}`
      );
      console.log(response);
      return response.data.message;
    } catch (ex) {
      console.log("error fetching");
      return [];
    }
  };

  const fetchMoreData = async () => {
    try {
      setPage((prev) => prev + 1);
      const newData = await fetchData();
      if (newData.length > 0) {
        setData((prev) => [...prev, ...newData]);
      } else {
        setHasMore(false);
      }
    } catch (er) {
      console.log("error when fetching new data");
      setHasMore(false);
    }
  };

  const handleSearch = (e) => {
    const searched = e.target.value;
    console.log(searched);
    setSearchTerm(searched);

    axios
      .get(`http://localhost:5000/api/blog/search/?query=${searched}`)
      .then((res) => {
        console.log(res.data);
        setFilteredData(res.data.message);
        console.log(res.data.totalPages);
      });
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = await fetchData();
      setData(initialData);
      console.log(initialData);
      // setFilteredData(initialData);
    };
    loadInitialData();
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/blog/${tagFilter}/tag`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setTagData(res.data);
  //     })
  //     .catch((ex) => {
  //       console.log("Error while using tags" + ex);
  //     });
  // }, [tagFilter]);

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
        <InfiniteScroll
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<RotatingLines />}
        >
          {/* <SearchBar /> */}
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
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                // onKeyDown={handleInputFocus}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <>
            <div className="search-tags-container">
              {/* {tags &&
            tags.map((tag, index) => (
              <button
                className="search-tags"
                onClick={() => handleByTags(tag.tagname)}
              >
                {tag.tagname}
              </button>
            ))} */}
              <Link className="search-tags" to={`/Blogs`}>
                All
              </Link>
              {tags &&
                tags.map((tag, index) => (
                  <Link
                    className="search-tags"
                    to={`/BlogPageTag/${tag.tagname}`}
                  >
                    {tag.tagname}
                  </Link>
                ))}
            </div>
          </>
          <NewCard data={isInputFocused ? filteredData : data} />
          {/* <NewCard data={data} /> */}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default CardsHome;
