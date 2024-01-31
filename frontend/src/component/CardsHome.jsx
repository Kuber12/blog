import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from "react-loader-spinner";
import SearchBar from "./SearchBar";
import NewCard from "./NewCard";
import "./SearchBar.css";
import search from "../Icons/search.png";

const CardsHome = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = (e) => {
    const searched = e.target.value;
    setSearchTerm(searched);
    const filteredResults = data.filter((item) =>
      item.headline.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

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
        setFilteredData((prev) => [...prev, ...newData]);
      } else {
        setHasMore(false);
      }
    } catch (er) {
      console.log("error when fetching new data");
      setHasMore(false);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = await fetchData(page);
      setData(initialData);
      setFilteredData(initialData);
    };
    loadInitialData();
  }, []);

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
          <SearchBar />
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
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          </div>

          <NewCard data={isInputFocused ? filteredData : data} />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default CardsHome;
