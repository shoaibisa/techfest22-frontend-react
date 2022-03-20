//import React, { useState } from 'react';
 import React from 'react';
import { Form, Button } from 'react-bootstrap';
const UserPay = () => {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-5 pt-5">
          <Form>
            <Button variant="success" type="submit" block><h1> 300 </h1></Button>
             
            <Button variant="success" type="submit" block><h1> 400 </h1></Button>
          </Form>
        </div>
      </div>
    </>
  );
};
 export default UserPay;