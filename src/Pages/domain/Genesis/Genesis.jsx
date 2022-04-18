import React from 'react'
import EventCard from '../../../components/subdomain/EventCard/EventCard'
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo'
import Genesisimg from '../../../images/Domain/Genesis.webp'
import domainimg from '../../../images/pravin.jpeg'
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

function Genesis() {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/Genesis`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);
  return (
    <div>

      <div className="subdomain">
        <EventLogo
          imgsrc={Genesisimg}
          title="GENESIS"
          subTitle="Begin your journey of a thousand miles by taking one step to represent yourself and your idea."
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
      {/* <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
          <img src={domainimg} alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Pravin Kumar</p>
          <p>6201783527</p>
        </div>
      </div> */}
    </div>
  )
}

export default Genesis