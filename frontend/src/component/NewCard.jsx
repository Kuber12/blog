import React from "react";
import "./NewCard.css";
const NewCard = () => {
  return (
    <>
      <div id="card-container">
        <div id="img-container">
          <img
            src="https://i.pinimg.com/564x/ea/36/dd/ea36dd5e557022c968d309df587f96f4.jpg"
            alt=""
          />
        </div>
        <div id="heading">
          <h1>Introduction to javascript and its ises in web develptopmnt</h1>
        </div>
        <div id="tags">
          <div>
            <h5>@An Apple</h5>
            <h6>1hr ago</h6>
          </div>
          <button>::</button>
        </div>
        <div id="buttons-container">
          <div></div>
          <div id="buttons">
            <img src="" alt="comment" />
            <img src="" alt="likes" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
