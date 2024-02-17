/* This code is a React component called `Slider`. It is a slideshow component that displays different
images and content based on the current slide number. The component uses the `useState` and
`useContext` hooks from React to manage the state of the current slide and access data from a global
context. */
import React, { useState, useContext } from "react";
// import Post_img from "../images/ele1.png";
// import Seach_Con from "../images/elee2.png";
// import Find_ppl from "../images/ele3.png";
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
          <div className={`slider ${Slider === 1 ? "active" : ""}`}  id="content1">
            <div className="content">
              <h1 className="slider-heading hedvig">Make Your</h1>
              <h2 className="slider-heading2 hedvig">
                <span>First Post {username ? `"${username} "` : null}</span>
              </h2>
              <h4 className="slider-heading3">
              🌟 Hey there, Ever had that thought or idea swirling in your mind, itching to burst into the digital world? Well, guess what? Now's the perfect time to let it out!
              Ready to make your mark? We're excited to welcome your first post. 💫
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
            {/* <div className="Slider_img_div">
              <img className="Slider_img" src={Post_img}/>
              <img className="Slider_img" src={Flw}/>
            </div> */}
          </div>
        )}
        {Slider === 2 && (
          <div className={`slider ${Slider === 2 ? "active" : ""}` } id="content2">
            <div className="content">
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
            {/* <div className="Slider_img_div">
              <img className="Slider_img" src={Seach_Con}/>
            </div> */}
          </div>
        )}
        {Slider === 3 && (
          <div className={`slider ${Slider === 3 ? "active" : ""}`}  id="content3">
            <div className="content">
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
            {/* <div className="Slider_img_div">
              <img className="Slider_img" src={Find_ppl}/>
            </div> */}
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
