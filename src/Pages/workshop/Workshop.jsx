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
        title="Robozar"
        subTitle="They are doing what we do, eventually might do it all.
            You build what can work for you, We bring this which can make you better at building. Do participate to build better."
      />
      <div className="Workshop__bttom__section d-flex container mt-5">
        <div className="Robozar__bottom__left p-2">
          <img
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt=""
          />
          <div className="mobileview__workshop__time">
            <div className="Robozar__bottom__left__calender mt-2 d-flex">
              <i class=" fa fa-solid mx-1 fa-calendar"></i>
              <p>
                register before: <span>09/07</span>
              </p>
            </div>
            <div className="Robozar__bottom__left__clock d-flex">
              <i className="fa fa-clock-o mx-1"></i>
              <p>11:59 pm</p>
            </div>
          </div>
        </div>
        <div className="workshop__right">
          <div className="workshop__right__top d-flex">
            <div className="Robozar__bottom__middle p-2">
              <h1>Name of the event</h1>
              <div className="Robozar__bottom__middle__para">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni adipisci impedit modi velit! Cum velit quasi dicta,
                  dolore laboriosam vero culpa ipsa, voluptatum iste accusantium
                  incidunt aut odio, est explicabo?
                </p>
              </div>
            </div>
            <div className="regitration__fee">
              <p>Registration fee</p>
              <div className="workshop__price d-flex">
                <i className="fa fa-inr mx-2 mt-1"></i>
                <h5>500</h5>
              </div>
            </div>
          </div>

          <div className="workshop__right__bottom d-flex">
            <div className="Robozar__bottom__middle__button d-flex">
              <button className="worksop__register__btn">Register Now</button>
              <button className="worksop__shedule__btn">view Schedule</button>
            </div>

            <div className="Event__cordinator d-flex">
              <div className="Event__cordinator1 mx-3 d-flex">
                <div className="Event__cordinator1__left p-1">
                  <p>Event cordinator</p>
                  <p>+9162XXXXXXXX</p>
                </div>
                <div className="Event__cordinator1__right">
                  <img
                    src="https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=20&m=856599656&s=612x612&w=0&h=bIJ3aCa4vWB_-jFRTiPffYyUpw5uPpIHGDHEs4bjEqg="
                    alt=""
                  />
                </div>
              </div>
              <div className="Event__cordinator2 d-flex">
                <div className="Event__cordinator1__left ">
                  <p>Event cordinator</p>
                  <p>+9162XXXXXXXX</p>
                </div>
                <div className="Event__cordinator1__right">
                  <img
                    src="https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=20&m=856599656&s=612x612&w=0&h=bIJ3aCa4vWB_-jFRTiPffYyUpw5uPpIHGDHEs4bjEqg="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {workshopData &&
        workshopData.map(w => <WorkshopCard key={w._id} workshop={w} />)}
    </div>
  );
};
export default Workshop;
