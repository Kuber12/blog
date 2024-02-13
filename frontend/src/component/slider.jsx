/* This code is a React component called `Slider`. It is a slideshow component that displays different
images and content based on the current slide number. The component uses the `useState` and
`useContext` hooks from React to manage the state of the current slide and access data from a global
context. */
import React, { useState, useContext } from "react";
import Hill from "../images/hill.jpeg";
import Mountain from "../images/mountain.png";
import Sunset from "../images/sunset.jpeg";
import "./slider_x.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faMagnifyingGlass,
  faUserPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./GlobalContent";
const Slider = () => {
  const [Slider, setSlider] = useState(1);
  const data = useContext(GlobalContext);
  const username = data.user.username;

  const handleSlider = (slideNum) => {
    setSlider(slideNum);
  };
  const handleNextSlide = () => {
    const nextSlide = Slider === 3 ? 1 : Slider + 1;
    setSlider(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = Slider === 1 ? 3 : Slider - 1;
    setSlider(prevSlide);
  };
  return (
    <>
      <div className="wrapper">
        {Slider === 1 && (
          <div className={`slider ${Slider === 1 ? "active" : ""}`}>
            <img id="slide1" src={Hill} />
            <div className="content" id="content1">
              <h1 className="slider-heading hedvig">Make Your</h1>
              <h2 className="slider-heading2 hedvig">
                <span>First Post {username ? `"${username} "` : null}</span>
              </h2>
              <h4 className="slider-heading3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur fuga explicabo consequuntur id tempora molestiae
                laudantium similique consectetur sunt repellat provident
                repellendus, a quasi tenetur quae nesciunt temporibus aut
                placeat?
              </h4>
              {username ? (
                <Link className="btns" to="/AddBlog">
                  Post Blog <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              ) : (
                <Link className="btns" to="/Login">
                  Post Blog <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              )}
            </div>
          </div>
        )}
        {Slider === 2 && (
          <div className={`slider ${Slider === 2 ? "active" : ""}`}>
            <img id="slide2" src={Mountain} />
            <div className="content" id="content2">
            <h1 className="slider-heading">Search</h1>
            <h2 className="slider-heading2">
              <span>Contents </span>
            </h2>
            <h4 className="slider-heading3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur fuga explicabo consequuntur id tempora molestiae
              laudantium similique consectetur sunt repellat provident
              repellendus, a quasi tenetur quae nesciunt temporibus aut
              placeat?
            </h4>
              <Link className="btns">
                Search <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
          </div>
        )}
        {Slider === 3 && (
          <div className={`slider ${Slider === 3 ? "active" : ""}`}>
            <img id="slide3" src={Sunset} />
            <div className="content" id="content3">
              <h1 className="slider-heading">Find new</h1>
              <h2 className="slider-heading2">
                <span>Connections</span>
              </h2>
              <h4 className="slider-heading3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur fuga explicabo consequuntur id tempora molestiae
                laudantium similique consectetur sunt repellat provident
                repellendus, a quasi tenetur quae nesciunt temporibus aut
                placeat?
              </h4>
              <Link className="btns">
                Find People <FontAwesomeIcon icon={faUserPlus} />
              </Link>
            </div>
          </div>
        )}
        <button className="chevron-btn leftx" onClick={handlePrevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="chevron-btn rightx" onClick={handleNextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};
export default Slider;
