import React from 'react';
import './Domain.css';
// import SimpleSlider from '../../components/DomainSlider/Domainslider';
const Domain = props => {
  //   var items = document.getElementsByClassName('line');
  //   var activeClassName = 'active';

  //   function unselectItems() {
  //     for (var i = 0; i < items.length; i++) {
  //       items[i].classList.remove(activeClassName);
  //     }
  //   }

  //   function selectItem(item) {
  //     unselectItems();
  //     item.classList.add(activeClassName);
  //   }

  //   function onItemClick(event) {
  //     selectItem(event.target);
  //   }

  //   for (var i = 0; i < items.length; i++) {
  //     items[i].addEventListener('click', onItemClick);
  //   }
  //   /*--Slider--*/
  //   var slideIndex = 1;
  //   showSlides(slideIndex);

  //   function plusSlides(n) {
  //     showSlides((slideIndex += n));
  //   }

  //   function currentSlide(n) {
  //     showSlides((slideIndex = n));
  //   }

  //   function showSlides(n) {
  //     var i;
  //     var slides = document.getElementsByClassName(
  //       'domains__slideshow__myslides'
  //     );
  //     var dots = document.getElementsByClassName('Domains__slide__button__dot');
  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = 'none';
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(' active1', '');
  //     }
  //     slides[slideIndex - 1].style.display = 'block';
  //     dots[slideIndex - 1].className += ' active1';
  //   }
  return (
    <div className='Mainomainbody'>
      <div className="background">
        <div className="silder container mt-5 pt-5">
          <div className="domains__slideshow__container ">
            <div className="domains__slideshow__myslides domains__slideshow__fade">
              <img src={props.data[0].imageSrc} alt="" />
            </div>
            
            <div className="domains__slideshow__myslides domains__slideshow__fade">
              <img src={props.data[0].imageSrc} alt="" />
            </div>

            <div className="domains__slideshow__myslides domains__slideshow__fade">
              <img src={props.data[0].imageSrc} alt="" />
            </div>
          </div>

          <div className="Domains__slide__button mt-3">
            <span
              className="Domains__slide__button__dot"
              onClick="currentSlide(1)"
            ></span>
            <span
              className="Domains__slide__button__dot"
              onClick="currentSlide(2)"
            ></span>
            <span
              className="Domains__slide__button__dot"
              onClick="currentSlide(3)"
            ></span>
          </div>
        </div>
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
                    style={{width:"230px",height:"230px" }}
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
  );
};

export default Domain;
