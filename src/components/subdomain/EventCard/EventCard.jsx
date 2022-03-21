import React from "react";
import './EventCard.css';
import { NavLink } from "react-router-dom";
// import background_overlay_right from '../../../images/Domain/background-overlay-right.png';
// import bgoverlay_left from '../../../images/Domain/bgoverlay-left.png';
 import thisisengineering_raeng from '../../../images/Domain/thisisengineering-raeng-4w0XkDe2Ee8-unsplash\ 2.png';


const EventCard = (props) => {

    return (
        <div className="Robo">
            {/* <div className="Robo__line"></div> */}
            <div className="Robozar__bottom d-flex container">
                <div className="robozar_main_container">
                    <div className="robozar_container">
                        <div className="robozar_left_container"  style={{ backgroundImage: `url(${props.imgurl})` }}>
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

               
            </div>
        </div>

    );

}
export default EventCard;