import React from "react";
import './EventCard.css';
import { NavLink } from "react-router-dom";
// import background_overlay_right from '../../../images/Domain/background-overlay-right.png';
// import bgoverlay_left from '../../../images/Domain/bgoverlay-left.png';
// import thisisengineering_raeng from '../../../images/Domain/thisisengineering-raeng-4w0XkDe2Ee8-unsplash 2.png';


const EventCard = (props) => {
    return (
        <div className="Robo ">
            {/* <div className="Robo__line"></div> */}
            <div className="Robozar__bottom d-flex container">
                <div className="robozar_main_container">
                    <div className="robozar_container">
                        <div className="robozar_left_container">
                            <div className="robozar_left_content">
                                <h1>{props.title}</h1>
                                <br />
                                <p>
                                    {props.subTitle}
                                </p>
                                <br />
                                <NavLink to="/" className="robozar_register_button">Register Here</NavLink>
                                <NavLink to="/" className="robozar_problem_statement_button">Problem Statement</NavLink>
                            </div>
                        </div>
                        <div className="robozar_right_container">
                            <div className="robozar_right_content">
                                <h2> Prize Worth</h2>
                                <h1>{props.amount}</h1> <br />

                                <p> <i className=" fa fa-light fa-calendar"></i>Register before {props.date}</p>
                                <p><i class="fa fa-clock-o"></i>{props.time}</p>
                                <br />
                                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                                <p>{props.mobile1}</p>
                                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                                <p>{props.mobile2}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="Robozar__bottom__left p-2">
                    <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
                    <div className="Robozar__bottom__left__calender mt-2 d-flex">
                        <i class=" fa fa-solid fa-calendar"></i>
                        <p>register before: <span>09/07</span></p>
                    </div>
                    <div className="Robozar__bottom__left__clock d-flex">
                        <i className="fa fa-clock-o"></i>
                        <p>11:59 pm</p>
                    </div>
                </div>

                <div className="Robozar__bottom__middle p-2">
                    <h1>Name of the event</h1>
                    <div className="Robozar__bottom__middle__para">
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni adipisci impedit modi velit! Cum velit quasi dicta, dolore laboriosam vero culpa ipsa, voluptatum iste accusantium incidunt aut odio, est explicabo?</p>
                    </div>
                    <div className="Robozar__bottom__middle__button d-flex">
                        <button>Register Now</button>
                        <button>view Schedule</button>
                    </div>
                </div>

                <div className="Robozar__bottom__right">
                    <div className="Robozar__bottom__right__top">

                        <div className="regitration__fee ">
                            <h3>Registration fee</h3>
                            <div className="d-flex regitration__fee__icon"> <i className="fa fa-inr"></i>
                                <h3>500</h3></div>
                        </div>
                    </div>
                    <div className="Event__cordinator d-flex">
                        <div className="Event__cordinator1 mx-3 d-flex">
                            <div className="Event__cordinator1__left p-1">
                                <p>Event cordinator</p>
                                <p>+9162XXXXXXXX</p>
                            </div>
                            <div className="Event__cordinator1__right">
                                <img src="https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=20&m=856599656&s=612x612&w=0&h=bIJ3aCa4vWB_-jFRTiPffYyUpw5uPpIHGDHEs4bjEqg=" alt="" />
                            </div>
                        </div>
                        <div className="Event__cordinator2 d-flex">
                            <div className="Event__cordinator1__left ">
                                <p>Event cordinator</p>
                                <p>+9162XXXXXXXX</p>
                            </div>
                            <div className="Event__cordinator1__right">
                                <img src="https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=20&m=856599656&s=612x612&w=0&h=bIJ3aCa4vWB_-jFRTiPffYyUpw5uPpIHGDHEs4bjEqg=" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );

}
export default EventCard;