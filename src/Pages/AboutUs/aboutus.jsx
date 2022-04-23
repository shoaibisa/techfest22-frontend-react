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
           <div >
              <div className="accordion" id="accordionExample">
                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
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
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                       How to register on the website?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px sloid white', color: 'white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                    You can enter your details and sign up at <a  href=' https://www.techfestsliet.com/signup'> https://www.techfestsliet.com/signup</a>
                    </div>
                  </div>
                </div>


                <div
                  style={{ backgroundColor: 'transparent' }}
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
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                       When is techFEST'22 ?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px sloid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      The techfest is scheduled to be held on April 29th & 30th.
                    </div>
                  </div>
                </div>
                
                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
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
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                       Do I need to pay any fee for registration?
                      </span>{' '}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      
                      There is no registration fee for candidates enrolled in SLIET. For participants from other institutes the registration fee is:
                       <ul>
                         <li style={{ pointerEvents: 'none'}}>Rs. 299 for online events.</li>
                         <li  style={{ pointerEvents: 'none'}}>Rs. 599 for offline events.</li>
                       </ul>



                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      style={{ backgroundColor: 'transparent ' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                       How many teams can I be a part of for an event?

                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      
                      For a given event, a participant can be a part of only one team. 

                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      style={{ backgroundColor: 'transparent ' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                       Can I participate in multiple events?

                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      
                      Yes, you are encouraged to participate in as many events as you like. Also, there are no departmental constraints i.e. students of a department can participate in of the other domains.


                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      style={{ backgroundColor: 'transparent ' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                      What is the registration process?

                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      
                      All members have to register themselves on the website. The team leader will then form a team and add the remaining members.

                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'transparent ',
                    borderBottom: '1px solid white',
                  }}
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      style={{ backgroundColor: 'transparent ' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <span
                        style={{ color: 'white', background: 'transparent' }}
                      >
                      Can students of institutes other than sliet participate in the events?


                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <div
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderBottom: '1px sloid white',
                      }}
                      className="accordion-body"
                    >
                      
                      Yes, students enrolled in diploma and degree programmes in any technical institute can participate.

                    </div>
                  </div>
                </div>


                

                
                
              </div>
              <div
               className='mt-5 ms-5'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign:'center',
                }}>
                <div>
                
                  <h2 className="text-center  h2 mb-5">
                    Don’t Think Twice , Simply Dial In
                  </h2>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                  className="text-center"
                >
                  <div className='contactus__user'>
                    <p style={{ fontSize: '20px', marginRight: '25px' }}>
                      Soham Das
                    </p>
                    <p style={{ fontSize: '18px', marginRight: '25px' }}>
                      <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="tel:9740734156"
                      >
                        9740734156
                      </a>
                    </p>
                  </div>
                  <div className='contactus__user'>
                    <p style={{ fontSize: '20px', marginRight: '25px' }}>
                      Pragati Priya
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: '18px',
                        marginRight: '25px',
                      }}
                    >
                      {' '}
                      <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="tel:7367080390"
                      >
                        7367080390
                      </a>
                    </p>
                  </div>
                  <div className='contactus__user'>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: '20px',
                        marginRight: '25px',
                      }}
                    >
                      Abhishek Yadav
                    </p>
                    <p
                      style={{
                        textDecoration: 'none',
                        fontSize: '18px',
                        marginRight: '25px',
                      }}
                    >
                      <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="tel:7404146589"
                      >
                        7404146589
                      </a>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <p
                    style={{
                      fontSize: '20px',
                      margin: '0px',
                      textAlign: 'center',
                    }}
                  >
                    <b>Write Us At</b>
                  </p>
                  <p style={{ margin: '-24px' }}>
                    <a
                      style={{ textDecoration: 'none', color: 'white' }}
                      href="#"
                    >
                      <br></br>support@techfestsliet.com
                    </a>
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img className="imge" src={Freq} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
