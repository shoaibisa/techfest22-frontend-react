import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import CardUi from '../Card/CardUi';
import classes from './AddTeamMembers.module.css';
import ButtonUi from '../button/ButtonUi';
import ReactDOM from 'react-dom';



const BackdropBg = props => {
  return <div className={classes.backdrop} onClick={props.onErrosClick} />;
};
const onSubmitBtnClick = async event => {
}

const ModalOverlay = props => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [memberEmail, setMemberEmail] = useState([]);
  const [Number, setNumber] = useState('');
  const getName = e => {
    setName(e.target.value);
  };

  const getEmail = e => {
    setEmail(e.target.value);
  };

  const getNumber = e => {
    setNumber(e.target.value);
  };

  const AddMembersMail = () =>{
    console.log("click");
 setMemberEmail(oldArray => [...oldArray, Email])
  }

  const AddForm = () => {
  
  }

  return (
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
                  onChange={getName}
                  value={Name}
                />
              </Form.Group>
              <div>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                  <div>Add Team Member email</div>
                  <div>  <i
                className="fa fa-user-plus"
                  aria-hidden="true"
                  onClick={AddMembersMail}
                  ></i></div>
                </div>
                
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ color: 'black', background: 'transparent' }}
                  size="sm"
                  type="text"
                  placeholder="Enter Team Memeber Email *"
                  onChange={getEmail}
                />
              </Form.Group>
             
                
             
          </div>
                  <h4>Member Mails</h4>
              {memberEmail && memberEmail.map(e=>(
                <p key={e}>{e}</p>
              ))}
                
              
              </Form>
        </div>
      </div>
      <footer className={classes.actions}>
        <ButtonUi onBtnClick={props.onErrosClick}>OK</ButtonUi>
      </footer>
    </CardUi>
  );
};

const AddTeamMembers = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropBg onErrosClick={props.onErrosClick} />,
        document.getElementById('backdropbg-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          
          onErrosClick={props.onErrosClick}
        />,
        document.getElementById('reg-event-popup')
      )}
    </>
  );
};

export default AddTeamMembers;
