import React from 'react';
import './Electrica.css';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Electricaimg from '../../../../src/images/Domain/Electrica.webp';
import domainimg from '../../../images/pravin.jpeg'
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

const Electrica = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/electrica`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);

  return (
    <div className="subdomain">
      <EventLogo
        imgsrc={Electricaimg}
        title="ELECTRICA"
        subTitle="The arena of all electrical/electronic/instrumentation engineers.
        Put the theory you learned into practical applications."
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
      <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
          <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Ashmi Raj</p>
          <p>7889299129</p>
        </div>
        <div className="domain__cordinator__img ms-3">
          <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Deepankar Jha
          </p>
          <p>9123120946</p>
        </div>
      </div>
    </div>
  );
};

export default Electrica;
