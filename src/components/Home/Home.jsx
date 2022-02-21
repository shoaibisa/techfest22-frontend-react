import React from 'react';
import './Home.css';

import Sliderslick from '../Slider/Sliderslick';
import data from '../../data/data.json';
//images import
import homepage_gif from '../../images/hompage-gif-logo.webp';
// import homepage_gif_mobile_vid from '../../images/hompage-gif-mobile.webm';
import homapage_gif_vid from '../../images/gif/desk-view.gif';
import workshop_home_png from '../../images/Png-Workshops-home-Webp.webp';
import building from '../../images/BUilding.svg';
import footfall from '../../images/Footfall.svg';
import dollar_svg from '../../images/Dollar-Svg.svg';
import domain_png from '../../images/Domains Webp Home.webp';

const Home = () => {
  const gotoServices = () =>
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
      // You can also assign value "auto"
      // to the behavior parameter.
    });

  return (
    <div className="home">
      <div className="home__video py-5">
        <img
          className="homepage_gif"
          alt=""
          style={{ width: '100%', overflow: 'hidden' }}
          src={homapage_gif_vid}
        />

        {/* 
            <video className="homepage_gif_mobile" onclick="myFunction()" width="100%" height="100%" loop="loop" autoplay muted="true" preload="auto">
                <source src={homepage_gif_mobile_vid} type="video/webm"/>
                Your browser does not support the video tag.
            </video> */}
        <img
          className="homepage_gif_mobile"
          alt=""
          style={{ width: '100%', overflow: 'hidden' }}
          src={homapage_gif_vid}
        />
        <div className="scroll d-flex">
          <div className="scroll__text" onClick={gotoServices}>
            <h6>Scroll Down</h6>
          </div>
          <div className="scroll__goto" onClick={gotoServices}>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="Home__background">
        <div className="container-fluid top-0 logo_section text-light py-5">
          <div className="logo_section_content">
            <div className="text-center rounded py-5 logo_section__image">
              <img src={homepage_gif} className="rounded Logo_image" alt="" />
            </div>

            <div className="text-center py-2  logo_section__about">
              <div className=" text-center logo_section_about__heading">
                <h2 className="">The Ultimate Leap to Agri-Tech</h2>
              </div>
              <div className="text-center logo_section_about__paragraph">
                <div className="">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className=" text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio architecto et dolorem sapiente as pernatur dolore
                        autem culpa deleniti praesentium deserunt expedita eos
                        reprehenderit dignissimos voluptatibus, omnis fuga non
                        facilis possimus.
                      </p>
                    </blockquote>
                  </figure>
                </div>

                <div className=""></div>
              </div>
            </div>
            <div className="text-center logo_section__button_section">
              <button
                type="button"
                className="btn btn-green mx-2 pr-5 pl-5 btn-lg logo_section_button_section__Sign_Up"
              >
                Sign Up Now
              </button>
              <button
                type="button"
                className="btn text-light btn-none pr-5 pl-5 mx-2 btn-lg  logo_section_button_section__About_Us"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Scroll Down Button Start--> */}
      <div className="bottomSection">
        <div className="cards-container">
          <div className="cards-container_card1">
            <div className="cards-container_card1_image ">
              <img
                className="workShop_Animation "
                src={workshop_home_png}
                alt=""
              />
            </div>
            <div className="cards-container_card1_description-container">
              <div className="cards-container_card1_description-container_title">
                Workshop
              </div>
              <div className="cards-container_card1_description-container_content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
              <div className="cards-container_card1_description-container_btn">
                <a href="/#">Learn More</a>
              </div>
            </div>
          </div>
          <div className="cards-container_card2">
            <div className="cards-container_card2_image">
              <img className="workShop_Animation" src={domain_png} alt="" />
            </div>
            <div className="cards-container_card2_description-container">
              <div className="cards-container_card1_description-container_title">
                Domain
              </div>
              <div className="cards-container_card2_description-container_content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
              <div className="cards-container_card2_description-container_btn">
                <a href="/#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <Sliderslick data={data.sponser} />
        {/* <Sponsor/> */}
        <div className="container__college__people__money1 py-5  cards-container ">
          <div className="college__people__money">
            <div className="row text-light text-center">
              <div className="col p-5">
                <div className="college p-3 ">
                  <div className="icon1">
                    <img src={building} alt="" />
                  </div>
                  <div className="number">
                    <b>30+</b>
                  </div>
                  <div className="text">
                    <b>Institute Participate Every Year</b>
                  </div>
                </div>
              </div>

              <div className="col p-5">
                <div className="people p-3">
                  <div className="icon2">
                    <img src={footfall} alt="" />
                  </div>
                  <div className="number">
                    <b>10K+</b>
                  </div>
                  <div className="text">
                    <b>
                      Footfall during <br /> techFEST'21
                    </b>
                  </div>
                </div>
              </div>

              <div className="col p-5">
                <div className="money p-3">
                  <div className="icon3">
                    <img src={dollar_svg} alt="" />
                  </div>
                  <div className="number">
                    <b>5L+</b>
                  </div>
                  <div className="text">
                    <b>Worth Of Goodies And Prize Money</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
