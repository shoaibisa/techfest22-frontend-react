import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Sliderslick.css';

import SliderImage from './SliderImage';
import { baseUrl, localUrl } from '../../API/api';
const Sliderslick = props => {
  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 426, // tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let SliderImageList;
  // http://localhost:4000/profile
  if (props.isBack) {
    SliderImageList = props.data.map(s => (
      <SliderImage src={`${baseUrl}/profile/${s.imageSrc}`} key={s._id} />
    ));
  } else {
    SliderImageList = props.data.map(s => (
      <SliderImage src={s.imageSrc} key={s.title} />
    ));
  }

  // console.log(SliderImageList);

  return (
    <div className="Slider_container">
      <Slider {...settings}>{SliderImageList}</Slider>
    </div>
  );
};

export default Sliderslick;
