import React from 'react';
import './Kermis.jsx';
import EventCard from '../../../components/subdomain/EventCard/EventCard';
import EventLogo from '../../../components/subdomain/EventLogo/EventLogo';
import Kermis from '../../../../src/images/Domain/Kermis.webp';
import domainimg from '../../../images/pravin.jpeg';

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
    <EventLogo
          imgsrc={Kermis}
          title="KERMIS"

          subTitle="The mega domain of Kermis focuses on non-tech events including gaming events. Aiming to promote the era of e-sports among the building students. Events like BGMI, Mini Militia and Valorant"

        />
      <div className="subdomain">
        
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
       <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
        <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Utsah Baghel</p>
          <p>9399495104</p>
        </div>
      </div> 
    </>
  );
};
export default Chemfor;
