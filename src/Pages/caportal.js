import React from "react";
import $ from "jquery";

import headerLogo from '../images/header-logo.png';


const CaPortal = () => {
  $(window).scroll(function (event) {
    function footer() {
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
        $(".footer ").fadeIn("slow ").removeClass("show ");
      } else {
        $(".footer ").fadeOut("slow ").removeClass("show ");
      }

      clearTimeout($.data(this, "scrollTimer"));
      $.data(
        this,
        "scrollTimer",
        setTimeout(function () {
          if ($(".footer").is(":hover")) {
            footer();
          } else {
            $(".footer ").fadeOut("slow ");
          }
        }, 2000)
      );
    }
    footer();
  });
  return (
    <div>
      <div className="bgImage AppBody">
        <div className="navBar">
          <nav className="navbar_continer">
            <div className="navbar_navlogo">
              <img src={headerLogo} alt="" className="navLogo" />
            </div>
            <div class="mainMenu">

<ul id="myDIV">
    <li class="btn Active"><a href="#Home">Home</a></li>
    <li class="btn"><a href="#sponsors">Sponsors</a></li>
    <li class="btn"><a href="#Gallary">Gallery</a></li>
    <span onclick="openNav()" class="hamburgerIcon">
        <div></div>
        <div></div>
        <div></div>
    </span>
</ul>
</div>
          </nav>
        </div>
        <div className="caMain container d-flex pt-5" id="Home">
          <div className="homePage_item">
            <div className="homePage_item_content">
              <div className="homePage_item_content_heading">
                <h2 className="homePage_item_heading">
                  CAMPUS <br />
                  AMBASSADOR <br />
                  PROGRAM
                </h2>
              </div>
              <div className="homePage_item_heading_shadow"></div>
            </div>

            <div className="homePage_Btn">
              <button
                type="submit"
                className="homePage_Btn homePage__Btn__btn1"
                onclick="onEmailAddBtnClick()"
              >
                Register Now
              </button>
              <button
                type="submit"
                className=" homePage_Btn homePage_Btn__btn2"
                value="Learn More"
                onclick="onEmailAddBtnClick()"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="homepage__image">
            <img
              className="homePage_img"
              src="../images/hero_image.png"
              alt="logo"
            />
          </div>
        </div>

        <div className="ca-program-perk">
          <div className="container-sm">
            <div className="about_ca_program">
              <div className="about_ca_program_heading">
                <p>About CA Program</p>
              </div>
              <div className="about_ca_program_line"></div>
            </div>
          </div>
          <div className="container-sm">
            <div className="about_ca_program_intro">
              <p>
                <b>
                  Here, the CAs build a network of students from 250+ colleges
                  and learn about <br />
                  social media, marketing, event planning and execution. They
                  are rewarded for fulfilling thier responsibilities and
                  motivated to strive to improve their personal skills
                  continually.
                </b>
              </p>
            </div>
            {/* <!---------- End of First Half of ca program ----------------> */}
          </div>
          <div className="container">
            <div className="about-ca-program-button">
              <a href="#" className="register-now-button">
                <b>
                  <i>REGISTER NOW</i>
                </b>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="about-ca-program-next-half">
              <div className="row">
                <div className="col">
                  <div className="about-ca-program-next-half-college">
                    <div className="about-ca-program-next-half-icon1">
                      <img src="images/icon_college.svg" alt="" srcset="" />
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
                      <img src="images/icon_people.svg" alt="" srcset="" />
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
                      <img src="images/icon_money.svg" alt="" srcset="" />
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
          {/* <!--------------------------About CA Program ends here-----------------------------------------> */}
          {/* <!---------------------------------------------- perks of ca goes here-------------------------------------> */}
          <div className="container">
            <div className="perks-of-ca">
              <div className="perks-of-ca-heading">
                <p>PERKS OF BEING A CA</p>
              </div>
              <div className="perks-of-ca-line"></div>
            </div>
          </div>
          <div className="container">
            <div className="perk_section">
              <div className="perk__section1">
                <div className="perk_section_1">
                  <div className="perk_card">
                    <img src="images/img_leader.png" />
                    <h3>Become a leader</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur a iusto accusantium velit itaque, ad dolorum
                      sit. At dolore incidunt quod.
                    </p>
                  </div>
                </div>
                {/* <!--------------------Ending of section 1------------------------> */}
                <div className="perk_section_2">
                  <div className="perk_card">
                    <img src="images/img_concession.png" />
                    <h3>Concession on Workshops</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur a iusto accusantium velit itaque, ad dolorum
                      sit. At dolore incidunt quod.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--------------------Ending of section 2------------------------> */}
              <div className="perk__section2">
                <div className="perk_section_3">
                  <div className="perk_card">
                    <img src="images/img_goodies.png" />
                    <h3>Goodies & Rewards</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur a iusto accusantium velit itaque, ad dolorum
                      sit. At dolore incidunt quod.
                    </p>
                  </div>
                </div>
                {/* <!--------------------Ending of section 3------------------------> */}
                <div className="perk_section_4">
                  <div className="perk_card">
                    <img src="images/ima_lor.png" />
                    <h3>Letter of Recommendation</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur a iusto accusantium velit itaque, ad dolorum
                      sit. At dolore incidunt quod.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--------------------Ending of section 4------------------------> */}
            </div>
          </div>
          {/* <!---------------------------------------------- perks of ca ends here-------------------------------------> */}
          <div className="website_box_layer container">
            {/* <!-- for mobile view  starts here--> */}
            <div className="website_box_layer_registerationblock-card_mobile-view">
              <div className="website_box_layer_registerationblock-card_mobile-view_innercontent">
                <div className="website_box_layer_registerationblock-card_innercontent_btn_mobile-view">
                  <a
                    href="#"
                    className="registerationblock-card_btn_a_mobile-view"
                  >
                    Register Here
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- for mobile view ends here --> */}
            {/* <!-- for desktop view starts here --> */}
            <div className="website_box_layer_desktop-view">
              <div className="website_box_layer_outercontainer">
                <div className="website_box_layer_innercontainer">
                  <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card">
                    <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card_heading">
                      Ready to Upskill Yourself ?
                    </div>
                    <div className="website_box_layer_outercontainer_innercontainer_registerationblock-card_btn">
                      <a href="#" className="registerationblock-card_btn_a">
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
                          <img src="/images/icon_mail.svg" alt="" />
                        </div>
                        <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_Emailblock_idname">
                          xxxxxx@gmail.com
                        </div>
                      </div>
                      <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock">
                        <div className="website_box_layer_outercontainer_innercontainer_contactblock-card_contactinfo_contactNoblock_icon">
                          <img src="/images/icon_phone.svg" alt="" />
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
        </div>
        {/* <!---------------------- Query box goes here -----------------------> */}

        {/* <!---------------------- Query box ends here -----------------------> */}
      </div>
      <div className="footer ">
        <div className="social-icons ">
          <a
            href="https://www.facebook.com/techfestsliet/ "
            target="_blank "
            rel="noopener noreferrer "
          >
            {" "}
            <i className="fa fa-facebook-square fa-2x "> </i>
          </a>
          <a
            href="https://twitter.com/techfestsliet "
            target="_blank "
            rel="noopener noreferrer "
          >
            {" "}
            <i className="fa fa-twitter-square fa-2x "></i>
          </a>
          <a
            href="https://instagram.com/techfestsliet_ "
            target="_blank "
            rel="noopener noreferrer "
          >
            {" "}
            <i className="fa fa-instagram fa-2x "></i>
          </a>
          <a
            href="https://www.linkedin.com/company/techfest-sliet "
            target="_blank "
            rel="noopener noreferrer "
          >
            {" "}
            <i className="fa fa-linkedin-square fa-2x "></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg "
            target="_blank "
            rel="noopener noreferrer "
          >
            <i className="fa fa-youtube-play fa-2x "></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaPortal;
