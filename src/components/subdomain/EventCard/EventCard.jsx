import React, { useContext, useState } from 'react';
import './EventCard.css';
import AuthContext from '../../../auth/authContext';
import ErrorModel from '../../UI/ErrorModel/ErrorModel';
import axios from 'axios';
import { localUrl, baseUrl } from '../../../API/api';
import { useNavigate } from 'react-router-dom';

const EventCard = props => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [errosMade, setErrosMade] = useState(); //undefined
  let dateEvent = props.endDate.split('T');
  let date = dateEvent[0].split('-');
  let time = dateEvent[1].split(':');
  let eventDateRegister = new Date(props.endDate);
  let getTodayDate = new Date();

  const onRegisterClick = async () => {
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

    if (eventDateRegister <= getTodayDate) {
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

    const fetchedPushEvent = await axios.post(
      `${baseUrl}/user/pushEvent`,
      props.event,
      {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      }
    );
    if (fetchedPushEvent.data.authError) {
      setErrosMade({
        title: 'Auth Error',
        message: 'Wrong user auth!',
      });
      authContext.logout();
      return;
    }
    // console.log(fetchedPushEvent);
    if (fetchedPushEvent.data.payError) {
      setErrosMade({
        title: fetchedPushEvent.data.title,
        message: fetchedPushEvent.data.message,
      });
      setTimeout(() => {
        navigate('/user/pay');
      }, 3000);
      return;
    }

    if (fetchedPushEvent.data.isError) {
      setErrosMade({
        title: fetchedPushEvent.data.title,
        message: fetchedPushEvent.data.message,
      });
    }
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

  const [showreg, setshowreg] = useState(false);

  return (
    <div className="Robo">
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {/* <div className="Robo__line"></div> */}
      <div className="Robozar__bottom d-flex container">
        <div className="robozar_main_container">
          <div className="robozar_container">
            <div
              className="robozar_left_container"
              style={{ backgroundImage: `url(${props.imgurl})` }}
            >
              <div className="robozar_left_content">
                <h1>{props.title}</h1>
                <br />
                <p>{props.subTitle}</p>
                <br />
                <div className="register__button__event">
                  {/* <button
                    onClick={onRegisterClick}
                    className="robozar_register_button"
                  >
                    Register Here
                  </button> */}
                  <button
                    onClick={onRegisterClick}
                    className="robozar_register_button"
                  >
                    Register Here
                  </button>
                  {/* 
              { showreg ?(<div className="addTeam">

                    <div className="close__team">
                    <i class="fa fa-close"></i>
                    </div>


              </div>):null

              } */}
                  <a
                    href={props.link}
                    rel="noreferrer"
                    target="_blank"
                    className="robozar_problem_statement_button"
                  >
                    Problem Statement
                  </a>
                </div>
              </div>
            </div>
            <div className="robozar_right_container">
              <div className="robozar_right_content">
                <h2> Prize Worth</h2>

                <h1>₹ {props.event.ePrizeWorth}</h1> <br />

                <p>
                  {' '}
                  <i className=" fa fa-light fa-calendar"></i>Register before{' '}
                  {`${date[2]}/ ${date[1]}`}
                </p>
                <p>
                  <i className="fa fa-clock-o"></i> {`${time[0]}:${time[1]}`}
                </p>
                <br />
                <p>Mode : {props.event.eventMode}</p>
                {props.studentCoordinator.map(s => (
                  <div key={s._id}>
                    <p className="robozar_right_content_eventcoordinator">
                      {s.coordinatorName}
                    </p>
                    <p>{s.coordinatorPhone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
