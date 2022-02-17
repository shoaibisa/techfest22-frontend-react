import React from "react";
import './Chemfor.css';
import EventCard from "../../../components/subdomain/EventCard/EventCard";
import EventLogo from "../../../components/subdomain/EventLogo/EventLogo";


const Chemfor = () => {
    return(
        <div className="subdomain">
        <EventLogo/>
        <EventCard/>
        <EventCard/>
        </div>
    );
  
}
export default Chemfor;
