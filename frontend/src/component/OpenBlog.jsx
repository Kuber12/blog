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
import NewNavi from "./NewwNav";
const OpenBlog = () => {
  const handleImageError = (event) => {
    // Set the source to the default image if the original image fails to load
    event.target.src = '../../uploads/default.png';
  };
  const userData = useContext(GlobalContext);
  const { user } = userData;
  const { username } = user;
  const { id } = useParams();
  // console.log(id);

  const token = sessionStorage.getItem("authToken");
  // console.log(token);
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };
  const [comment, setComment] = useState("");
  const [data, setData] = useState({});
  const [viewcomment, setViewComment] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [countComment, setCountComment] = useState({
    countComment: 0,
  });
  const [viewLike, setViewLike] = useState({
    totalLikes: 0,
  });
  // console.log(viewLike.totalLikes);
  // console.log(comment);
  const handleLike = (event) => {
    let LikeToSent = {
      username: username,
    };
    // console.log(LikeToSent.userName);
    axios
      .post(`http://localhost:5000/api/blog/${id}/like`, LikeToSent, config)
      .then((res) => {
        // console.log(res.data.message);
        let result = "Like inserted successfully";

        setViewLike((prevViewLike) => {
          if (result.indexOf(res.data.message) > -1) {
            toast.success("Liked on Blog");
            return {
              ...prevViewLike,
              totalLikes: prevViewLike.totalLikes + 1,
            };
          } else {
            toast.error("Removed on Blog");
            return {
              ...prevViewLike,
              totalLikes: prevViewLike.totalLikes - 1,
            };
          }
        });

        setTimeout(() => {
          // window.location.reload();
        }, 3000);
      })
      .catch((ex) => {
        // console.log(ex);
        toast.error(`Something went wrong`);
      });
  };
  //follow handle
  const handleFollows = () => {
    axios
    .post(`http://localhost:5000/api/user/${username}/follow/${data.username}`)
    .then((response)=>{
      toast.success(`${response.data.message}`);
    })
    .catch((err) => {
      toast.error(`Something went wrong`)});
  };
  //comment submit
  const handleCommentSubmit = (event) => {
    // event.preventDefault();
    // console.log(comment);
    let commentToSent = {
      text: comment,
      username: username,
    };

    //commenting
    axios
      .post(`http://localhost:5000/api/comment/${id}`, commentToSent, config)
      .then((res) => {
        // console.log("Commented ");
        toast.success("Commented on Blog");
        setViewComment((prev) => [...prev, commentToSent]);
        console.log(viewcomment);
        setCountComment((prev) => ({
          ...prev,
          countComment: prev.countComment + 1,
        }));
        setComment("");
      })
      .catch((err) => {
        console.log("Error while Commenting");
      });
  };
  // useEffect(() => {
  // console.log(viewcomment);
  // }, [viewcomment]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        setData(res.data.message);
      })
      .catch((ex) => console.log(ex));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${data.username}/follow`)
      .then((res) => {
        setFollowers(res.data.totalFollowers);
      });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/${id}/like`).then((res) => {
      setViewLike((prevViewLike) => ({
        ...prevViewLike,
        totalLikes: res.data.totalLikes, // Assuming totalLikes is the key in res.data
      }));
    });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/comment/${id}`)
      .then((res) => {
        // setViewComment(res);
        // console.log(res.data.message);
        setViewComment(res.data.message);
        setCountComment({ countComment: res.data.message.length });
        // console.log(res.data.message.length);
      })
      .catch((err) => {
        console.log("view error");
      });
  }, [data]);
  return (
    <>
      <NewNavi />
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
                onError={handleImageError}
              />
            )}
            <div className="blog-content-text">
              <h1 class="heading">{data.headline}</h1>
              <p>{data.content}</p>
            </div>
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
                {username ? (
                  <div onClick={handleLike} className="blog-tooltip-div">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "25px", paddingRight: "5px" }}
                    />
                    <span>{viewLike.totalLikes}</span>
                  </div>
                ) : (
                  <div className="blog-tooltip-div">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "25px", paddingRight: "5px" }}
                    />
                    <span>{viewLike.totalLikes}</span>
                  </div>
                )}
              </div>
              <div key={3} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ fontSize: "25px", paddingRight: "5px" }}
                  />
                  <span>{countComment.countComment}</span>
                </div>
              </div>
              <div key={4} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    style={{ fontSize: "25px", paddingRight: "5px" }}
                  />
                </div>
              </div>
            </div>
            <div className="comment-box">
              {viewcomment.map((comment) => (
                <div className="comment">
                  <div className="comment-user">{comment.username}</div>
                  <p className="comment-text">{comment.text}</p>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "25px" }}
                  />
                </div>
              ))}

              <div className="comment-write">
                <input
                  type="text"
                  className="comment-input"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
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
                    <div>{data.name}</div>
                    <div>{followers} Followers</div>
                  </div>
                </div>
                <div className="blog-user-bio">
                  THIS IS MY BIO. I am a content creator. Welcome to my Space.
                </div>  
                {username !== data.username && (<div className="blog-follow-flex">
                  {username ? 
                  <button className="blog-user-follow" onClick={handleFollows}>
                    Follow Me+
                  </button> :
                  <button className="blog-user-follow">
                  Follow Me+
                  </button>
                }
                </div>)}
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
    </>
  );
};

export default OpenBlog;
