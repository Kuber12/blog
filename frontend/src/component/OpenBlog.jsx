/**
 * The OpenBlog component is a React component that displays a blog post, allows users to like and
 * comment on the post, and provides information about the blog author.
 */
import React, { useEffect, useState, useContext } from "react";
import "./OpenBlogg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
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
    event.target.src = "../../uploads/default.png";
  };
  const userData = useContext(GlobalContext);
  const { user } = userData;
  const { username } = user;
  const { id } = useParams();

  const token = sessionStorage.getItem("authToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };
  const [comment, setComment] = useState("");
  const [data, setData] = useState({});
  const [viewcomment, setViewComment] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [followed, setFollowed] = useState();

  const [countComment, setCountComment] = useState({
    countComment: 0,
  });
  const [viewLike, setViewLike] = useState({
    totalLikes: 0,
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-backend-3dcg.onrender.com/api/tag")
      .then((res) => setTags(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  // like handle
  const handleLike = (event) => {
    let LikeToSent = {
      username: username,
    };

    axios
      .post(
        `https://blog-backend-3dcg.onrender.com/api/blog/${id}/like`,
        LikeToSent,
        config
      )
      .then((res) => {
        // console.log(res.data?.message);
        let result = "Like inserted successfully";

        setViewLike((prevViewLike) => {
          if (result.indexOf(res.data?.message) > -1) {
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
      .post(
        `https://blog-backend-3dcg.onrender.com/api/user/${data?.username}/follow/${username}`
      )
      .then((response) => {
        let result = response.data?.message;

        // console.log(result);
        setFollowers((prev) => {
          const check = /^Followed$/;
          const checking = (result) => {
            return check.test(result);
          };

          if (checking(result)) {
            toast.success(`Followed`);
            return prev + 1;
          } else {
            toast.error(`Unfollowed`);
            return prev - 1;
          }
        });
        setFollowed((prev) => {
          // Not Following // following check
          const checkFollowing = /^Following$/;
          const switching = (result) => {
            return checkFollowing.test(result);
          };
          if (switching(prev)) {
            return "Not Following";
          } else {
            return "Following";
          }
        });
      })
      .catch((err) => {
        toast.error(`Something went wrong`);
      });
  };
  //comment handle
  const handleCommentSubmit = (event) => {
    // event.preventDefault();
    // console.log(comment);
    let commentToSent = {
      text: comment,
      username: username,
    };

    //commenting
    axios
      .post(
        `https://blog-backend-3dcg.onrender.com/api/comment/${id}`,
        commentToSent,
        config
      )
      .then((res) => {
        // console.log("Commented ");
        toast.success("Commented on Blog");
        setViewComment((prev) => [...prev, commentToSent]);
        // console.log(viewcomment);
        setCountComment((prev) => ({
          ...prev,
          countComment: prev.countComment + 1,
        }));
        setComment("");
      })
      .catch((err) => {
        toast.error("Error while Commenting");
      });
  };
  // Single blog fetching
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${id}`)
      .then((res) => {
        setData(res.data?.message);

        //fetched followers
        return axios.get(
          `https://blog-backend-3dcg.onrender.com/api/user/${res.data?.message?.username}/follow`
        );

        // console.log(res.data.message);
      })
      .then((res) => {
        setFollowers(res.data?.totalFollowers);

        // console.log(res.data?.totalFollowers);
      })
      .catch((ex) => toast.error(ex));
  }, []);

  //fetching likes count
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/blog/${id}/like`)
      .then((res) => {
        setViewLike((prevViewLike) => ({
          ...prevViewLike,
          totalLikes: res.data?.totalLikes, // Assuming totalLikes is the key in res.data
        }));
      });
  }, []);
  //fetching comments counts
  useEffect(() => {
    axios
      .get(`https://blog-backend-3dcg.onrender.com/api/comment/${id}`)
      .then((res) => {
        setViewComment(res.data?.message);
        setCountComment({ countComment: res.data?.message.length });
        // console.log(res.data?.message.length);
      })
      .catch((err) => {
        toast.error("view error");
      });
  }, []);

  //followed or not following
  useEffect(() => {
    axios
      .get(
        `https://blog-backend-3dcg.onrender.com/api/user/${data?.username}/follow/${username}`
      )
      .then((res) => {
        // console.log(res.data?.message);
        setFollowed(res.data?.message);
      })
      .catch((ex) => {
        console.log("error on followed or not " + ex);
      });
  }, []);
  return (
    <>
      <NewNavi />
      <div className="MainP">
        <Helmet>{/* <title>{data?.headline}</title> */}</Helmet>

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
            {data?.image && (
              <img
                className="blog-content-image"
                src={`${data?.image}`}
                alt="blog content"
                onError={handleImageError}
              />
            )}
            <div className="blog-content-text">
              <div style={{display: "flex"}} >
                <h4 className="heading" style={{flex: 1}}>{data?.headline}</h4>
                <span className="tags">{data?.tag}</span>
              </div>
              <p>{data?.content}</p>
            </div>
            <div className="blog-action-icons">
              <div key={1} className="blog-action-tooltip">
                <div key={1} className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                  <span>{data?.views}</span>
                </div>
              </div>
              <div key={2} className="blog-action-tooltip">
                {username ? (
                  <div
                    key={2}
                    onClick={handleLike}
                    className="blog-tooltip-div"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "20px", paddingRight: "5px" }}
                    />
                    <span>{viewLike.totalLikes}</span>
                  </div>
                ) : (
                  <div key={22} className="blog-tooltip-div">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "20px", paddingRight: "5px" }}
                    />
                    <span>{viewLike.totalLikes}</span>
                  </div>
                )}
              </div>
              <div key={3} className="blog-action-tooltip">
                <div key={3} className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                  <span>{countComment.countComment}</span>
                </div>
              </div>
            </div>
            <div className="comment-box">
              {viewcomment.map((comment) => (
                <div className="comment" key={comment.id}>
                  <div className="comment-user">
                    {" "}
                    <Link to={`/UserInfo/${comment?.username}`}>
                      {comment?.username}
                    </Link>
                  </div>
                  <p className="comment-text">{comment?.text}</p>
                  {/* <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "25px" }}
                  /> */}
                </div>
              ))}
              <div className="comment-write">
                {username && (
                  <>
                    <input
                      type="text"
                      className="comment-input"
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />
                    <button
                      className="comment-send"
                      onClick={handleCommentSubmit}
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ fontSize: "25px" }}
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="blog-sidebar">
            <div className="blog-user">
              <div className="blog-user-details">
                <div className="blog-user-head">
                  <div className="blog-user-pic"></div>
                  <div>
                    <div>
                      <Link to={`/UserInfo/${data?.username}`}>
                        {data?.username}
                      </Link>
                    </div>
                    <div>{followers} Followers</div>
                  </div>
                </div>
                <div className="blog-user-bio">
                  THIS IS MY BIO. I am a content creator. Welcome to my Space.
                </div>
                {username !== data?.username && (
                  <div className="blog-follow-flex">
                    <Link
                      className="blog-user-follow"
                      to={`/UserInfo/${data?.username}`}
                    >
                      View Profile
                    </Link>
                  </div>
                )}
              </div>
              <div className="blog-tags">
                <span style={{ fontWeight: "600", paddingRight: "10px" }}>
                  By tags
                </span>
                <FontAwesomeIcon icon={faTag} style={{ fontSize: "25px" }} />
                <div className="tags-container">
                  {Array.isArray(tags) &&
                  tags.length > 0 &&
                  tags.map((tag, index) => (
                    <Link
                      className="tags"
                      key={index}
                      to={`/BlogPageTag/${tag.tagname}`}
                    >
                      {tag.tagname}
                    </Link>
                  ))}
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
