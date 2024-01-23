import React, { useState, useEffect } from "react";
// import Cards from "./Cards";
import SearchBar from "./SearchBar";
import NewCard from "./NewCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from "react-loader-spinner";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
const CardsHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blog/${page}`
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
      const initaldata = await fetchData(page);
      setData(initaldata);
      console.log(initaldata);
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
          style={{ width: "100%", overflow: "hidden" }}
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<RotatingLines />}

          // height={500}
        >
          <SearchBar />
          {/* <Cards /> */}

          <NewCard data={data} />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default CardsHome;
