import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const CardsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        setData(res.data.message);
        console.log(res.data.message);
      })
      .catch((ex) => console.log(ex));
  }, []);
  return (
    <div>
      {
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.image}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{data.headline}</h5>
            <p className="card-text">Content:{data.content}</p>
            <p className="card-text">Likes:{data.likes}</p>
            <p className="card-text">Date : {data.date_published}</p>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default CardsDetails;
