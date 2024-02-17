import React, { useContext } from "react";
import "./NewCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./GlobalContent";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
const NewCard = ({ data, editStatus, setHitApi }) => {
  //user details from global context
  const userData = useContext(GlobalContext);
  const username = userData.user.username;
  const token = sessionStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  };

  const handleImageError = (event) => {
    event.target.src = "../../uploads/default.png";
  };

  const imagePath = "../../uploads/";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ".....";
    }
    return text;
  };
  //delete blog logic
  const handleDelete = async (id, image) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        await axios.delete(
          `https://blog-backend-3dcg.onrender.com/api/blog/${id}`,
          config
        );
        console.log("Deleted");
        if (image) {
          await axios.delete(
            `https://blog-backend-3dcg.onrender.com/api/file/${image}/delete`
          );
          console.log("Image deleted");
        }
        setHitApi((prev) => prev + 1);
        // handleApiHit(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div className="blog-display">
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((items, i) => {
            // console.log(data);
            const timeDifference = new Date() - new Date(items.date_published);
            const formatTimeDifference = (milliseconds) => {
              const seconds = Math.floor(milliseconds / 1000);
              const intervals = [
                { label: "year", divisor: 365 * 24 * 60 * 60 },
                { label: "month", divisor: 30 * 24 * 60 * 60 },
                { label: "day", divisor: 24 * 60 * 60 },
                { label: "hour", divisor: 60 * 60 },
                { label: "minute", divisor: 60 },
              ];

              for (const interval of intervals) {
                const value = Math.floor(seconds / interval.divisor);
                if (value >= 1) {
                  return `${value} ${interval.label}${
                    value > 1 ? "s" : ""
                  } ago`;
                }
              }

              return "Just now";
            };

            return (
              <div id="card-container" key={i}>
                <Link
                  className="link-to"
                  key={i}
                  to={`../OpenBlog/${items._id}`}
                >
                  <div id="img-container">
                    <img
                      src={`${imagePath}${items.image}`}
                      alt={`${items.image}`}
                      onError={handleImageError}
                    />
                  </div>
                  <div id="buttons-container">
                    <div className="blog-action-icons">
                      <div key={1} className="blog-action-tooltip">
                        <div className="blog-tooltip-div">
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{ fontSize: "20px", paddingRight: "5px" }}
                          />
                        </div>
                      </div>
                      <div key={2} className="blog-action-tooltip">
                        <div className="blog-tooltip-div">
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: "20px", paddingRight: "5px" }}
                          />
                        </div>
                      </div>
                      <div key={3} className="blog-action-tooltip">
                        <div className="blog-tooltip-div">
                          <FontAwesomeIcon
                            icon={faComment}
                            style={{ fontSize: "20px", paddingRight: "5px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="post-tag"> {items.tag}</span>
                  </div>
                </Link>
                <h6 id="heading">{truncateText(items.headline, 25)}</h6>
                <div id="tags">
                  <div>
                    <span> @{items.username}</span>
                    <span>{formatTimeDifference(timeDifference)}</span>
                  </div>

                  {/* <BsThreeDotsVertical /> */}
                  {username && editStatus && (
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        style={{ fontSize: "25px" }}
                        to={`/EditBlog/${items._id}`}
                      >
                        <FaRegEdit />
                      </Link>
                      <div
                        style={{ fontSize: "30px" }}
                        onClick={(e) =>
                          handleDelete(`${items._id}`, `${items.image}`)
                        }
                        // className="btn btn-sm btn-danger"
                      >
                        <MdOutlineDelete />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewCard;
