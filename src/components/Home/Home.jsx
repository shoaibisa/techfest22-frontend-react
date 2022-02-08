import React from "react";
import './Home.css'


//images import
import homepage_gif from '../../images/hompage-gif-logo.webp';
import homepage_gif_mobile_vid from '../../images/hompage-gif-mobile.webm';
import homapage_gif_vid from '../../images/homepage--gif.webm'
import workshop_home_png from '../../images/Png-Workshops-home-Webp.webp'
import building from '../../images/BUilding.svg'
import footfall from '../../images/Footfall.svg'
import dollar_svg from '../../images/Dollar-Svg.svg'
import sponser_img3 from '../../images/sponser_images/Group 3.png'
import sponser_img4 from '../../images/sponser_images/Group 4.png'
import sponser_img11 from '../../images/sponser_images/Group 11.png'
import sponser_img12 from '../../images/sponser_images/Group 12.png'
import sponser_img13 from '../../images/sponser_images/Group 13.png'
import sponser_img17 from '../../images/sponser_images/Group 17.png'
import sponser_img18 from '../../images/sponser_images/Group 18.png'
import sponser_img19 from '../../images/sponser_images/Group 19.png'
import sponser_img23 from '../../images/sponser_images/Group 23.png'
import sponser_img24 from '../../images/sponser_images/Group 24.png'
import sponser_img25 from '../../images/sponser_images/Group 25.png'
import sponser_img26 from '../../images/sponser_images/Group 26.png'
import sponser_img27 from '../../images/sponser_images/Group 27.png'
import sponser_img28 from '../../images/sponser_images/Group 28.png'
import sponser_img29 from '../../images/sponser_images/Group 29.png'




const Home = () => {
  

    return (
        <>
        <div>
         <div className="home__video py-5">
            <video className="homepage_gif" onclick="myFunction()" style={ {width:"100%",
    overflow:"hidden"}} loop="loop" autoplay muted="true" preload="auto">
                <source src={homapage_gif_vid} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <video className="homepage_gif_mobile" onclick="myFunction()" width="100%" height="100%" loop="loop" autoplay muted="true" preload="auto">
                <source src={homepage_gif_mobile_vid} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <div className="scroll d-flex" onclick="myFunction()">
                <div className="scroll__text">
                    <h6>Scroll Down</h6>
                </div>
                <div className="scroll__goto">
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>
        </div>
        <div className="Home__background">
            <div className="container-fluid top-0 logo_section text-light py-5">
                <div className="logo_section_content">
                    <div className="text-center rounded py-5 logo_section__image">
                        <img src={homepage_gif} className="rounded Logo_image" alt=""/>
                    </div>

                    <div className="text-center py-2  logo_section__about">
                        <div className=" text-center logo_section_about__heading">
                            <h2 className="">The Ultimate Leap to Agri-Tech</h2>
                        </div>
                        <div className="text-center logo_section_about__paragraph">
                            <div className="">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto et dolorem sapiente as pernatur dolore autem culpa deleniti praesentium deserunt expedita eos reprehenderit dignissimos voluptatibus, omnis
                                            fuga non facilis possimus.
                                        </p>
                                    </blockquote>

                                </figure>
                            </div>

                            <div className=""></div>

                        </div>
                    </div>
                    <div className="text-center logo_section__button_section">
                        <button type="button" className="btn btn-green mx-2 pr-5 pl-5 btn-lg logo_section_button_section__Sign_Up">Sign Up
                            Now</button>
                        <button type="button" className="btn text-light btn-none pr-5 pl-5 mx-2 btn-lg  logo_section_button_section__About_Us">About
                            Us</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Scroll Down Button Start--> */}
        <div className="bottomSection">

            <div className="cards-container">
                <div className="cards-container_card1">
                    <div className="cards-container_card1_image ">
                        <img className="workShop_Animation " src="./images/Png Workshops home Webp.webp" alt=""/>
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
                <div className="cards-container_card2 mt-4">
                    <div className="cards-container_card2_image">
                        <img className="workShop_Animation" src={workshop_home_png} alt=""/>
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


            <div className="container__college__people__money1 mt-5 mb-5 cards-container ">
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
                                    <b>Footfall during <br/> techFEST'21</b>
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

            <div className="container sponsors">
                <div className="Sponsors_heading ">
                    <h1>Sponsors</h1>
                </div>
                <div className="Sponsors__container ">
                    <div className="owl-carousel owl-theme " id="owl-carousel ">
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img3} alt=" " />
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img4} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img11} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img12} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img13} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img17} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img18} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img19} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img23} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img24} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img25} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img26} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img27} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img28} alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src={sponser_img29} alt=" " srcset=" "/>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>

    <div className="footer ">
        <div className="social-icons ">
            <a href="https://www.facebook.com/techfestsliet/ " target="_blank " rel="noopener noreferrer "> <i className="fa fa-facebook-square fa-2x "> </i></a>
            <a href="https://twitter.com/techfestsliet " target="_blank " rel="noopener noreferrer "> <i className="fa fa-twitter-square fa-2x "></i></a>
            <a href="https://instagram.com/techfestsliet_ " target="_blank " rel="noopener noreferrer "> <i className="fa fa-instagram fa-2x "></i></a>
            <a href="https://www.linkedin.com/company/techfest-sliet " target="_blank " rel="noopener noreferrer "> <i className="fa fa-linkedin-square fa-2x "></i></a>
            <a href="https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg " target="_blank " rel="noopener noreferrer "> <i className="fa fa-youtube-play fa-2x "></i></a>
        </div>
        <div className="rotate-translate"> </div>
        <div className="translate-rotate"></div>
    </div>
        
   
           
        </>
    );
}

export default Home;