import React from 'react'
import "./BestBlog.css";
import Bg from "../images/bg.png";
import Froggy from "../images/froggy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const BestBlogSlider=()=>{
    return(
        <div className='wrapper'>
          <div className='top_'>
            <img src={Bg}/>
            <h1>Best Blogs Slider</h1>
          </div>
          <div className='blogss'>

          </div>
          <div  className='drag'>
            <button className=" move left-btn">
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </button>
            <button className="move right-btn" >
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </button>
          </div>  
          <img src={Froggy} id='frog'/>
          <div class="horizontal-line"></div>    
        </div>

    );
};
export default BestBlogSlider;