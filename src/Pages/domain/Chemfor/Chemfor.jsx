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

const Chemfor = ({chemfor}) => {

   console.log(chemfor);
    return(
        <ChemforContextProvider>
        <Chemfor chemfor={Chemfor}/>
        </ChemforContextProvider>

    );
  
}
export default Chemfor;
