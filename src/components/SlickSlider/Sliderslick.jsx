import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Sliderslick.css"
function Sliderslick() {

  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
          breakpoint: 426, // tablet breakpoint
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      
  ]

  }


  return (
    <div className='Slider_container'>
      <h1>Sponsors</h1>
      <Slider {...settings}>
        <div className='Slider__image'>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
        <div className='Slider__image'>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div >
        <div className='Slider__image'>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
        <div className='Slider__image'>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
        <div className='Slider__image'>
          <img className='Slider__image' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
        <div className='Slider__image'>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Sliderslick