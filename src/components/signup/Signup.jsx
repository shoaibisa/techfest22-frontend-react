import React from 'react';
import './Signup.css';
//images
import signup_gif from '../../images/Signup gif.webm';
import image from '../../images/hero image.png';
const Signup = () => {
  return (
    <div>
      <div className="signUpBody ">
        <div className="SignUp  d-flex ">
          <div className="SignUp__Gif mt-5">
          <video  loop = {true} autoPlay = {true} muted = {true}>
            <source style={{width:"600px",height:"400px"}} src={signup_gif} type = "video/webm" />

            </video>
          </div>
          <div className="SignUp__inputs pt-5 mt-5 ">
            <form
              onsubmit=" return myFormValidation()"
              name="signupForm"
              action=""
              className="p-2"
            >
              <h1 className="text-light signupValidation" href="#">
                SignUp
              </h1>
              <label className="mt-3">
                <input
                  name="Fullname"
                  required
                  autocomplete="off"
                  type="text"
                  placeholder=" "
                />
                <span>Full Name</span>
              </label>{' '}
              <br />
              <label>
                <input
                  name="emailId"
                  required
                  autocomplete="off"
                  type="email"
                  placeholder=" "
                />
                <span>Email</span>
              </label>{' '}
              <br />
              <label>
                <input
                  name="password"
                  required
                  autocomplete="off"
                  type="password"
                  placeholder=" "
                />
                <span>Password</span>
                <p className="text-danger" id="pass"></p>
              </label>{' '}
              <br />
              <label>
                <input
                  name="cnfPassword"
                  required
                  autocomplete="off"
                  type="text"
                  placeholder=" "
                />
                <span>Confirm Password</span>
                <p className="text-danger" id="cnfPass"></p>
              </label>
              <br />
              <label>
                <input
                  name="referal"
                  type="text"
                  required
                  autocomplete="off"
                  placeholder=" "
                />
                <span>Refral Code</span>
              </label>{' '}
              <br />
              <input type="submit" className="btn__color mb-3"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
