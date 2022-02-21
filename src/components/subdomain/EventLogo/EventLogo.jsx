import React from "react";
import'./EventLogo.css';


// import group_1 from '../../../images/Domain/Group (1).png';
// import group from '../../../images/Domain/Group.png';
import pngwing from '../../../images/Domain/pngwing 3.png';



const EventLogo = (props) =>{
    return(
        <div className="Robo">
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
    </div>

    );
}
export default EventLogo;