/* The code is a React component called "TopContributor". It imports various dependencies and images,
and then renders a JSX structure. The component displays a section for the top contributor of the
month, along with their details and a follow button. It also includes a section for starting a blog,
with some text and an image. Finally, it includes a button to create a blog, which is conditionally
rendered based on whether the user is logged in or not. */
import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { useSpring, animated } from "react-spring";

const TopContributor = () => {
  const [user, setUser] = useState({
    username: "",
    blogCount: 0,
  });
  const BlogCounter = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 2000,
      config: { mass: 1, tension: 20, friction: 100 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };
  // blogCounter();

  const data = useContext(GlobalContext);
  const fetchTopContributors = async () => {
    const response = await axios.get(
      "https://blog-backend-3dcg.onrender.com/api/blog/topcontributor"
    );
    console.log(response.data);
    setUser(response.data);
  };
  useEffect(() => {
    fetchTopContributors();
  }, []);
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
            <div className="Pp">
              <h1 className="h">
                {" "}
                <BlogCounter n={user.blogCount} />
              </h1>
              <h2 className="h">Blogs</h2>
            </div>
            <div className="uDetail">
              <p>{user?.username ? user.username : "Be our top contributer"}</p>
              <p>
                @{user?.username ? user.username : "Be our top contributer"}
              </p>
              <p id="Des">
                Top Contributer of the month. Start posting your blog now and
                contribute to the society.
              </p>
            </div>
            <button className="blog-user-follow">
              <Link to={`/UserInfo/${user?.username}`}>View Profile</Link>
            </button>
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
