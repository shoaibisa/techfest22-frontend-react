import React from 'react';
import Slider from 'react-slick';
import Robozarimg from '../../images/Domain/Robozar.webp'
import Electricaimg from '../../images/Domain/Electrica.webp'
import Genesisimg from '../../images/Domain/Genesis.webp'
import Kermisimg from '../../images/Domain/Kermis.webp'
import Plexusimg from '../../images/Domain/Plexus.webp'
import Mechanicaimg from '../../images/Domain/Mechanica.webp'
import Chemforimg from '../../images/Domain/Chemfor.webp'
import Karyarachnaimg from '../../images/Domain/Karyarachna.webp'
import { NavLink } from 'react-router-dom';

import './Domain.css';
const Domain = (props) => {

  var settings = {
    infinite: true,
    speed: 600,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    Responsive:{
      
    }

  };

  return (
    <div className='Mainomainbody'>

      <div className="Mainomainbody__slider container">
        <Slider  {...settings} >
          <div

            style={{
              width: "100%"
            }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div
            style={{
              width: "100%"
            }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
            width: "100%"
          }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
            width: "100%"
          }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
            width: "100%"
          }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
        </Slider>
      </div>


      <div className=" domain__card  container  ">
       <div className="Domain__card__row1 d-flex">
       <div class="card card__Style">
          <img src={Robozarimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Robozar</h5>
            <p class="card-text">Ignite your passion in automation for agriculture.</p>
            <NavLink to="/robozar" className="Domain__button"><a href="#" class=" Domain__button">Read more</a></NavLink>
          </div>
        </div>
        <div class="card card__Style">
          <img src={Electricaimg}class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Electrica</h5>
            <p class="card-text">The arena of all electrical/electronic/instrumentation engineers. Put the theory you learned into practical applications.</p>
            <NavLink to = "/electrica" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
        <div class="card card__Style">
          <img src={Kermisimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Kermis</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to = "/kermis" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
       </div>
       <div className="Domain__card__row2 d-flex">
       <div class="card card__Style">
          <img src={Plexusimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Plexus</h5>
            <p class="card-text">This domain is designed for all the computerfiles who are trying a hand in any of these like ML, Competitive programming, web development, and even for all the young minds with only knowledge of the fundamentals of the computer.
</p>
            <NavLink to = "/plexus" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
        <div class="card card__Style">
          <img src= {Mechanicaimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Mechanica</h5>
            <p class="card-text">This domain welcomes all mechanical engineers to challenge their skills in CAD/CAM designing, details about fabrication, knowledge about trusses and fluid mechanics.
</p>
            <NavLink to = "/mechanica" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
        <div class="card card__Style">
          <img src={Chemforimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Chemfor</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to = "/chemfor" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       </div>
       <div className=" Domain__card__row3 d-flex ">
       <div class="card card__Style">
          <img src={Karyarachnaimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Karyarachna</h5>
            <p class="card-text">This amazing exhibit is an opportunity to showcase everything from models of aircraft and vehicles to exquisite art. This is the best platform to forge your creativity in the cut-throat competition…or simply kick-back and enjoy the extravaganza.</p>
            <NavLink to = "/karyarachna" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       <div class="card card__Style">
          <img src={Genesisimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Genesis</h5>
            <p class="card-text">Begin your journey of a thousand miles by taking one step to represent yourself and your idea.</p>
            <NavLink to = "/genesis" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       </div>

      </div>

    </div>
  );
};

export default Domain;