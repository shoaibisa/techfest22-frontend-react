import React, { useContext, useState } from 'react';

import { Form } from 'react-bootstrap';
import CardUi from '../Card/CardUi';
import classes from './AddTeamMembers.module.css';
import ButtonUi from '../button/ButtonUi';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { baseUrl } from '../../../API/api';

import AuthContext from '../../../auth/authContext';

const BackdropBg = props => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = props => {
  const authContext = useContext(AuthContext);
  const [team, setTeam] = useState('');

  const AddMembersMail = () => {};

  const editTeam = () => {
    console.log('good');
  };

  return (
    <>
      <CardUi className={classes.modal}>
        <header className={classes.header}>
          <h2>Edit Team Member</h2>
        </header>
        <div style={{ color: 'black' }} className={classes.content}>
          <div>
            <h1>{props.team.name}</h1>
          </div>
        </div>
        <footer className={classes.actions}>
          <ButtonUi onBtnClick={props.onErrosClick}>Cancel</ButtonUi>
          <ButtonUi onBtnClick={editTeam}>Edit Team</ButtonUi>
        </footer>
      </CardUi>
    </>
  );
};

const EditTeamMember = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropBg />,
        document.getElementById('backdropbg-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onErrosClick={props.onErrosClick}
          team={props.teamList}
        />,
        document.getElementById('reg-event-popup')
      )}
    </>
  );
};

export default EditTeamMember;
