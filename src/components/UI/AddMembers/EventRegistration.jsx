import React, { useContext, useState } from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import CardUi from '../Card/CardUi';
import classes from './AddTeamMembers.module.css';
import ButtonUi from '../button/ButtonUi';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { baseUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';
import { useNavigate } from 'react-router-dom';

const BackdropBg = props => {
  return <div className={classes.backdrop} />;
};
const onSubmitBtnClick = async event => {};

const ModalOverlay = props => {
  const authContext = useContext(AuthContext);
  //   const [team, setTeam] = useState();
  const [selectedTeam, setSelectedTeam] = useState('');
  const navigation = useNavigate();

  const eventRegister = async () => {
    if (selectedTeam === '') {
      return alert('Please select team!');
    }
    const data = {
      event: props.event._id,
      eventMode: props.event.eventMode,
      teamId: selectedTeam,
    };
    const results = await axios.post(`${baseUrl}/user/pushEvent`, data, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });

    // console.log(results.data);
    if (results.data.isError) {
      return alert(results.data.message);
    }

    if (!results.data.isError) {
      navigation('/dashboard');
    }
  };

  return (
    <>
      <CardUi className={classes.modal}>
        <header className={classes.header}>
          <h2>Select Team</h2>
        </header>
        <div style={{ color: 'black' }} className={classes.content}>
          <div>
            <Form onSubmit={onSubmitBtnClick}>
              <FormCheck
                type="radio"
                id={`default-radio`}
                label={`As Individual`}
                value="self"
                name="radioEvent"
                onChange={e => setSelectedTeam(e.target.value)}
              />
                          <small style={{fontSize:'12px',color:'Green',fontWeight:'bold' }}>(If you want to participate in team  first create team from deshboard)</small>

              {!props.onLoadTeam.teams || props.onLoadTeam.teams.length === 0
                ? ''
                : props.onLoadTeam.teams.map(team => (
                    <FormCheck
                      type="radio"
                      id={`${team._id}`}
                      label={`${team.name}`}
                      key={team._id}
                      name="radioEvent"
                      value={team._id}
                      onChange={e => setSelectedTeam(e.target.value)}
                    />
                  ))}
            </Form>
          </div>
        </div>
        <footer className={classes.actions}>
          <ButtonUi onBtnClick={props.onErrosClick}>Cancel</ButtonUi>
          <ButtonUi onBtnClick={eventRegister}>Register</ButtonUi>
        </footer>
      </CardUi>
    </>
  );
};

const EventRegistration = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropBg />,
        document.getElementById('backdropbg-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onErrosClick={props.onErrosClick}
          onTeamListAdd={props.onTeamListAdd}
          onLoadTeam={props.onLoadTeam}
          event={props.event}
        />,
        document.getElementById('reg-event-popup')
      )}
    </>
  );
};

export default EventRegistration;
