import React, { useEffect, useState } from 'react';
import './Home.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Sliderslick from '../Slider/Sliderslick';
import homepage__gifvideo from '../../images/Untitled.webm';
import homepage_gif from '../../images/hompage-gif-logo.webp';
import homepage_gif_mobile from '../../images/Untitled (1).webm';
import merchendese from '../../images/merchandise/merchednndise.jpg';
import workshop_home_png from '../../images/Png-Workshops-home-Webp.webp';
import building from '../../images/BUilding.svg';
import footfall from '../../images/Footfall.svg';
import dollar_svg from '../../images/Dollar-Svg.svg';
import domain_png from '../../images/Domains Webp Home.webp';

import axios from 'axios';
import { baseUrl, localUrl } from '../../API/api';
import LoaderSpin from '../UI/loader/LoaderSpin';

const Home = props => {
  const [sponserData, setSponserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${baseUrl}/sponser/getAllSponsors`).then(sponRes => {
      setSponserData(sponRes.data.data);
      setIsLoading(false);
    });
  }, []);

  const gotoServices = () =>
    window.scrollTo({
      top: 1050,
      behavior: 'smooth',
    });

  return (
    <div className="home">
      <div className="home__video ">
        <video
          className="homepage_gif"
          style={{ marginTop: '100px' }}
          width="100%"
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source
            style={{ width: '100%' }}
            src={homepage__gifvideo}
            type="video/webm"
          />
        </video>
        <video
          className="homepage_gif_mobile my-5"
          width="100%"
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src={homepage_gif_mobile} type="video/webm" />
          Your browser does not support the video tag.
        </video>
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
              <LazyLoadImage src={homepage_gif} className="rounded Logo_image" alt="" />
            </div>

            <div className="text-center py-2  logo_section__about">
              <div className=" text-center logo_section_about__heading">
                <h2 className="">The Ultimate Leap to Agro-Tech</h2>
              </div>
              <div className="text-center logo_section_about__paragraph">
                <div className="">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className=" ">
                        techFEST'22 is on the mission to revolutionize
                        Agro-Technology. Explore with us how new advancements in
                        technologies ranging from robotics and drones to
                        computer vision software transform traditional methods
                        of agriculture. With the young innovative minds
                        competing to bring a change and supporting the backbone
                        of our nation.
                      </p>
                    </blockquote>
                  </figure>
                </div>

                <div className=""></div>
              </div>
            </div>
            <div className="text-center logo_section__button_section">
              {!props.isAuth && (
                <NavLink
                  data-toggle="button"
                  aria-pressed="true"
                  autoComplete="off"
                  activeClassName="active "
                  exact
                  to="/signup"
                  role="button"
                  className="btn btn-green mx-2 pr-5 pl-5 btn-lg logo_section_button_section__Sign_Up"
                >
                  Sign Up Now
                </NavLink>
              )}
              <NavLink
                data-toggle="button"
                aria-pressed="true"
                autoComplete="off"
                activeClassName="active "
                exact
                to="/about"
                role="button"
                className="btn text-light pr-5 pl-5 mx-2 btn-lg  logo_section_button_section__About_Us"
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Scroll Down Button Start--> */}
      <div className="banner--fadeBottom" />
      <div className="bottomSection">
        <div className="cards-container">
          <div className="cards-container_card1">
            <div className="cards-container_card1_image ">
              <LazyLoadImage
                className="workShop_Animation "
                src={workshop_home_png}
                alt=""
              />
            </div>
            <div className="cards-container_card1_description-container">
              <div className="cards-container_card1_description-container_title">
                Workshops
              </div>
              <div className="cards-container_card1_description-container_content">
                In Workshops learning is something to be enjoyed, not endured.
              </div>
              <div className="cards-container_card1_description-container_btn">
                <NavLink to={'/workshop'}>Learn More</NavLink>
              </div>
            </div>
          </div>
          <div className="cards-container_card2">
            <div className="cards-container_card2_image">
              <LazyLoadImage className="workShop_Animation" src={domain_png} alt="" />
            </div>
            <div className="cards-container_card2_description-container">
              <div className="cards-container_card1_description-container_title">
                Domain
              </div>
              <div className="cards-container_card2_description-container_content">
                Unleash your skills and test yourselves on National
                Battlegrounds with 8 Domains
              </div>
              <div className="cards-container_card2_description-container_btn">
                <NavLink to={'/domain'}>Learn More</NavLink>
                {/* <a href="/#">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container__college__people__money1 cards-container ">
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
                    <LazyLoadImage src={footfall} alt="" />
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
                    <LazyLoadImage src={dollar_svg} alt="" />
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
        <div className="home__slider">
          <div className="home__slider__text  container">
            <h1>Sponsors</h1>
            <div className="home__slider__line"></div>
          </div>
          {/* <Sliderslick data={props.data} /> */}
          {isLoading && (
            <div style={{ textAlign: 'center', marginTop: '10rem' }}>
              <LoaderSpin />{' '}
            </div>
          )}
          {sponserData && !isLoading ? (
            <Sliderslick data={sponserData} isBack={true} />
          ) : null}
        </div>
      </div>
      <div className="merchendise  container">
        <div className="merchendise__head">
          <h1>OUR INDUSTRY COLLABORATOR</h1>
          <p>Let's Make A Change</p>
        </div>
        <div className="merchendise__image mt-5">
          <a href="#">
            {' '}
            <LazyLoadImage src={merchendese} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
