import React from 'react';
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
    axios.get(`${baseUrl}/event/getByDomain/robozar`).then(results => {
      setEdata(results.data.data);
      //   console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={pngwing}
          title="ROBOZAR"
          subTitle="Ignite your passion in automation for agriculture.
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
              event={e}
              link={e.driveLink}
              studentCoordinator={e.studentCoordinator}
            />
          ))}
      </div>
    </>
  );
};
export default Chemfor;
