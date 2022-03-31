import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../../API/api';
import passwordreset from '../../images/ForgotImage/password-reset 1.png';
import vector from '../../images/ForgotImage/Vector Logo.png';
import './Forgot.css';

function Forgot() {
  const [email, setEmail] = useState();

  const onSubmitBtnClick = async () => {
    await axios
      .post(`${baseUrl}/forgot-password`, { email: email })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
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
