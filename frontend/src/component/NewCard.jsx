import React, { useState, useEffect } from "react";
import "./NewCard.css";
import { FaEye } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

const NewCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6);
  const imagePath = "../../uploads/";
  //truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ".....";
    }
    return text;
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog", { timeout: 5000 }) // 5000 milliseconds (adjust as needed)
      .then((res) => {
        // console.log(res.data.message);
        setData(res.data.message);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled");
        } else {
          console.log("ERROR IS " + err);
        }
      });
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div
          style={{
            padding: "10px",
            //   display: "grid",
            //   gap: "50px 100px",
            //   gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "50px 150px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {data.slice(0, limit).map((items) => (
            <div id="card-container">
              <div id="img-container">
                <img src={`${imagePath}${items.image}`} alt="" />
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
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 30,
        }}
      >
        {limit <= 6 ? (
          <button
            disabled
            style={{ cursor: "not-allowed" }}
            className=" transition-all bg-red-500 text-white px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px]"
          >
            See Less
          </button>
        ) : (
          <button
            className=" cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
       border-blue-600
       border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
       active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            onClick={() => setLimit(limit - 3)}
          >
            See Less
          </button>
        )}
        {limit > data.length ? (
          <button
            disabled
            style={{ cursor: "not-allowed" }}
            className="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px]"
          >
            Load More
          </button>
        ) : (
          <button
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            onClick={() => setLimit(limit + 3)}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default NewCard;
