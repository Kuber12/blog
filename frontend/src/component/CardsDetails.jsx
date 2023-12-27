import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./CardsDetails.css";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
const CardsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        setData(res.data.message);
        // console.log(res.data.message);
      })
      .catch((ex) => console.log(ex));
  }, []);
  // {
  //   data.image;
  // }
  // {
  //   data.headline;
  // }
  // {
  //   data.content;
  // }
  // {
  //   data.likes;
  // }
  // {
  //   data.date_published;
  // }
  return (
    <>
      <NewNavi />
      <div id="contain">
        <Helmet>
          <title>{data.headline}</title>
        </Helmet>
        <div id="subcontain">
          {/* left  */}
          <div id="left">
            <div id="imgContain">
              <img
                src={` ../../uploads/${data.image}`}
                alt={data.headline}
                srcset=""
                style={{ width: "100%", objectFit: "contain", height: "170px" }}
              />
            </div>
            <div id="headline">
              <h1>{data.headline}</h1>
            </div>
            <div id="leftcontent">
              <p>{data.content}</p>
            </div>
            <div id="btncontainer">
              <button id="likebtn">Like</button>
            </div>
          </div>
          {/* right  */}
          <div id="right">
            {/* user div  */}
            <div id="writtenBy">
              <h2 style={{ textAlign: "center" }}>
                <strong style={{ fontSize: "18px" }}>Written By</strong>
              </h2>
              <p style={{ textAlign: "center" }}>About User</p>
            </div>
            {/* button div  */}
            <div id="btncontainer">
              <button id="followbtn">Follow</button>
            </div>
            <div id="otherBlogs">
              <div id="subotherBlogs">
                <h1>
                  <strong style={{ fontSize: "20px" }}>Other Blogs</strong>
                </h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsDetails;
