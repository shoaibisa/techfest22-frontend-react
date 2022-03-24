import React, { Component } from 'react';
import { baseUrl, localUrl } from '../../API/api';

const WorkshopCard = props => {
  console.log(props);
  return (
    <>
      <div className="Workshop__bttom__section d-flex container mt-5">
        <div className="Robozar__bottom__left p-2">
          <img
            src={`${baseUrl}/profile/${props.workshop.photo}`}
            alt="workshop"
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
              <h1>{props.workshop.workshopName}</h1>
              <div className="Robozar__bottom__middle__para">
                <p className="">{props.workshop.wsDesc}</p>
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
              {props.workshop.studentCoordinator.map(s => (
                <div className="Event__cordinator2 d-flex" key={s._id}>
                  <div className="Event__cordinator1__left ">
                    <p>{s.coordinatorName}</p>
                    <p>+91 {s.coordinatorPhone}</p>
                  </div>
                  <div className="Event__cordinator1__right">
                    <img src={`${baseUrl}/profile/${s.photo}`} alt="c" />
                  </div>
                </div>
              ))}
              {/* <div className="Event__cordinator2 d-flex">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopCard;
