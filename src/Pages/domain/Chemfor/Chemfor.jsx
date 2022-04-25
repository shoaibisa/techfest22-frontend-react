import React from 'react';
import './Chemfor.css';
import domainimg from '../../../images/pravin.jpeg'

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
          title="CHEMFOR"
          subTitle="Are you a laboratory expert or have an interest in the development of a product. This Domain is for you with a platform to attempt and make the best use of your knowledge in the food and chemical industry. 
          It will help India become healthy and pollution free through projects on food development and events based on environment safety."
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
       <div className="domain__cordinator d-flex">
        <div className="domain__cordinator__img">
          <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Md. Dilkash</p>
          <p>8264993946</p>
        </div>
        <div className="domain__cordinator__img ms-3">
          <img src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png" alt="" />
          <p className='mt-2'>Domain Cordinator</p>
          <p>Shailesh Mishra</p>
          <p>7260870837</p>
        </div>
      </div> 
    </>
  );
};

export default Chemfor;
