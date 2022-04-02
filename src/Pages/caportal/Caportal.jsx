import React from 'react';

import './Caportal.css';

//image import
// import headerLogo from '../../images/header-logo.png';
import heroImg from '../../images/hero_image.png';
import icon_college from '../../images/icon_college.svg';
import icon_mail from '../../images/icon_mail.svg';
import icon_money from '../../images/icon_money.svg';
import icon_people from '../../images/icon_people.svg';
import icon_phone from '../../images/icon_phone.svg';
import ima_lor from '../../images/ima_lor.png';
//import image from '../../images/image.png';
import img_concession from '../../images/img_concession.png';
import img_goodies from '../../images/img_goodies.png';
import img_leader from '../../images/img_leader.png';
// import Navbar from "../../components/header/Navbar";
// import Rectangle_365 from '../../images/Rectangle_365.png';
// import Rectangle from '../../images/Rectangle.png';

const CaPortal = () => {
  return (
    <div className="caportal" style={{ marginBottom:"70px" }}>
      <div className="backImg__1">
        <div className="container2">
          <div className="mainContentdesktopview">
            <div className="homePage container-fluid">
              <div className="homePage_item">
                <div className="homePage_item_content">
                  <div className="homePage_item_content_heading">
                    <h2 className="homePage_item_heading">
                      CAMPUS
                      <br />
                      AMBASSADOR <br />
                      PROGRAM
                    </h2>
                  </div>
                  <div className="homePage_item_heading_shadow"></div>
                </div>

                <div className="homePage_Btn">
                  <a
                    href="https://forms.gle/Q9a3m6GJ99wsmEYz9"
                    className="homePage_Btn
                                    homePage__Btn__btn1"
                    target="_blank" rel="noreferrer"
                  >
                    Register Now
                  </a>
                  <a
                    href="/#"
                    className="homePage_Btn
                                    homePage_Btn__btn2"
                    value="Learn More"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div>
                <img className="homePage_img" src={heroImg} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="mainContent Caportal__body">
          <div className="about_Ca_portal">
            <div className="about_Ca_portal__heading">
              <div className="about_CaPortal__heading_content">
                <h2>ABOUT CA PROGRAM</h2>
              </div>
              <div className="about_CaPortal__heading__Boader"></div>
            </div>
            <div className="about_Ca_portal_about_section">
              <div className="about_Ca_portal_about_section__para">
                <p className="para1">
                  The program aims at developing a network of students from over
                  250+ colleges. Inculcating in them, skills such as social
                  media handling, event management, planning and execution etc.
                  The program will help individuals in grooming their dynamic
                  personality and will in turn help in future excellence. Every
                  individual will be rewarded subject to fulfilling the
                  responsibilities been given. The rewards will stimulate
                  motivation as an asset to work upon the skills and strive for
                  better outputs with consistency.
                </p>
              </div>
              <div className="about_Ca_portal_about_section__btn">
                <input
                  type="submit"
                  className="homePage_Btn
                                homePage__Btn__btn1"
                  value="Register Now"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="about-ca-program-next-half">
              <div className="row">
                <div className="col">
                  <div className="about-ca-program-next-half-college">
                    <div className="about-ca-program-next-half-icon1">
                      <img src={icon_college} alt="college" />
                    </div>
                    <div className="about-ca-program-next-half-number">
                      <b>30+</b>
                    </div>
                    <div className="about-ca-program-next-half-text">
                      <b>
                        Institute Participate <br /> Every Year
                      </b>
                    </div>
                  </div>
                </div>
                {/* <!---------------- End of section 1 of next half ----------------> */}
                <div className="col">
                  <div className="about-ca-program-next-half-people">
                    <div className="about-ca-program-next-half-icon2">
                      <img src={icon_people} alt="" />
                    </div>
                    <div className="about-ca-program-next-half-number">
                      <b>10K+</b>
                    </div>
                    <div className="about-ca-program-next-half-text">
                      <b>
                        Footfall during <br /> techFEST'21
                      </b>
                    </div>
                  </div>
                </div>
                {/* <!---------------- End of section 2 of next half ----------------> */}
                <div className="col">
                  <div className="about-ca-program-next-half-money">
                    <div className="about-ca-program-next-half-icon1">
                      <img src={icon_money} alt="" />
                    </div>
                    <div className="about-ca-program-next-half-number">
                      <b>5L+</b>
                    </div>
                    <div className="about-ca-program-next-half-text">
                      <b>
                        Worth Of Goodies <br /> And Prize Money
                      </b>
                    </div>
                  </div>
                </div>
                {/* <!---------------- End of section 3 of next half ----------------> */}
              </div>
            </div>
          </div>

          <div className="perks_Ca_portal">
            <div className="perks_Ca_portal__heading">
              <div className="perks_CaPortal__heading_content">
                <h2>PERKS OF BEING A CR</h2>
              </div>
              <div className="perks_CaPortal__heading__Boader"></div>
            </div>
          </div>
          <div className="perks_continer">
            <div className="perks_continer__first_sub">
              <div className="perks_continer__first_sub_card1">
                <img src={img_leader} alt="" />
                <h3>Become a leader</h3>
                <p>
                  Leadership is the most demanding skill not only in your
                  workplace but also in your life, and being part of this
                  program will let you build strong & efficient leadership
                  qualities.
                </p>
              </div>
              <div className="perks_continer__first_sub_card2">
                <img src={img_concession} alt="cocession" />
                <h3>Concession on Workshops</h3>
                <p>
                  Being a part of workshops lets you learn and improve your
                  skills in lesser time than you feel, and guess what the
                  program gave you concession on workshops. Isn’t that great?{' '}
                </p>
              </div>
            </div>
            <div className="perks_continer__second_sub">
              <div className="perks_continer__first_sub_card3">
                <img src={img_goodies} alt="goodies" />
                <h3>Goodies &amp; Rewards</h3>
                <p>
                  The program does not just make you learn skills there is
                  something extra i.e., you would be getting awesome goodies &
                  Rewards. Guess what, that’s a surprise.{' '}
                </p>
              </div>
              <div className="perks_continer__first_sub_card4">
                <img src={ima_lor} alt="ima_lor" />
                <h3>Letter of Recommendation</h3>
                <p>
                  Learning skills, applying them in real life builds your
                  knowledge power but what next to get your dream job, a
                  prestigious L.O.R i.e., Letter of Recommendation. In this
                  program, you would be getting L.O.R too.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!---------------------------------------------- perks of ca ends here-------------------------------------> */}
        {/* <!---------------------- Query box goes here -----------------------> */}
        <div className="website_box_layer container">
          {/* <!-- for mobile view  starts here--> */}
          <div className="website_box_layer_registerationblock-card_mobile-view">
            <div className="website_box_layer_registerationblock-card_mobile-view_innercontent">
              <div className="website_box_layer_registerationblock-card_innercontent_btn_mobile-view">
                <a
                  href="https://forms.gle/Q9a3m6GJ99wsmEYz9"
                  className="registerationblock-card_btn_a_mobile-view"
                  target="_blank" rel="noreferrer"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>
          {/* <!-- for mobile view ends here -->
            <!-- for desktop view starts here --> */}
          <div className="website_box_layer_desktop-view">
            <div className="website_box_layer_outercontainer">
              <div className="website_box_layer_innercontainer">
                <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card">
                  <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card_heading">
                    Ready to Upskill Yourself ?
                  </div>
                  <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card_btn">
                    <a
                      href="https://forms.gle/Q9a3m6GJ99wsmEYz9"
                      className="registerationblock-card_btn_a"
                      target="_blank" rel="noreferrer"
                    >
                      Register Here
                    </a>
                  </div>
                </div>
                <div className="website_box_layer_outercontainer_innercontainer_contactblock-card">
                  <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_heading">
                    Still Having Doubts and Queries? <br /> Reach us At
                  </div>
                  <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo">
                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock">
                      <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock_icon">
                        <img src={icon_mail} alt="" />
                      </div>
                      <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock_idname">
                        techfest@sliet.ac.in
                      </div>
                    </div>
                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock">
                      <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock_icon">
                        <img src={icon_phone} alt="" />
                      </div>
                      <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock_contactNo">
                        +91 97407 34156
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- for desktop view ends here --> */}
        </div>
        {/* <!---------------------- Query box ends here -----------------------> */}
      </div>
    </div>
  );
};

export default CaPortal;
