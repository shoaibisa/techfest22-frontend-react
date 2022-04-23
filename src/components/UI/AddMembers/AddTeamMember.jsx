import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
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
const onSubmitBtnClick = async event => {};

const ModalOverlay = props => {
  const authContext = useContext(AuthContext);
  const [teamName, setTeamName] = useState('');
  const [memberEmails, setMemberEmails] = useState([]);
  const [memberMail, setMemberMail] = useState('');
  const [eventType, setEtype] = useState('');

  const [errosMade, setErrosMade] = useState('');

  const getTeamName = e => {
    setTeamName(e.target.value);
  };

  const getEmail = e => {
    setMemberMail(e.target.value);
  };

  const getEtype = e => {
    setEtype(e.target.value.toLowerCase());
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const AddMembersMail = () => {
    //return console.log(eventType);
    if (!teamName) {
      return alert('Please add team name');
    }
    if (!eventType) {
      return alert('Please select event mode');
    }

    if (!memberMail) {
      return alert('add member!');
    }
    const existMail = memberEmails.findIndex(e => e === memberMail);
    if (existMail !== -1) {
      return alert('member already added!');
    }
    const data = {
      memberMail: memberMail,
      eventMode: eventType,
      teamName: teamName,
    };
    axios
      .post(`${baseUrl}/team/addTeamMemberMail`, data, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        if (results.data.isError) {
          return alert(results.data.message);
          // setErrosMade({
          //   title: results.data.title,
          //   message: ,
          // });
        }

        setMemberEmails(oldArray => [...oldArray, memberMail]);
      });
    // setMemberEmails(oldArray => [...oldArray, memberMail]);
  };

  const createTeam = () => {
    //  return console.log(memberEmails.length);
    if (!teamName || !eventType) {
      return alert('Invalid input fields');
    }
    if (memberEmails.length === 0) {
      return alert('Add Your Team Member');
    }
    const data = {
      members: memberEmails,
      eventType: eventType,
      teamName: teamName,
    };
    axios
      .post(`${baseUrl}/team/createTeam`, data, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        if (results.data.isError) {
          return alert(results.data.message);
        }
        props.onErrosClick();
        props.onTeamListAdd(results.data.team);
      });
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
      <CardUi className={classes.modal}>
        <header className={classes.header}>
          <h2>Add Team Member</h2>
        </header>
        <div style={{ color: 'black' }} className={classes.content}>
          <div>
            <Form onSubmit={onSubmitBtnClick}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black' }}>Team Name</Form.Label>
                <Form.Control
                  style={{ color: 'black', background: 'transparent' }}
                  size="sm"
                  type="text"
                  placeholder="Enter Team Name *"
                  onChange={getTeamName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'black' }}>
                  Event Mode Select
                </Form.Label>
                <Form.Select
                  style={{ color: 'black', background: 'transparent' }}
                  aria-label="Default select example"
                  defaultValue=""
                  onChange={getEtype}
                >
                  <option style={{ color: 'black' }} disabled value="">
                    ---select---
                  </option>
                  <option style={{ color: 'black' }} value="online">
                    Online
                  </option>
                  <option style={{ color: 'black' }} value="offline">
                    Offline
                  </option>
                </Form.Select>
              </Form.Group>
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>Add Team Member email</div>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Form.Group className="mb-3" style={{ width: '60%' }}>
                    <Form.Control
                      style={{ color: 'black', background: 'transparent' }}
                      size="sm"
                      type="email"
                      placeholder="Enter Team Member Email *"
                      onChange={getEmail}
                    />
                  </Form.Group>
                  <div>
                    {/*                     
                    <i
                      className="fa fa-user-plus"
                      aria-hidden="true"
                      title="Add team member mail"
                    ></i> */}
                    <ButtonUi
                      style={{ cursor: 'pointer' }}
                      onBtnClick={AddMembersMail}
                    >
                      Add Email
                    </ButtonUi>
                  </div>
                </div>
              </div>
              <h4> Your Member Mails</h4>
              {memberEmails && memberEmails.map(e => <p key={e}>{e}</p>)}
            </Form>
          </div>
        </div>
        <footer className={classes.actions}>
          <ButtonUi onBtnClick={props.onErrosClick}>Cancel</ButtonUi>
          <ButtonUi onBtnClick={createTeam}>Create Team</ButtonUi>
        </footer>
      </CardUi>
    </>
  );
};

const AddTeamMembers = props => {
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
        />,
        document.getElementById('reg-event-popup')
      )}
    </>
  );
};

export default AddTeamMembers;
