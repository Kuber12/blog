import React, { useState, useEffect } from "react";
import hill from "../images/hill.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ".....";
    }
    return text;
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          //   display: "grid",
          //   gap: "50px 100px",
          //   gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "50px 20px",
          flexWrap: "wrap",
        }}
      >
        {data.slice(0, 6).map((items) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              height: "auto",
              minHeight: "200px",
              backgroundColor: "#FFFFFF",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "15px",
            }}
          >
            {/* images  */}
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={items.image}
                alt=""
                style={{
                  objectFit: "content",
                  height: "190px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div style={{ padding: "0 20px 20px 20px" }}>
              {/* title and tags  */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                  gap: "10px",
                }}
              >
                <h3>{truncateText(items.title, 25)} </h3>{" "}
                <h7
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "1px 15px ",
                    borderRadius: "20px",
                  }}
                >
                  Tags
                </h7>
              </div>
              {/* description  */}
              <div style={{ marginBottom: "10px" }}>
                <p style={{ textAlign: "justify" }}>
                  {truncateText(items.description, 100)}
                </p>
              </div>
              {/* button  */}
              <div style={{ marginBottom: "10px" }}>
                <Link
                  to={`../cardsDetails/${items.id}`}
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
