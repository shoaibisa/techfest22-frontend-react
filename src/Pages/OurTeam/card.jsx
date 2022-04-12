import React from 'react';
import './OurTeam.css';
const Card = props => {
  return (
    <div class="Teamcard">
      <div class="imgBx">
        <img src={props.team.imgSrc} alt="images" />
      </div>
      <div class="details">
        <h2>
          {props.team.name}
          <br />
          <span>{props.team.role}
</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
