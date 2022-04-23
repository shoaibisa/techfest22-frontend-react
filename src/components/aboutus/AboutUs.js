import React from 'react';
import Sliderslick from '../Slider/Sliderslick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './AboutUs.css';

const AboutUs = (props) => {
  return (
    <div className="aboutus-wrap aboutUsBody">
      <div className="container__About__Us__Upperpart">
        <div className="About__Us__part1">
          <div className="About__Us__part1__techfest__logo">
            <LazyLoadImage src={props.data.head_tf[1].imageSrc} alt="" />
          </div>
          <div className="About__Us__part1__SLIET__logo">
            <LazyLoadImage src={props.data.head_tf[2].imageSrc} alt="" />
          </div>
        </div>
        <div className="About__Us__part2">
          <LazyLoadImage src={props.data.head_tf[0].imageSrc} alt="" />
          <div className="About__Us__part2__text  ">
            <p>
              techFEST is a platform where engineers, innovators, changemakers, 
              entrepreneurs and tech enthusiasts collaborate to create solutions
              to some of the world's most challenging problems.
            </p>
          </div>
        </div>
      </div>

      <div className="container__college__people__money1 container">
        <div className="college__people__money1">
          <div className="colhmn">
            <div className="college">
              <div className="icon1">
                <LazyLoadImage src={props.data.group_buliding[0].imageSrc} alt="" />
              </div>
              <div className="number">
                <b>30+</b>
              </div>
              <div className="text">
                <b>
                  Institute Participate <br />
                  Every Year
                </b>
              </div>
            </div>
          </div>
          {/* <!---------------- End of section 1 ----------------> */}

          <div className="colhmn">
            <div className="people">
              <div className="icon2">
                <LazyLoadImage src={props.data.group_buliding[1].imageSrc} alt="" />
              </div>
              <div className="number">
                <b>10K+</b>
              </div>
              <div className="text">
                <b>
                  Footfall during <br />
                  techFEST'21
                </b>
              </div>
            </div>
          </div>
          {/* <!---------------- End of section 2  ----------------> */}

          <div className="colhmn">
            <div className="money">
              <div className="icon3">
                <LazyLoadImage src={props.data.group_buliding[2].imageSrc} alt="" />
              </div>
              <div className="number">
                <b>5L+</b>
              </div>
              <div className="text">
                <b>
                  Worth Of Goodies <br />
                  And Prize Money
                </b>
              </div>
            </div>
          </div>
          {/* <!---------------- End of section 3  ----------------> */}
        </div>
      </div>

      <div className="container__About__Sliet">
        <div className="About__Us__About__SLIET">
          <div className="About__Us__About__Sliet__Heading">About SLIET</div>
          <div className="About__Us__About__Sliet__Description">
            <p>
            Established in 1989, Sant Longowal Institute of Engineering and Technology was set up in Longowal,
             Punjab in the memory of Late Sh. Harchand Singh Ji Longowal. With the motto “Together We Can Make A Difference”,
              the institute strives to play its part in society by providing technical education with the underlying belief that only
               an educated youth holds the key to national upliftment.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- About sliet part ends here -->
    <!-- year-logo code starts here --> */}
      <div className="website_year-declaration">
        <div className="website_year-declaration_outer-container container">
          <div className="website_year-declaration_left-block">
            <div className="website_year-declaration_left-block_title heading">
              <h1>techFEST'22</h1>
            </div>
            <div className="website_year-declaration_left-block_content para">
              <p>
                <b>The Ultimate Leap to Agro-Tech</b> <br />
                With 40+ Events and an aim to take up <br />
                the Ultimate Leap in Technology for <br />
                Agriculture this year.
              </p>
            </div>
          </div>
          <div className="website_year-declaration_right-block">
            <div className="website_year-declaration_right-block_img image-box">
              <LazyLoadImage
                src={props.data.groupTechfestAbt[0].imageSrc}
                alt="About us"
              />
            </div>
          </div>
        </div>
        <div className="website_year-declaration_outer-container">
          <div className="website_year-declaration_left-block">
            <div className="website_year-declaration_left-block_img image-box">
              <LazyLoadImage src={props.data.groupTechfestAbt[1].imageSrc} alt="" />
            </div>
          </div>
          <div className="website_year-declaration_right-block">
            <div className="website_year-declaration_right-block_title heading">
              <h1>techFEST'21</h1>
            </div>
            <div className="website_year-declaration_right-block_content para">
              <p>
                <b>Revitalizing India</b> <br />
                With 30+ Universities across the Nation <br />
                we ensured that together we come up <br />
                with technologies Revitalising India
              </p>
            </div>
          </div>
        </div>
        <div className="website_year-declaration_outer-container">
          <div className="website_year-declaration_left-block">
            <div className="website_year-declaration_left-block_title heading">
              <h1>techFEST'20</h1>
            </div>
            <div className="website_year-declaration_left-block_content para">
              <p>
                <b>Pedalling towards Cosmic Yantra</b> <br />
                It instigated the innovation in space and we expanded our wings to more 30 universities all over the country
              </p>
            </div>
          </div>
          <div className="website_year-declaration_right-block">
            <div className="website_year-declaration_right-block_img image-box">
              <LazyLoadImage src={props.data.groupTechfestAbt[2].imageSrc} alt="" />
            </div>
          </div>
        </div>
        <div className="website_year-declaration_outer-container">
          <div className="website_year-declaration_left-block">
            <div className="website_year-declaration_left-block_img image-box">
              <LazyLoadImage src={props.data.groupTechfestAbt[3].imageSrc} alt="" />
            </div>
          </div>
          <div className="website_year-declaration_right-block">
            <div className="website_year-declaration_right-block_title heading">
              <h1>techFEST'19</h1>
            </div>
            <div className="website_year-declaration_right-block_content para">
              <p>
                <b>Innovation in Cycle Design</b> <br />
                Engrossed the Innovation in Bicycle with  collaborations of universities nationwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- yearly-logo code ends here -->

    <!-- trailer code starts here --> */}
      <div className="container-fluid" id="Trailer">
        <div className="trailer_container">
          <iframe
            className="trailer_iframe"
            title="Trailer"
            src="https://www.youtube.com/embed/Nt58vSQqBU8?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
      </div>
      {/* <!-- trailer code ends here --> */}

      {/* <!-- gallery code starts here --> */}

      <div className="aboutUs__slider">
      <div class="Website_sponsor_heading">
        <h1>Gallery</h1>
      </div>
      <Sliderslick data={props.data.gallery} />
      </div>

      {/* <!-- gallery code ends here --> */}

      {/* Sponser */}
      <div className="aboutUs__slider aboutUs__slider__last">
      <div class="Website_sponsor_heading">
        <h1>Our Sponsor</h1>
      </div>
  
     <Sliderslick data={props.data.sponser} />
     </div>
    </div>
  );
};

export default AboutUs;
