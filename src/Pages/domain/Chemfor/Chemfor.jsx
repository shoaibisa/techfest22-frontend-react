import React from "react";
import './Chemfor.css';
import EventCard from "../../../components/subdomain/EventCard/EventCard";
import EventLogo from "../../../components/subdomain/EventLogo/EventLogo";
import pngwing from '../../../../src/images/Domain/pngwing 3.png';
//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { localUrl } from '../../../API/api';
import ChemforContextProvider from './chemforContext';

const Chemfor = () => {
     const [eData,setEdata]= useState();
    useEffect(() => {
        axios.get(`${localUrl}/event/getByDomain/chemfor`).then(results => {
             setEdata(results.data.data);
           console.log(results.data.data);
        });
      }, []);
    return(
        <>
       <div className="subdomain">
        <EventLogo imgsrc={pngwing}
        title="Chemfor" subTitle="They are doing what we do, eventually might do it all.
        You build what can work for you, We bring this which can make you better at building. Do participate to build better."/>
        {
            eData &&  eData.map((e)=>(
            <EventCard key={e._id} title ={e.name} imgurl={`${localUrl}/profile/${e.photo}`}
           subTitle={e.description} amount="Rs.300" date={e.date} time="11.59 P.M" mobile1={e.studentCoordinator.map((p)=>(p.coordinatorPhone))} mobile2="+91XXXXXXXXXX"/>
            ))
        }
        
       
        </div>
        </>

    );
  
}
export default Chemfor;
