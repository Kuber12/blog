import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const CardsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((ex) => console.log(ex));
  });
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
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      }
    </div>
  );
};

export default CardsDetails;
