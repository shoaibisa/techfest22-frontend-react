import React, { useContext, useState } from 'react';
import './EventCard.css';
import AuthContext from '../../../auth/authContext';
import ErrorModel from '../../UI/ErrorModel/ErrorModel';
import axios from 'axios';
import { localUrl, baseUrl } from '../../../API/api';
// import background_overlay_right from '../../../images/Domain/background-overlay-right.png';
// import bgoverlay_left from '../../../images/Domain/bgoverlay-left.png';

const EventCard = props => {
  const authContext = useContext(AuthContext);
  const [errosMade, setErrosMade] = useState(); //undefined
  const [user, setUser] = useState(null);
  let dateEvent = props.endDate.split('T');
  let date = dateEvent[0].split('-');
  let time = dateEvent[1].split(':');

  const onRegisterClick = async () => {
    if (!authContext.isUserLoggedIn) {
      setErrosMade({
        title: 'Auth Error',
        message: 'Plz Login First!',
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
      return;
    }
    setUser(fetchUser.data.user);

    if (!fetchUser.data.user.hapPaidEntry) {
      setErrosMade({
        title: 'Payment',
        message: 'Plz pay first!',
      });
      return;
    }
    //axios.post(``)
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

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
                <button
                  onClick={onRegisterClick}
                  className="robozar_register_button"
                >
                  Register Here
                </button>
                <a
                  href={props.link}
                  target="_blank"
                  className="robozar_problem_statement_button"
                >
                  Problem Statement
                </a>
              </div>
            </div>
            <div className="robozar_right_container">
              <div className="robozar_right_content">
                <h2> Prize Worth</h2>
                <h1>{props.amount}</h1> <br />
                <p>
                  {' '}
                  <i className=" fa fa-light fa-calendar"></i>Register before{' '}
                  {`${date[1]}/ ${date[2]}`}
                </p>
                <p>
                  <i class="fa fa-clock-o"></i> {`${time[0]}:${time[1]}`}
                </p>
                <br />
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
