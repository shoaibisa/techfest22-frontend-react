import React from 'react';
import './Karyarachna.css';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Karyarachna from '../../../../src/images/Domain/Karyarachna.webp';

//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

const Chemfor = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/karyarachna`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={Karyarachna}
          title="KARYARACHNA"
          subTitle="This amazing exhibit is an opportunity to showcase everything from models of aircraft and vehicles to exquisite art.
           This is the best platform to forge your creativity in the cut-throat competition…or simply kick-back and enjoy the extravaganza.
          "
        />
        {eData &&
          eData.map(e => (
            <EventCard
              key={e._id}
              eId={e._id}
              title={e.name}
              imgurl={`${baseUrl}/profile/${e.photo}`}
              subTitle={e.description}
              amount="Rs.300"
              endDate={e.endDate}
              link={e.driveLink}
              event={e}
              studentCoordinator={e.studentCoordinator}
            />
          ))}
      </div>
    </>
  );
};
export default Chemfor;
