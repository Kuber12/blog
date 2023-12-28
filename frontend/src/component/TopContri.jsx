import React from "react";
import "./TopContrii.css";
import Crown from "../images/crown.png";
import Stroke from "../images/stroke.png";
import Doodle from "../images/doodle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TopContributor = () => {
  return (
    <div className="bodyy">
      <div className="Top_Con">
        <h1>Top Contributor of the Month</h1>
        <img src={Crown} />
      </div>
      <div className="MainBox">
        <div className="Sub">
          <div className="content"></div>
        </div>
        <div className="Sub">
          <div className="content"></div>
        </div>
        <div className="Sub">
          <div className="content"></div>
        </div>
        <div className="Sub">
          <div className="content"></div>
        </div>
      </div>
      <div className="mainC">
        <div className="startnow">
          <div className="texts">
            <h1>
              Start Now
              <br />
              <span>Or Never</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              iste consequatur tempora, accusamus laudantium atque a fugit sunt
              fuga aliquid possimus veritatis modi nemo! Recusandae nulla
              nostrum veniam suscipit ipsam.
            </p>
          </div>
          <img src={Stroke} id="strokes" />
        </div>
        <div class="container">

          <img src={Doodle} alt="Doodle Image" id="doodle" />
          <Link to="/AddBlog">
            <button id="contri_btn">Create Your First Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopContributor;
