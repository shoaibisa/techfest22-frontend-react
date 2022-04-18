import React from 'react';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Mechanica from '../../../../src/images/Domain/Mechanica.webp';
import domainimg from '../../../images/pravin.jpeg'
//import { useContext } from 'react';
//import { ChemforContext } from './chemforContext';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';

const Chemfor = () => {
  const [eData, setEdata] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/event/getByDomain/mechanica`).then(results => {
      setEdata(results.data.data);
      // console.log(results.data.data);
    });
  }, []);
  return (
    <>
      <div className="subdomain">
        <EventLogo
          imgsrc={Mechanica}
          title="MECHANICA"
          subTitle="This domain welcomes all mechanical engineers to challenge their skills in CAD/CAM designing,
           details about fabrication, knowledge about trusses and fluid mechanics.
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
      {/* <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
          <img src={domainimg} alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Pravin Kumar</p>
          <p>6201783527</p>
        </div>
      </div> */}
    </>
  );
};

export default Chemfor;
