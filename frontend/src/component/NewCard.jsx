import React, { useState, useEffect } from "react";
import "./NewCard.css";
import { FaEye } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useAsyncError } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import {
  faEye,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const NewCard = ({ data }) => {
  const imagePath = "../../uploads/";
  // console.log(data);
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
      <div className="blog-display">
        {data &&
          data.map((items, i) => (
              <Link className="link-to" to={`../OpenBlog/${items._id}`}>
            <div id="card-container" key={i}>
              <div id="img-container">
                <img
                  src={`${imagePath}${items.image}`}
                  alt={`${items.image}`}
                />
              </div>
              <div id="buttons-container">
                <div className="blog-action-icons">
                  <div key={1} className="blog-action-tooltip">
                    <div className="blog-tooltip-div">
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ fontSize: "25px", paddingRight: "5px" }}
                          />
                      <span>{data.views}</span>
                    </div>
                  </div>
                  <div key={2} className="blog-action-tooltip">
                    <div className="blog-tooltip-div">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: "25px", paddingRight: "5px" }}
                      />
                      <span></span>
                    </div>
                  </div>
                  <div key={3} className="blog-action-tooltip">
                    <div className="blog-tooltip-div">
                      <FontAwesomeIcon
                        icon={faComment}
                        style={{ fontSize: "25px", paddingRight: "5px" }}
                      />
                      <span></span>
                    </div>
                  </div>
                </div>
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
            </div>
          </Link>
          ))}
      </div>
    </>
  );
};

export default NewCard;
