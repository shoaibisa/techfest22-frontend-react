import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, localUrl } from '../../API/api';
import AuthContext from '../../auth/authContext';
import ErrorModel from '../UI/ErrorModel/ErrorModel';

const WorkshopCard = props => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [errosMade, setErrosMade] = useState(); //undefined
  let dateWorkshop = props.workshop.endDate.split('T');
  let date = dateWorkshop[0].split('-');
  let time = dateWorkshop[1].split(':');
  let workshopDateRegister = new Date(props.workshop.endDate);
  let getTodayDate = new Date();
  const workshopData = {
    workshop: props.workshop,
  };
  const onClickRegister = async () => {
    // return setErrosMade({
    //   title: 'Open soon',
    //   message: 'Registration will open soon!',
    // });
    if (!authContext.isUserLoggedIn) {
      setErrosMade({
        title: 'Auth Error',
        message: 'Plz Login First!',
      });
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
      return;
    }
    if (workshopDateRegister <= getTodayDate) {
      setErrosMade({
        title: 'Registration Time',
        message: 'Time of the register is over!',
      });
      return;
    }
    const fetchUser = await axios.get(`${baseUrl}/user/getUserById`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    //  console.log(fetchUser);
    if (
      fetchUser.status !== 200 ||
      (fetchUser.status !== 201 && fetchUser.data.isError)
    ) {
      setErrosMade({
        title: 'Auth Error',
        message: 'Wrong user auth!',
      });
      authContext.logout();
      return;
    }

    const fetchedPushWorkshop = await axios.post(
      `${baseUrl}/user/pushWorkshop`,
      workshopData,
      {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      }
    );
    if (fetchedPushWorkshop.data.authError) {
      setErrosMade({
        title: 'Auth Error',
        message: 'Wrong user auth!',
      });
      authContext.logout();
      return;
    }
    // console.log(fetchedPushWorkshop);
    // if (fetchedPushWorkshop.data.payError) {
    //   setErrosMade({
    //     title: fetchedPushWorkshop.data.title,
    //     message: fetchedPushWorkshop.data.message,
    //   });
    //   setTimeout(() => {
    //     navigate('/user/pay');
    //   }, 3000);
    //   return;
    // }

    if (fetchedPushWorkshop.data.isError) {
      setErrosMade({
        title: fetchedPushWorkshop.data.title,
        message: fetchedPushWorkshop.data.message,
      });
    }
    setErrosMade({
      title: fetchedPushWorkshop.data.title,
      message: fetchedPushWorkshop.data.message,
    });
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const onMoreInfo = () => {
    window.location.href = props.workshop.wDriveLink;
  };

  return (
    <>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
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
                register before:
                <span>
                  {date[2]}/{date[1]}
                </span>
              </p>
            </div>
            <div className="Robozar__bottom__left__clock d-flex">
              <i className="fa fa-clock-o mx-1"></i>
              <p>{`${time[0]}:${time[1]}`}</p>
            </div>
          </div>
        </div>
        <div className="workshop__right">
          <div className="workshop__right__top d-flex">
            <div className="Workshop__bottom__middle p-2">
              <h1>{props.workshop.workshopName}</h1>
              <div className="Workshop__bottom__middle__para">
                <p className="">{props.workshop.wsDesc}</p>
              </div>
            </div>
            {/* <div className="regitration__fee">
              <p>Registration fee</p>
              <div className="workshop__price d-flex">
                <i className="fa fa-inr mx-2 mt-1"></i>
                <h5>500</h5>
              </div>
            </div> */}
            <div className="regitration__fee d-flex">
              <p>Workshop Mode:-</p>
              <div className="workshop__price">
                <h5>{props.workshop.workshopMode}</h5>
              </div>
            </div>
          </div>

          <div className="workshop__right__bottom">
            <div className="Workshop__bottom__middle__button d-flex">
              <button
                onClick={onClickRegister}
                className="worksop__register__btn"
              >
                Register Now
              </button>
              <button className="worksop__shedule__btn" onClick={onMoreInfo}>
                More Info
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopCard;
