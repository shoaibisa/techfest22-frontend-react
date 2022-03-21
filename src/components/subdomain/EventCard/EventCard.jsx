import React from "react";
import './EventCard.css';
import { NavLink } from "react-router-dom";
// import background_overlay_right from '../../../images/Domain/background-overlay-right.png';
// import bgoverlay_left from '../../../images/Domain/bgoverlay-left.png';
 import thisisengineering_raeng from '../../../images/Domain/thisisengineering-raeng-4w0XkDe2Ee8-unsplash\ 2.png';


const EventCard = (props) => {
    let  dateEvent= props.endDate.split('T');
     console.log(dateEvent);
     let date=dateEvent[0].split('-');
      let time=dateEvent[1].split(':')

    
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
                                <NavLink to="" className="robozar_register_button">Register Here</NavLink>
                                <a href={props.link} target="_blank" className="robozar_problem_statement_button">Problem Statement</a>
                            </div>
                        </div>
                        <div className="robozar_right_container">
                            <div className="robozar_right_content">
                                <h2> Prize Worth</h2>
                                <h1>{props.amount}</h1> <br />

                                <p> <i className=" fa fa-light fa-calendar"></i>Register before {`${date[1]}/ ${date[2]}`}</p>
                                <p><i class="fa fa-clock-o"></i> {`${time[0]}:${time[1]}`}</p>
                                <br />
                                {
                                    props.studentCoordinator.map((s)=>(
                                        <div key={s._id}>
                                        <p className="robozar_right_content_eventcoordinator">{s.coordinatorName}</p>
                                       <p>{s.coordinatorPhone}</p>
                                        </div>
                                        
                                    ))  
                                }
                               
                            
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    );

}
export default EventCard;