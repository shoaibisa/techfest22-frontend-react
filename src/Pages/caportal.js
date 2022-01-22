import React from "react";



//image import
import headerLogo from '../images/header-logo.png';
import heroImg from '../images/hero_image.png';
import icon_college from '../images/icon_college.svg';
import icon_mail from '../images/icon_mail.svg';
import icon_money from '../images/icon_money.svg';
import icon_people from '../images/icon_people.svg'
import icon_phone from '../images/icon_phone.svg';
import ima_lor from '../images/ima_lor.png';
//import image from '../images/image.png';
import img_concession from '../images/img_concession.png';
import img_goodies from '../images/img_goodies.png';
import img_leader from '../images/img_leader.png';
// import Rectangle_365 from '../images/Rectangle_365.png';
// import Rectangle from '../images/Rectangle.png';


const CaPortal = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    // document.getElementById("mainMenu").style.marginright = "200px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("mainMenu").style.marginleft = "0";
  }

  return (
    <div>
     <div className="backImg__1">
        <div className="navBar">
            <nav className="navbar_continer">
                <div className="navbar_navlogo">
                    <img src={headerLogo} alt="" className="navLogo" />
                </div>
                <div className="mainMenu">
                    <ul>
                        <li className="btn Active"><a href="#Home">Home</a></li>
                        <li className="btn"><a href="#sponsors">Sponsors</a></li>
                        <li className="btn"><a href="#Gallary">About us</a></li>
                        <span onClick={openNav} className="hamburgerIcon">
                                <div></div>
                                <div></div>
                                <div></div>
                            </span>
                    </ul>
                </div>
                <div id="mySidenav" className="sidenav">
                    <a href="#close"  className="closebtn" onClick={closeNav}>×</a>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                    <li><a href="#Gallary">About us</a></li>
                </div>
            </nav>
        </div>



        <div className="container2">
            <div className="mainContentdesktopview">
                <div className="homePage container-fluid">
                    <div className="homePage_item">
                        <div className="homePage_item_content">
                            <div className="homePage_item_content_heading">
                                <h2 className="homePage_item_heading">CAMPUS
                                    <br/>AMBASSADOR <br/>PROGRAM</h2>
                            </div>
                            <div className="homePage_item_heading_shadow"></div>
                        </div>

                        <div className="homePage_Btn">
                            <input type="submit" className="homePage_Btn
                                    homePage__Btn__btn1" value="Register Now"  />
                            <input type="submit" className="homePage_Btn
                                    homePage_Btn__btn2" value="Learn More" />
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
                        <p className="para">
                            Here, the CAs build a network of students from 250+ colleges and learn about social media, marketing, event planning and execution. They are rewarded for fulfilling thier responsibilities and motivated to strive to improve their personal skills continually.
                        </p>
                    </div>
                    <div className="about_Ca_portal_about_section__btn">
                        <input type="submit" className="homePage_Btn
                                homePage__Btn__btn1" value="Register Now" />
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="about-ca-program-next-half">
                    <div className="row">
                        <div className="col">
                            <div className="about-ca-program-next-half-college">
                                <div className="about-ca-program-next-half-icon1">
                                    <img src={icon_college} alt="college"  />
                                </div>
                                <div className="about-ca-program-next-half-number">
                                    <b>30+</b>
                                </div>
                                <div className="about-ca-program-next-half-text">
                                    <b>Institute Participate <br/> Every Year</b>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------- End of section 1 of next half ----------------> */}
                        <div className="col">
                            <div className="about-ca-program-next-half-people">
                                <div className="about-ca-program-next-half-icon2">
                                    <img src={icon_people} alt=""  />
                                </div>
                                <div className="about-ca-program-next-half-number">
                                    <b>10K+</b>
                                </div>
                                <div className="about-ca-program-next-half-text">
                                    <b>Footfall during <br/> techFEST'21</b>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------- End of section 2 of next half ----------------> */}
                        <div className="col">
                            <div className="about-ca-program-next-half-money">
                                <div className="about-ca-program-next-half-icon1">
                                    <img src={icon_money} alt=""  />
                                </div>
                                <div className="about-ca-program-next-half-number">
                                    <b>5L+</b>
                                </div>
                                <div className="about-ca-program-next-half-text">
                                    <b>Worth Of Goodies <br/> And Prize Money</b>
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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur a iusto accusantium velit itaque, ad dolorum sit. At dolore incidunt quod.
                        </p>
                    </div>
                    <div className="perks_continer__first_sub_card2">
                        <img src={img_concession} alt="cocession" />
                        <h3>Concession on Workshops</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur a iusto accusantium velit itaque, ad dolorum sit. At dolore incidunt quod.
                        </p>

                    </div>

                </div>
                <div className="perks_continer__second_sub">
                    <div className="perks_continer__first_sub_card3">
                        <img src={img_goodies} alt="goodies" />
                        <h3>Goodies &amp; Rewards</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur a iusto accusantium velit itaque, ad dolorum sit. At dolore incidunt quod.
                        </p>
                    </div>
                    <div className="perks_continer__first_sub_card4">

                        <img src={ima_lor} alt="ima_lor"/>
                        <h3>Letter of Recommendation</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur a iusto accusantium velit itaque, ad dolorum sit. At dolore incidunt quod.
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
                        <a href="#Reg" className="registerationblock-card_btn_a_mobile-view">Register
                                Here</a>
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
                                <a href="#Register" className="registerationblock-card_btn_a">Register
                                        Here</a>
                            </div>
                        </div>
                        <div className="website_box_layer_outercontainer_innercontainer_contactblock-card">
                            <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_heading">
                                Still Having Doubts and Queries? <br/> Reach us At
                            </div>
                            <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo">
                                <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock">
                                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock_icon">
                                        <img src={icon_mail} alt=""/>
                                    </div>
                                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock_idname">
                                        xxxxxx@gmail.com
                                    </div>
                                </div>
                                <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock">
                                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock_icon">
                                        <img src={icon_phone} alt="" />
                                    </div>
                                    <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock_contactNo">
                                        1234567890
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
    <div className="footer">
        <div className="social-icons">
            <a href="https://www.facebook.com/techfestsliet/" target="_blank" rel="noopener
                    noreferrer"><i className="fa fa-facebook-square fa-2x"> </i></a>
            <a href="https://twitter.com/techfestsliet" target="_blank" rel="noopener
                    noreferrer"><i className="fa fa-twitter-square fa-2x"></i></a>
            <a href="https://instagram.com/techfestsliet_" target="_blank" rel="noopener
                    noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
            <a href="https://www.linkedin.com/company/techfest-sliet" target="_blank" rel="noopener
                    noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
            <a href="https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg" target="_blank" rel="noopener
                    noreferrer"><i className="fa fa-youtube-play fa-2x"></i></a>
        </div>
    </div>
  </div>
  );
};

export default CaPortal;
