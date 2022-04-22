import React from 'react';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Plexus from '../../../../src/images/Domain/Plexus.webp';
import domainimg from '../../../images/pravin.jpeg'
//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { localUrl, baseUrl } from '../../../API/api';

const Chemfor = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/plexus`).then(results => {
      setEdata(results.data.data);
      console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={Plexus}
          title="PLEXUS"
          subTitle="This domain is designed for all the computerfiles who are trying a hand in any of these like ML,
           Competitive programming, web development, and even for all the young minds with only knowledge in fundamental of the computer."
        />
        {eData &&
          eData.map(e => (
            <EventCard
              key={e._id}
              title={e.name}
              event={e}
              imgurl={`${baseUrl}/profile/${e.photo}`}
              subTitle={e.description}
              amount="Rs.300"
              endDate={e.endDate}
              link={e.driveLink}
              studentCoordinator={e.studentCoordinator}
            />
          ))}
      </div>
       <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
        <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Ayush Anand</p>
          <p>8005188360</p>
        </div>
      </div> 
    </>
  );
};
export default Chemfor;
