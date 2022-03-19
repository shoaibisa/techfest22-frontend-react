import React from "react";
import'./EventLogo.css';


// import group_1 from '../../../images/Domain/Group (1).png';
// import group from '../../../images/Domain/Group.png';
// import pngwing from '../../../images/Domain/pngwing 3.png';



const EventLogo = (props) =>{
    return(
        <div className="Robo">
    <div className="Robozar">

    <div className="circle">
        <span>
        </span>
        <img src={props.imgsrc} alt=""
            />
        <div className="Robozar__content"
            >
            <h1>{props.title}</h1>
            <h6>Explore Events</h6>
            <p>{props.subTitle}</p>
        </div>
    </div>
    
    </div>
    </div>

    );
}
export default EventLogo;