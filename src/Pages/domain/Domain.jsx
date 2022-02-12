import React from "react";
import './Domain.css';
import { NavLink } from "react-router-dom";
import background_overlay_right from '../../images/Domain/background-overlay-right.png';
import bgoverlay_left from '../../images/Domain/bgoverlay-left.png';
import group_1 from '../../images/Domain/Group (1).png';
import group from '../../images/Domain/Group.png';
import pngwing from '../../images/Domain/pngwing 3.png';
import thisisengineering_raeng from '../../images/Domain/thisisengineering-raeng-4w0XkDe2Ee8-unsplash 2.png';

const Domain = () => {
    return(
        <div className="bod">
         <div className="Robozar">

<div className="circle">
    <span>
    </span>
    <img src={pngwing} alt=""
        />
    <div className="Robozar__content"
        >
        <h1>ROBOZAR</h1>
        <h4>Explore Events</h4>
        <p>They are doing what we do, eventually might do it all.
            You build what can work for you, We bring this which can make you better at building. Do participate to build better.
            </p>
    </div>
</div>

</div>

<div className="Robozar__bottom">
<div className="robozar_main_container">
    <div className="robozar_container">
        <div className="robozar_left_container">
            <div className="robozar_left_content">
                <h1>Robozar</h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus qui cumque quae accusantium ducimus iusto
                    fugit officiis ad, libero animi aliquid! Qui minus nemo iure,
                    dicta totam provident aliquam ducimus.
                </p>
                <br/>
                <NavLink to="/" className="robozar_register_button">Register Here</NavLink>
                <NavLink to="/" className="robozar_problem_statement_button">Problem Statement</NavLink>
            </div>
        </div>
        <div className="robozar_right_container">
            <div className="robozar_right_content">
                <h2> Prize Worth</h2>
                <h1>Rs. 50,000</h1>
                <br/>
                <p>Register before 11/03</p>
                <p>11:59 P.M.</p>
                <br/>
                <br/>
                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                <p>+91XXXXXXXXXX</p>
                <br/>
                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                <p>+91XXXXXXXXXX</p>
            </div>
        </div>
    </div>
</div>



<div className="robozar_main_container">
    <div className="robozar_container">
        <div className="robozar_left_container">
            <div className="robozar_left_content">
                <h1>Name of the event</h1>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus qui cumque quae accusantium ducimus iusto
                    fugit officiis ad, libero animi aliquid! Qui minus nemo iure,
                    dicta totam provident aliquam ducimus.
                </p>
                <br/>
                <NavLink to="/" className="robozar_register_button">Register Here</NavLink>
                <NavLink to="/" className="robozar_problem_statement_button">Problem Statement</NavLink>
            </div>
        </div>
        <div className="robozar_right_container">
            <div className="robozar_right_content">
                <h2> Prize Worth</h2>
                <h1>Rs. 50,000</h1>
                <br/>
                <p>Register before 11/03</p>
                <p>11:59 P.M.</p>
                <br/>
                <br/>
                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                <p>+91XXXXXXXXXX</p>
                <br/>
                <p className="robozar_right_content_eventcoordinator">Event Coordinator</p>
                <p>+91XXXXXXXXXX</p>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
    );
}
export default Domain;