/**
 * The `BestBlogSlider` component is a React component that renders a slider of best blogs with
 * navigation buttons.
 * @returns The component `BestBlogSlider` is being returned.
 */
import React, { useEffect, useState } from "react";
import "./BestBlog.css";
import Bg from "../images/bg.png";
import Froggy from "../images/froggy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import Hills from "../images/hill.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// npm install react-slick slick-carousel
import NewCard from "./NewCard";
const BestBlogSlider = () => {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog/search?sortby=views&limit=10")
      .then((res) => {
        setSlide(res?.data.message);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div style={{ fontSize: "24px", color: "#000" }}>Next</div>, // Customize the next arrow
    prevArrow: <div style={{ fontSize: "24px", color: "#000" }}>Prev</div>,
  };

  if (window.innerWidth >= 1024) {
    sliderSettings.slidesToShow = 3;
  } else if (window.innerWidth >= 768) {
    sliderSettings.slidesToShow = 2;
  } else if (window.innerWidth >= 480) {
    sliderSettings.slidesToShow = 1;
  } else {
    sliderSettings.slidesToShow = 1;
  }

  const handleImageError = (event) => {
    event.target.src = "../../uploads/default.png";
  };
  return (
    <div className="wrapper">
      <div className="top_">
        <img className="best-blog-icon" src={Bg} />
        <h1 className="hedvig">Best Blogs</h1>
      </div>
      <div className="BestCards_div">
        <Slider {...sliderSettings}>
          {slide &&
            slide.map((item, index) => (
              <div className="BestCards_cont" key={index}>
                <Link
                  className="link-to"
                  key={index}
                  to={`../OpenBlog/${item._id}`}
                >
                  <h1>#{`${index + 1}`}</h1>
                  <div className="BestCards_img">
                    <img
                      src={item.image}
                      // src={`${data?.image}`}
                      onError={handleImageError}
                      alt="userprofile"
                    />
                  </div>
                  <div className="BestCards_icon">
                    <div key={1} className="blog-action-tooltip">
                      <div className="blog-tooltip-div">
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ fontSize: "20px", marginLeft: "50px" }}
                        />
                      </div>
                    </div>
                    <div key={2} className="blog-action-tooltip">
                      <div className="blog-tooltip-div">
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "20px", paddingRight: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="BestCards_title">
                    <h3>{item.headline}</h3>
                  </div>
                  <div className="BestCards_User">
                    <h5>{item.username}</h5>
                  </div>
                </Link>
              </div>
            ))}

          {/* <div className="BestCards_cont">
            <h1>#2</h1>
            <div className="BestCards_img">
              <img src={Hills} />
            </div>
            <div className="BestCards_icon">
              <div key={1} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                </div>
              </div>
              <div key={2} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                </div>
              </div>
            </div>
            <div className="BestCards_title">
              <h3>This is the title.</h3>
            </div>
            <div className="BestCards_User">
              <h5>@Username</h5>
            </div>
          </div>

          <div className="BestCards_cont">
            <h1>#3</h1>
            <div className="BestCards_img">
              <img src={Hills} />
            </div>
            <div className="BestCards_icon">
              <div key={1} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                </div>
              </div>
              <div key={2} className="blog-action-tooltip">
                <div className="blog-tooltip-div">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ fontSize: "20px", paddingRight: "5px" }}
                  />
                </div>
              </div>
            </div>
            <div className="BestCards_title">
              <h3>This is the title.</h3>
            </div>
            <div className="BestCards_User">
              <h5>@Username</h5>
            </div>
          </div> */}
        </Slider>
      </div>
      {/* <div className='drag'>
            <button className=" move left-btn">
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </button>
            <button className="move right-btn" >
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </button>
          </div>   */}
      <img src={Froggy} id="frog" />
      <div class="horizontal-line"></div>
    </div>
  );
};
export default BestBlogSlider;
