import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./CardsDetails.css";
import { Helmet } from "react-helmet";
import NewNavi from "./NewwNav";
import { BiSolidLike } from "react-icons/bi";
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
            {/* <div id="headline"> */}
            {/* </div> */}
            <div id="leftcontent">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                {data.headline}
              </h1>
              <p>{data.content}</p>
            </div>
            <div id="btncontainer">
              <button id="likebtn">
                <BiSolidLike />
              </button>
              <div>
                <textarea type="text" id="commentInput" placeholder="comment" />
              </div>
              <div>
                <button className="btn btn-info">Submit</button>
              </div>
            </div>
          </div>
          {/* right  */}
          <div id="right">
            {/* user div  */}
            <div id="writtenBy">
              <div>
                <h2 style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: "18px" }}>Written By</strong>
                </h2>
                <p style={{ textAlign: "center" }}>About User</p>
              </div>
              <div>
                <button id="followbtn">Follow</button>
              </div>
            </div>
            {/* button div  */}
            {/* <div id="btncontainer">
              <button id="followbtn">Follow</button>
            </div> */}
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
            <div id="comments">
              <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
                Comments
              </h1>
              <div id="commentSection">
                <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>
                  Name
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ratione natus atque, quasi incidunt distinctio possimus earum
                  nostrum reprehenderit nemo dolorem.
                </p>
              </div>
              <div id="commentSection">
                <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>
                  Name
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ratione natus atque, quasi incidunt distinctio possimus earum
                  nostrum reprehenderit nemo dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsDetails;
