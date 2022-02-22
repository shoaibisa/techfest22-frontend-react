import React from 'react';
// import './Sliderslick.css';

const SliderImage = props => {
  return (
    <div className="Slider__image">
      <img src={props.src} alt="" />
    </div>
  );
};

export default SliderImage;
