import React from 'react';
import ReactDOM from 'react-dom';
import './aboutus.css';
import { localUrl, baseUrl } from '../../API/api';
import Freq from '../../images/freq/1.png';
import Bg from '../../images/Stagnant-BG-Webp.webp';

const Aboutus = () => {
  return (
    <>
      <section className="main-content">
        <div className="container">
          <h1 className="text-center  mb-5">Frequently Asked Questions</h1>

          <div className="row flex-center">
            <div className="col-sm-10 offset-sm-2">
              <div className="accordion" id="accordionExample">
                <div
                  style={{ backgroundColor: 'transparent ' }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      style={{ backgroundColor: 'transparent' }}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span style={{ color: 'white',background:'transparent' }}>
                        How to Create FAQ Section
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      style={{ backgroundColor: 'transparent', color: 'white' }}
                      className="accordion-body"
                    >
                      <strong>This is the first item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                    </div>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: 'transparent ' }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      style={{ backgroundColor: 'transparent' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span style={{ color: 'white',background:'transparent'  }}>
                        What jQuery do I need?
                      </span>
                    </button>
                  </h2>
                  <div
                    style={{ color: 'white' }}
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      style={{ backgroundColor: 'transparent', color: 'white' }}
                      className="accordion-body"
                    >
                      <strong>This is the second item's accordion body.</strong>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.{' '}
                    </div>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: 'transparent ' }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      style={{ backgroundColor: 'transparent ' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span style={{ color: 'white',background:'transparent'  }}>
                        HTML CSS FAQ Design With jQuery Accordion
                      </span>{' '}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      style={{ backgroundColor: 'transparent', color: 'white' }}
                      className="accordion-body"
                    >
                      <strong>This is the third item's accordion body.</strong>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-center  mb-5">
                  Don’t Think Twice , Simply Dial In
                </h2>
                <div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                  className="center"
                >
                  <div>
                    <p style={{ fontSize: '20px', marginRight: '25px' }}>
                      Soham
                    </p>
                    <p style={{ fontSize: '18px', marginRight: '25px' }}>
                 
                      <a style={{textDecoration:'none',color:'green'}}  href="tel:9740734156">9740734156</a>
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '20px', marginRight: '25px' }}>
                      Pragati
                    </p>
                    <p style={{textDecoration:'none', fontSize: '18px', marginRight: '25px' }}>
                      {' '}
                      <a style={{textDecoration:'none',color:'green'}}  href="tel:7367080390">7367080390</a>
                    </p>
                  </div>
                  <div>
                    <p style={{ textDecoration:'none', fontSize: '20px', marginRight: '25px' }}>
                      Abhishek
                    </p>
                    <p style={{ textDecoration:'none', fontSize: '18px', marginRight: '25px' }}>
                      <a style={{textDecoration:'none' ,color:'green'}}  href="tel:7404146589">7404146589</a>
                    </p>
                  </div>
                </div>
              </div>
              
              
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <p style={{ fontSize: '20px', margin:'0px', alignItems:'center' }}>
                       write us at </p>
                       <p style={{margin:'0px'}}>
                        <a  style={{textDecoration:'none', color:'green'}}  href="#"><br></br>support@techfestsliet.com</a>
                      </p>
                  </div>
                </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Freq} />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
