import React from "react";
import './Home.css'
import homepage_gif from '../../images/hompage-gif-logo.webp';
import homepage_gif_mobile from '../../images/hompage-gif-mobile.webm';
const Home = () => {
  

    return (
        <>
        <div>
         <div className="home__video py-5">
            <video className="homepage_gif" onclick="myFunction()" style={ {width:"100%",
    overflow:"hidden"}} loop="loop" autoplay muted="true" preload="auto">
                <source src={homepage_gif} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <video className="homepage_gif_mobile" onclick="myFunction()" width="100%" height="100%" loop="loop" autoplay muted="true" preload="auto">
                <source src={homepage_gif_mobile} type="video/webm"/>
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
                        <img src="./images/hompage-gif-logo.webp" className="rounded Logo_image" alt=""/>
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
                        <img className="workShop_Animation" src="./images/Domains Webp Home.webp" alt=""/>
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
                                    <img src="images/BUilding.svg" alt="" srcset=""/>
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
                                    <img src="images/Footfall.svg" alt="" srcset=""/>
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
                                    <img src="images/Dollar Svg.svg" alt="" srcset=""/>
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
                                <img src="./images/sponser_images/Group 3.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 4.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 11.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 12.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 13.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 17.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 18.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 19.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 23.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 24.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 25.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 26.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 27.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 28.png " alt=" " srcset=" "/>
                            </a>
                        </div>
                        <div className="Gallery_item ">
                            <a href="# ">
                                <img src="./images/sponser_images/Group 29.png " alt=" " srcset=" "/>
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