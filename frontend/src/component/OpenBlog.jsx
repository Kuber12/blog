import React, { useEffect, useState } from "react";
import "./OpenBlogg.css";
import Hill from "../images/hill.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
  faThumbsUp,
  faShare,
  faPlus,
  faEye,
  faHeart,
  faComment,
  faEllipsis,
  faUser,
  faPaperPlane,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
const OpenBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // console.log(id);
  console.log(data);
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
    <div className="MainP">
      <Helmet>{/* <title>{data.headline}</title> */}</Helmet>
      <div className="blog">
        <div className="blog-content">
          <img
            className="blog-content-image"
            src={`../../uploads/${data.image}`}
            alt="blog image"
          />
          <div className="blog-content-text">
            <h1>{data.headline}</h1>
            <p>{data.content}</p>
          </div>
          <div className="blog-action-icons">
            <FontAwesomeIcon
              icon={faEye}
              style={{ fontSize: "25px", paddingRight: "5px" }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: "25px", paddingRight: "5px" }}
            />
            <FontAwesomeIcon
              icon={faComment}
              style={{ fontSize: "25px", paddingRight: "5px" }}
            />
            <FontAwesomeIcon
              icon={faEllipsis}
              style={{ fontSize: "25px", paddingRight: "5px" }}
            />
          </div>
          <div className="comment-box">
            <div className="comment">
              <div className="comment-user"></div>
              <p className="comment-text">Comment Here</p>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px" }} />
            </div>
            <div className="comment">
              <div className="comment-user"></div>
              <p className="comment-text">Comment Here</p>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px" }} />
            </div>
            <div className="comment-write">
              <input type="text" className="comment-input" />
              <button className="comment-send">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ fontSize: "25px" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="blog-user">
            <div className="blog-user-details">
              <div className="blog-user-head">
                <div className="blog-user-pic"></div>
                <div>
                  <div>{data.username}</div>
                  <div>{data.username}</div>
                  <div>100 Followers</div>
                </div>
              </div>
              <div className="blog-user-bio">
                THIS IS MY BIO. I am a content creator. Welcome to my Space.
              </div>
              <div className="blog-follow-flex">
                <button className="blog-user-follow">Follow Me+</button>
              </div>
            </div>
            <div className="blog-tags">
              By tags
              <FontAwesomeIcon icon={faTag} style={{ fontSize: "25px" }} />
              <div className="blog-tags-list">
                {/* <div className="tags">Humor</div>
                <div className="tags">Recipe</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div> */}
                <div className="tags">{data.tag}</div>
              </div>
            </div>
          </div>
          <div className="blog-recommendation"></div>
        </div>
      </div>
    </div>
  );
};

export default OpenBlog;
