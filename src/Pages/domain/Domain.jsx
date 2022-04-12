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
import fram1  from "../../images/Domain/Frame 2.webp"
import fram2  from "../../images/Domain/Frame 3.webp"
import fram3  from "../../images/Domain/Frame 4.webp"

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
            <img src={fram1} alt="" />
          </div>
          <div
            style={{
              width: "100%"
            }}>
            <img src={fram2} alt="" />
          </div>
          <div style={{
            width: "100%"
          }}>
            <img src={fram3} alt="" />
          </div>
         
         
          
        </Slider>
      </div>


      <div className=" domain__card  container  ">
       <div className="Domain__card__row1 d-flex">
       <div className="card card__Style">
          <img src={Robozarimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Robozar</h2>
            <p className="card-text">Ignite your passion in automation for agriculture.</p>
            <NavLink to="/robozar" className="Domain__button"><a href="#" className=" Domain__button">Read more</a></NavLink>
          </div>
        </div>
        <div className="card card__Style">
          <img src={Electricaimg}className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Electrica</h2>
            <p className="card-text">The arena of all electrical/electronic/instrumentation engineers. Put the theory you learned into practical applications.</p>
            <NavLink to = "/electrica" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
        <div className="card card__Style">
          <img src={Kermisimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Kermis</h2>
            <p className="card-text">The mega domain of Kermis focuses on non-tech events including gaming events.
             Aiming to promote the era of e-sports among the building students. Events like BGMI, Mini Militia and CS GO.
</p>
            <NavLink to = "/kermis" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
       </div>
       <div className="Domain__card__row2 d-flex">
       <div className="card card__Style">
          <img src={Plexusimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Plexus</h2>
            <p className="card-text">This domain is designed for all the computerfiles who are trying a hand in any of these like ML, Competitive programming, web development, and even for all the young minds with only knowledge of the fundamentals of the computer.
</p>
            <NavLink to = "/plexus" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
        <div className="card card__Style">
          <img src= {Mechanicaimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Mechanica</h2>
            <p className="card-text">This domain welcomes all mechanical engineers to challenge their skills in CAD/CAM designing, details about fabrication, knowledge about trusses and fluid mechanics.
</p>
            <NavLink to = "/mechanica" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>          </div>
        </div>
        <div className="card card__Style">
          <img src={Chemforimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Chemfor</h2>
            <p className="card-text">This Domain is a platform to attempt and make the best use of your knowledge in the food and chemical industry.
             It will help India become healthy and pollution free through projects on food development and events based on environment safety. 
</p>
            <NavLink to = "/chemfor" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       </div>
       <div className=" Domain__card__row3 d-flex ">
       <div className="card card__Style">
          <img src={Karyarachnaimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Karyarachna</h2>
            <p className="card-text">This amazing exhibit is an opportunity to showcase everything from models of aircraft and vehicles to exquisite art. This is the best platform to forge your creativity in the cut-throat competition…or simply kick-back and enjoy the extravaganza.</p>
            <NavLink to = "/karyarachna" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       <div className="card card__Style">
          <img src={Genesisimg} className="card-img-top"  />
          <div className="card-body Domain__card__body">
            <h2 className="card-title">Genesis</h2>
            <p className="card-text">Begin your journey of a thousand miles by taking one step to represent yourself and your idea.</p>
            <NavLink to = "/genesis" className="Domain__button"><a href="#" className="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       </div>

      </div>

    </div>
  );
};

export default Domain;
