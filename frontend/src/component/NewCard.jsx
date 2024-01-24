import React, { useState, useEffect } from "react";
import "./NewCard.css";
import { FaEye } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useAsyncError } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const NewCard = ({ data }) => {
  const imagePath = "../../uploads/";
  console.log(data);
  //truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ".....";
    }
    return text;
  };
  // const res = await fetch(`http://localhost:5000/api/blog/${page}`);

  //fetching data

  // setData(res.data.message);

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
          alignItems: "center",
          gap: "50px 150px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {data &&
          data.map((items) => (
            <div id="card-container">
              <div id="img-container">
                <img
                  src={`${imagePath}${items.image}`}
                  alt={`${items.image}`}
                />
              </div>
              <div id="heading">
                <h1>{truncateText(items.headline, 25)}</h1>
              </div>
              <div id="tags">
                <div>
                  <h5> @{items.tag}</h5>
                  <h6>1 Hour Ago</h6>
                </div>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </div>
              <div id="buttons-container">
                <div></div>
                <div id="buttons">
                  <Link className="link-to" to={`../OpenBlog/${items._id}`}>
                    <FaEye />
                    1.5k
                  </Link>

                  <Link className="link-to" to={`../OpenBlog/${items._id}`}>
                    <FaRegCommentAlt />
                    25
                  </Link>
                  <Link className="link-to" to={`../OpenBlog/${items._id}`}>
                    <FaRegCommentAlt />
                    <FcLike />7
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default NewCard;
