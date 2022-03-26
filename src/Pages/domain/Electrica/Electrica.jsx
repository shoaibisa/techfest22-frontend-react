import React from 'react';
import './Electrica.css';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Electricaimg from '../../../../src/images/Domain/Electrica.webp';
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
            event={e}
            studentCoordinator={e.studentCoordinator}
          />
        ))}
    </div>
  );
};

export default Electrica;
