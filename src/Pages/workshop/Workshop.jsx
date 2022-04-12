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
        title="WORKSHOPS"
        subTitle="Learning is something to be enjoyed, not endured. With the Workshop lets you skip the lectures and do more of what you love."
      />
      
      {workshopData &&
        workshopData.map(w => <WorkshopCard key={w._id} workshop={w} />)}
    </div>
  );
};
export default Workshop;
