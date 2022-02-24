import React from 'react';
import Slider from 'react-slick';
import './Domain.css';
// import SimpleSlider from '../../components/DomainSlider/Domainslider';
const Domain = props => {
 
  var settings = {
    infinite: true,
    speed: 600,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,

  };

  return (
    <div className='Mainomainbody'>

        <div className="Mainomainbody__slider container">
        <Slider  {...settings} >
          <div

            style={{
              width: "100%"
            }}>
            <img  src={props.data[0].imageSrc} alt="" />
          </div>
          <div
            style={{
              width: "100%"
            }}>
            <img  src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
              width: "100%"
            }}>
            <img  src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
              width: "100%"
            }}>
            <img src={props.data[0].imageSrc} alt="" />
          </div>
          <div>
            <img  src={props.data[0].imageSrc} alt="" />
          </div>
          <div style={{
              width: "100%"
            }}>
            <img  src={props.data[0].imageSrc} alt="" />
          </div>
        </Slider>
        </div>


      <div className="  container ">

        
       
        <div className="text-center domains__section text-light container mt-3 pt-3">
          <div className=" text-center domains__section__heading">
            <h2 className="">Domains</h2>
          </div>
          <div className="text-center domains__section__paragraph">
            <div className="">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio architecto et dolorem sapiente as pernatur dolore autem
                    culpa deleniti praesentium deserunt expedita eos
                    reprehenderit dignissimos voluptatibus, omnis fuga non
                    facilis possimus.
                  </p>
                </blockquote>
              </figure>
            </div>

            <div className=""></div>
          </div>
        </div>


        <div className="gradient">
          <div className="card-group container mt-5 pt-5 mb-5 pb-5 cards ">
            <div className="row1 mt-5">
              <div className="flip-card  card1 mt-3 mx-2">
                <div className="flip-card-inner " style={{ marginLeft: '1rem' }}>
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: '230px', height: '230px;' }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div className="flip-card-inner  " style={{ marginLeft: '1rem' }}>
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: '230px', height: '230px' }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
              <div className="flip-card mt-3 mx-2 ">
                <div
                  className="flip-card-inner "
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <div className="flip-card-front ">
                    <img
                      src={props.data[0].imageSrc}
                      alt="Avatar "
                      style={{ width: "230px", height: "230px" }}
                    />
                    <div className="bottom-right ">
                      <h4> Electrica</h4>
                      <p>Explore</p>
                    </div>
                  </div>
                  <div className="flip-card-back ">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
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

export default Domain;
