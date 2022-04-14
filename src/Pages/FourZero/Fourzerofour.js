import React from 'react';
import { NavLink } from 'react-router-dom';
import EmailtemplateTopShadow from '../../images/bgoverlay-left.png';
// import backimageFourzeroFour from "./images/background-main.png"
import './Fourzerofour.css';
function Fourzerofour() {
  return (
    <div className="four__zero__page">
      {/* <img  className='four__zero__page__backimg' src={backimageFourzeroFour} alt="" /> */}
      <div div className="EmailTemplate__topShadow">
        <img src={EmailtemplateTopShadow} alt="" />
      </div>

      <div className="four__zero__page__content">
        <h1>Error 404</h1>
        <p>Oops!Lost your way? </p>
        <h5>Sorry, we can't find the page you're looking for </h5>
        <NavLink
          className="ForZeropage__button"
          style={{ textDecoration: 'none' }}
          to={'/'}
        >
          Home
        </NavLink>

      </div>
      <div className="EmailTemplate__topShadow__bottom">
        <img src={EmailtemplateTopShadow} alt="" />
      </div>
    </div>
  );
}

export default Fourzerofour;
