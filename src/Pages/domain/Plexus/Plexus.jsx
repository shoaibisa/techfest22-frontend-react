import React from 'react';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Plexus from '../../../../src/images/Domain/Plexus.webp';
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
    </>
  );
};
export default Chemfor;
