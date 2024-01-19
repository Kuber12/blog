import React, { useEffect, useState, useContext } from "react";
import "./OpenBlogg.css";
import Hill from "../images/hill.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
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
import { GlobalContext } from "./GlobalContent";
const OpenBlog = () => {
  const userdata = useContext(GlobalContext);
  const { id } = useParams();
  // console.log(id);

  const token = sessionStorage.getItem("authToken");
  // console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  const [data, setData] = useState({});
  const [viewcomment, setViewComment] = useState([]);
  const [comment, setComment] = useState("");
  const [countComment, setCountComment] = useState("");
  const [viewLike, setViewLike] = useState({
    totalLikes: "",
  });
  const handleLike = (event) => {
    let LikeToSent = {
      username: userdata.username,
    };
    console.log(LikeToSent.userName);
    // alert("helo");
    axios
      .post(`http://localhost:5000/api/blog/${id}/like`, LikeToSent, config)
      .then((res) => {
        console.log(res.data.message);
        let result = "Like inserted successfully";
        if (result.indexOf(res.data.message) > -1) {
          toast.success("Liked on Blog");
        } else {
          toast.error("Removed on Blog");
        }

        setTimeout(() => {
          // window.location.reload();
        }, 3000);
      })
      .catch((ex) => console.log(ex));
  };
  const handleCommentSubmit = (event) => {
    // event.preventDefault();
    // console.log(comment);
    let commentToSent = {
      text: comment,
      userName: userdata.username,
    };

    axios
      .post(`http://localhost:5000/api/comment/${id}`, commentToSent, config)
      .then((res) => {
        // console.log("Commented ");
        toast.success("Commented on Blog");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log("Error while Commenting");
      });
  };

  //userdata.username
  // console.log(id);
  // console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        setData(res.data.message);
        // console.log(res.data.message);
      })
      .catch((ex) => console.log(ex));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/${id}/like`).then((res) => {
      // setViewLike(res)
      // console.log(res.data);
      setViewLike(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/comment/${id}`)
      .then((res) => {
        // setViewComment(res);
        // console.log(res.data.message);
        setViewComment(res.data.message);
        setCountComment(res.data.message.length);
        // console.log(res.data.message.length);
      })
      .catch((err) => {
        console.log("view error");
      });
  }, [data]);
  return (
    <div className="MainP">
      <Helmet>{/* <title>{data.headline}</title> */}</Helmet>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="blog">
        <div className="blog-content">
          {data.image && (
            <img
              className="blog-content-image"
              src={`../../uploads/${data.image}`}
              alt="blog content"
            />
          )}
          <div className="blog-content-text">
            <h1>{data.headline}</h1>
            <p>{data.content}</p>
          </div>
          <div className="blog-action-icons">
            <div className="blog-action-tooltip">
              <div className="blog-tooltip-div">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: "25px", paddingRight: "5px" }}
                />
                <span>{data.views}</span>
              </div>
            </div>
            <div className="blog-action-tooltip">
              <div onClick={handleLike} className="blog-tooltip-div">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ fontSize: "25px", paddingRight: "5px" }}
                />
                <span>{viewLike.totalLikes}</span>
              </div>
            </div>
            <div className="blog-action-tooltip">
              <div className="blog-tooltip-div">
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ fontSize: "25px", paddingRight: "5px" }}
                />
                <span>{countComment}</span>
              </div>
            </div>
            <div className="blog-action-tooltip">
              <div className="blog-tooltip-div">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  style={{ fontSize: "25px", paddingRight: "5px" }}
                />
                <span>456</span>
              </div>
            </div>
          </div>
          <div className="comment-box">
            {viewcomment.map((comment) => (
              <div className="comment">
                <div className="comment-user"></div>
                <p className="comment-text">{comment.text}</p>
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px" }} />
              </div>
            ))}

            <div className="comment-write">
              <input
                type="text"
                className="comment-input"
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="comment-send" onClick={handleCommentSubmit}>
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
                <div className="tags">Humor</div>
                <div className="tags">Recipe</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div>
                <div className="tags">Dark</div>
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
