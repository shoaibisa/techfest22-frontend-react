import React, { useState, useEffect } from 'react';
import './Workshop.css';
import EventLogo from '../../components/subdomain/EventLogo/EventLogo';
import Workshopimg from '../../images/Workshop.png';
import WorkshopCard from '../../components/workshop/WorkshopCard';
import axios from 'axios';
import { localUrl, baseUrl } from '../../API/api';

const Workshop = props => {
  const [workshopData, setWorkshopData] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/workshop/all`).then(results => {
      //   console.log();
      setWorkshopData(results.data.data);
    });

    return () => {};
  }, []);

  return (
    <div>
      <EventLogo
        imgsrc={Workshopimg}
        title="WORKSHOP"
        subTitle="They are doing what we do, eventually might do it all.
            You build what can work for you, We bring this which can make you better at building. Do participate to build better."
      />
      
      {workshopData &&
        workshopData.map(w => <WorkshopCard key={w._id} workshop={w} />)}
    </div>
  );
};
export default Workshop;
