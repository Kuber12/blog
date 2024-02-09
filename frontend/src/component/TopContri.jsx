import React, { useContext } from "react";
import "./TopContrii.css";
import Crown from "../images/crown.png";
import Stroke from "../images/stroke.png";
import Doodle from "../images/doodle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./GlobalContent";
const TopContributor = () => {
  const data = useContext(GlobalContext);
  const username = data.user.username;
  return (
    <div className="bodyy">
      <div className="Top_Con">
        <h1 className="hedvig">Top Contributor of the Month</h1>
        <img src={Crown} className="crw" />
      </div>
      <div className="mainC">
        <div className="left_box">
          <div className="MainBox">
            <div className="Pp"></div>
            <div className="uDetail">
              <p>Anna Williams</p>
              <p>@anna_Whooliams</p>
              <p id="Des">
                Top Contributer of the month. Start posting your blog now and
                contribute to the society.
              </p>
            </div>
            <button className="Fw">Follow +</button>
          </div>
        </div>
        <div className="right_Box">
          <div className="startnow">
            <div className="texts">
              <h2 className="H">Start Now</h2>
              <h2 className="NoN">
                <h3>Or Never</h3>
              </h2>
              <p className="Para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iste consequatur tempora, accusamus laudantium atque a
                fugit sunt fuga aliquid possimus veritatis modi nemo! Recusandae
                nulla nostrum veniam suscipit ipsam.
              </p>
            </div>
            <img src={Stroke} id="strokes" />
          </div>
          <div className="btm_box">
            {username ? (
              <Link to="/AddBlog">
                <button id="contri_btn">
                  Create Your First Blog <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            ) : (
              <Link to="/Login">
                <button id="contri_btn">
                  Create Your First Blog <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            )}
            <img src={Doodle} alt="Doodle Image" id="doodle" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopContributor;
