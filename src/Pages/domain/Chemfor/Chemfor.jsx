import React from "react";
import './Chemfor.css';
import EventCard from "../../../components/subdomain/EventCard/EventCard";
import EventLogo from "../../../components/subdomain/EventLogo/EventLogo";
import pngwing from '../../../../src/images/Domain/pngwing 3.png';

const Chemfor = () => {
    
    return(
        <div className="subdomain">
        <EventLogo imgsrc={pngwing}
        title="Robozar" subTitle="They are doing what we do, eventually might do it all.
        You build what can work for you, We bring this which can make you better at building. Do participate to build better."/>
        <EventCard title ="Robozar"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui cumque quae accusantium ducimus iusto fugit officiis ad, libero animi aliquid! Qui minus nemo iure, dicta totam provident aliquam ducimus." amount="Rs. 50,000" date="11/03" time="11.59 P.M" mobile1="
        +91XXXXXXXXXX" mobile2="+91XXXXXXXXXX"/>
       
        <EventCard title ="Robozar"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui cumque quae accusantium ducimus iusto fugit officiis ad, libero animi aliquid! Qui minus nemo iure, dicta totam provident aliquam ducimus." amount="Rs. 50,000" date="11/03" time="11.59 P.M" mobile1="
        +91XXXXXXXXXX" mobile2="+91XXXXXXXXXX"/>
        </div>
    );
  
}
export default Chemfor;
