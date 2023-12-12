import React from 'react'
import Hill from '../images/hill.jpeg'
import Mountain from '../images/mountain.png'
import Sunset from '../images/sunset.jpeg'
import './slider_x.css'

const Slider = ()=>{
  return(
    <>
    <div className='container'>
      <div className='wrapper'>
        <div className='slider'>
          <img id="slide1" src={Hill}/>
          <img id="slide2" src={Mountain}/>
          <img id="slide3" src={Sunset}/>
        </div>
        <div className='slider_nav'>
          <a href="#slide1"></a>
          <a href="#slide2"></a>
          <a href="#slide3"></a>
        </div>
      </div>
    </div>
    </>

  );
  };
export default Slider;