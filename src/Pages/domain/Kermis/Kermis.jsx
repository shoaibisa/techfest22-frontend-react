import React from 'react';
import './Kermis.jsx';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import pngwing from '../../../../src/images/Domain/pngwing 3.png';
//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

const Chemfor = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/kermis`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={pngwing}
          title="Kermis"
          subTitle="They are doing what we do, eventually might do it all.
        You build what can work for you, We bring this which can make you better at building. Do participate to build better."
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
              studentCoordinator={e.studentCoordinator}
            />
          ))}
      </div>
    </>
  );
};
export default Chemfor;
