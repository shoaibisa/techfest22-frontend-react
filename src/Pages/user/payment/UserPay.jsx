//import React, { useState } from 'react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { localUrl } from '../../../API/api';
import {useNavigate} from 'react-router-dom';



const UserPay = () => {

  useEffect(() => {});

  const payPro = () => {
    axios.post(`${localUrl}/pay/user`).then(results => {
      console.log(results);
      // navigate(`${results.data.url}`)
      window.location.href = results.data.url
    });
    console.log('clickef');
  };
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-5 pt-5">
          <Button variant="success" type="submit" block onClick={payPro}>
            <h1> 300 </h1>
          </Button>

          <Button variant="success" type="submit" block>
            <h1> 400 </h1>
          </Button>
        </div>
      </div>
    </>
  );
};
export default UserPay;
