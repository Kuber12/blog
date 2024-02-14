import React from "react";
import "./NewCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const NewCard = ({ data }) => {
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
              <Link className="link-to" key={i} to={`../OpenBlog/${items._id}`}>
                <div id="card-container" key={i}>
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
                  <h6 id="heading">{truncateText(items.headline, 25)}</h6>
                  <div id="tags">
                    <div>
                      <span> @{items.username}</span>
                      <span>{formatTimeDifference(timeDifference)}</span>
                    </div>
                    {/* <button>
                      <BsThreeDotsVertical />
                    </button> */}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default NewCard;
