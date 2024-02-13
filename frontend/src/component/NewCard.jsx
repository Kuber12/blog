/**
 * The NewCard component is a React component that displays a card with blog post information,
 * including an image, buttons for actions like viewing and liking, and tags for the post's category
 * and author.
 */
import "./NewCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const NewCard = ({ data }) => {
  const handleImageError = (event) => {
    // Set the source to the default image if the original image fails to load
    event.target.src = "../../uploads/default.png";
  };
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
        {data &&
          data.map((items, i) => {
            const timeDifference = new Date() - new Date(items.date_published);
            const formatTimeDifference = (milliseconds) => {
              const seconds = Math.floor(milliseconds / 1000);
              const intervals = [
                { label: 'year', divisor: 365 * 24 * 60 * 60 },
                { label: 'month', divisor: 30 * 24 * 60 * 60 },
                { label: 'day', divisor: 24 * 60 * 60 },
                { label: 'hour', divisor: 60 * 60 },
                { label: 'minute', divisor: 60 },
              ];
            
              for (const interval of intervals) {
                const value = Math.floor(seconds / interval.divisor);
                if (value >= 1) {
                  return `${value} ${interval.label}${value > 1 ? 's' : ''} ago`;
                }
              }
            
              return 'Just now';
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

                        {/* <span>{data.views}</span> */}
                      </div>
                    </div>
                    <div key={2} className="blog-action-tooltip">
                      <div className="blog-tooltip-div">
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "20px", paddingRight: "5px" }}
                        />
                        {/* <span></span> */}
                      </div>
                    </div>
                    <div key={3} className="blog-action-tooltip">
                      <div className="blog-tooltip-div">
                        <FontAwesomeIcon
                          icon={faComment}
                          style={{ fontSize: "20px", paddingRight: "5px" }}
                        />
                        {/* <span></span> */}
                      </div>
                    </div>
                  </div>
                  <span className="post-tag"> {items.tag}</span>
                </div>
                <h6 id="heading">
                  {truncateText(items.headline, 25)}
                </h6>
                <div id="tags">
                  <div>
                    <span > @{items.username}</span>
                    <span>{formatTimeDifference(timeDifference)}</span>
                  </div>
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </div>
              </div>
            </Link>
          )}
          )}
      </div>
    </div>
  );
};

export default NewCard;
