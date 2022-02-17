import React from 'react';
import './Signin.css';
// import signup_gif from '../../images/Signup gif.webm';
import image from '../../images/hero image.png'

const Sigin = () => {
  return (
    <div>
        <div className="SigninBody ">
          <div className="Signin justify-content-around  d-flex ">
            <div className="Signin__Gif mt-5">
              {/* <video loop="loop" autoplay muted="true" preload="auto">
                <source src={} />
              </video> */}
           <img src={image} alt="Girl in a jacket" width="500" height="600"></img>
            </div>

            <div className="Signin__inputs  pt-5 mt-5 ">
              <div className="Signin__inputs__head">
                <h2 className="text-light " href="#">
                  Welcome Back!
                </h2>
                <p className="text-light">Sign in to continue</p>
              </div>
              <form name="SigninForm" action="" className=" text-center">
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
                    id="Showpass"
                    name="password"
                    required
                    autocomplete="off"
                    type="password"
                    placeholder=" "
                  />

                  <span>Password</span>
                  <i
                    onclick="ShowPassword()"
                    id="fa_eye"
                    className="fa fa-eye-slash"
                  ></i>
                  <p className="text-danger" id="pass"></p>
                </label>
                <div className="login__button d-flex justify-content-around">
                  <input type="submit" className="btn__color mb-3"></input>
                  <a className=" text-light text-decoration-none " href="/#">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-light mt-3 Signin__inputs__haveAcount">
                Don't have an account?{' '}
                <a
                  className=" text-decoration-none text-light font-weight-bold "
                  href="./Signup.html"
                >
                  {' '}
                  <b>Sign Up</b>
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Sigin;
