import React from "react";
import "./OpenBlogg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const OpenBlog = () => {
  return (
    <div className="MainP">
      <div className="Uinfo">
        <div className="UserD"></div>
        <div className="bio">
          <h2>Anna Sherif</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores veniam, maiores commodi eos unde quia ut perferendis
            omnis quae quis voluptas excepturi eligendi repudiandae aut tenetur
            voluptatum natus laboriosam.
          </p>
          <button className="follow">
            Follow <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="BlogSection">
        <div className="Title">
          <h4>This is the Title of the Blog</h4>
        </div>
        <div className="Tags">
          <div className="T1"></div>
          <div className="T2"></div>
          <div className="T3"></div>
        </div>
        <div className="MainContent"></div>
      </div>
      <div className="Interact">
        <button className="like">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button className="comment">
          <FontAwesomeIcon icon={faComment} />
        </button>
        <button className="share">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    </div>
  );
};

export default OpenBlog;
