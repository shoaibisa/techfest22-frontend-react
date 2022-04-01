import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../../API/api';
import passwordreset from '../../images/ForgotImage/password-reset 1.png';
// import vector from '../../images/ForgotImage/Vector Logo.png';
import './Forgot.css';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';

function Forgot() {
  const [email, setEmail] = useState();
  const [errosMade, setErrosMade] = useState(); //undefined
  const onSubmitBtnClick = async () => {
    await axios
      .post(`${baseUrl}/forgot-password`, { email: email })
      .then(res => {
        console.log(res);
        setErrosMade({
          title: res.data.title,
          message: res.data.message,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

  return (
    <div>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      <div className="forgot__password">
        <img src={passwordreset} alt="" />
        <h3>Forgot Password!</h3>
        <p>
          No worries! it happens, enter your E-mail and we'll send you a reset
          link.
        </p>
        <div className="form">
          <input
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            required
            className="form-input"
            placeholder="Enter your E-mail"
          />
        </div>
        <button className="send__request" onClick={onSubmitBtnClick}>
          Send Request
        </button>
      </div>
    </div>
  );
}

export default Forgot;
