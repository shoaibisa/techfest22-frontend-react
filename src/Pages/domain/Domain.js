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
       <div class="card card__Style">
          <img src={Robozarimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Robozar</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/robozar" className="Domain__button"><a href="#" class=" Domain__button">Read more</a></NavLink>
          </div>
        </div>
        <div class="card card__Style">
          <img src={Electricaimg}class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Electrica</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to = "/plexus" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>
          </div>
        </div>
        <div class="card card__Style">
          <img src= {Mechanicaimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Mechanica</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to = "/karyarachna" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       <div class="card card__Style">
          <img src={Genesisimg} class="card-img-top"  />
          <div class="card-body Domain__card__body">
            <h5 class="card-title">Genesis</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to = "/genesis" className="Domain__button"><a href="#" class="Domain__button ">Read more</a></NavLink>          </div>
        </div>
       </div>

      </div>

    </div>
  );
};

export default Domain;
