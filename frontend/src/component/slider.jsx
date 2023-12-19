import React, { useState } from "react";
import Hill from "../images/hill.jpeg";
import Mountain from "../images/mountain.png";
import Sunset from "../images/sunset.jpeg";
import "./slider_x.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [Slider, setSlider] = useState(1);

  const handleSlider = (slideNum) => {
    setSlider(slideNum);
  };
  return (
    <>
      <div className="wrapper">
        {Slider === 1 && (
          <div className="content" id="content1">
            <h1>
              Make Your
              <br />
              <span>First Post</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur fuga explicabo consequuntur id tempora molestiae
              laudantium similique consectetur sunt repellat provident
              repellendus, a quasi tenetur quae nesciunt temporibus aut placeat?
            </p>
            <Link className="btns" to="/AddBlog">
              Post Blog
            </Link>
          </div>
        )}
        {Slider === 2 && (
          <div className="content" id="content2">
            <h1>
              Search
              <br />
              <span>Contents</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur fuga explicabo consequuntur id tempora molestiae
              laudantium similique consectetur sunt repellat provident
              repellendus, a quasi tenetur quae nesciunt temporibus aut placeat?
            </p>
            <Link>Search</Link>
          </div>
        )}
        {Slider === 3 && (
          <div className="content" id="content3">
            <h1>
              Find New
              <br />
              <span>Connections</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur fuga explicabo consequuntur id tempora molestiae
              laudantium similique consectetur sunt repellat provident
              repellendus, a quasi tenetur quae nesciunt temporibus aut placeat?
            </p>
            <Link>Post Blog</Link>
          </div>
        )}
        <div className="slider">
          <img id="slide1" src={Hill} />
          <img id="slide2" src={Mountain} />
          <img id="slide3" src={Sunset} />
        </div>
        <div className="slider_nav">
          <a href="#slide1" onClick={() => handleSlider(1)}></a>
          <a href="#slide2" onClick={() => handleSlider(2)}></a>
          <a href="#slide3" onClick={() => handleSlider(3)}></a>
        </div>
      </div>
    </>
  );
};
export default Slider;
