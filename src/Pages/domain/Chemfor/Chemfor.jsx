import React from 'react';
import './Chemfor.css';

import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Chemforimg from '../../../../src/images/Domain/Chemfor.webp';

//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

const Chemfor = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/chemfor`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={Chemforimg}
          title="Chemfor"
          subTitle="They are doing what we do, eventually might do it all.
        You build what can work for you, We bring this which can make you better at building. Do participate to build better."
        />
        {eData &&
          eData.map(e => (
            <EventCard
              key={e._id}
              title={e.name}
              eId={e._id}
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
