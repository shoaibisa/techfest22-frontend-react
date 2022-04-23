import React, { useState, useContext } from 'react';
import './Signin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import signup_gif from '../../images/Signup gif.webm';
import { baseUrl } from '../../API/api';
import { localUrl } from '../../API/api';
import axios from 'axios';
import ErrorModel from '../UI/ErrorModel/ErrorModel';
import AuthContext from '../../auth/authContext';

function Signin(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false)

  const [errosMade, setErrosMade] = useState(); //undefined

  const navigate = useNavigate();

  const getEmail = e => {
    setEmail(e.target.value);
  };
  const getpassword = e => {
    setPassword(e.target.value);
  };

  const userLoginHandle = async authData => {
    setIsLoading(true)
    const fetchdata = await axios({
      method: 'post',
      data: authData,
      url: `${baseUrl}/signIn`,
    });
    if (
      fetchdata.status !== 200 ||
      (fetchdata.status !== 201 && fetchdata.data.isError)
    ) {
      setIsLoading(false)
      setErrosMade({
        title: 'Error',
        message: fetchdata.data.message,
      });
      // return;
    }
    // setErrosMade(null);
    if (
      fetchdata.status === 200 ||
      (fetchdata.status === 201 && fetchdata.data.isSucces)
    ) {
      setIsLoading(false)
      setErrosMade(false);
      const userData = {
        token: fetchdata.data.token,
        userId: fetchdata.data.userId,
        userRole: fetchdata.data.userRole,
      };
      authContext.login(userData);

      if (fetchdata.data.userRole === 569) {
        setIsLoading(true)
        navigate('/admin');
      }
      if (fetchdata.data.userRole === 0) {
        setIsLoading(false)
        navigate('/dashboard')};

      // console.log(fetchdata);
    }
  };

  const onSubmitBtnClick = async e => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty',
      });
      return;
    }
    if (!email.trim().includes('@')) {
      setErrosMade({
        title: 'Error',
        message: 'Invalid mail!',
      });
      return;
    }

    const zData = {
      email: email,
      password: password,
    };

    userLoginHandle(zData);

    // console.log(zData);

    // // try {
    // const fetchData = await axios({
    //   method: 'post',
    //   data: zData,
    //   url: `${localUrl}/signIn`,
    // });

    // setResponses(fetchData.data);
    // console.log(responses);

    // if(fetchData.data.)
    // if (responses.error.isErrors) {
    //   alert(responses.error.error);
    // }
    // alert(fetchData.data.isErrors);
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

  function ShowPassword() {
    var shopass = document.getElementById('Showpass');
    var fa_eye = document.getElementById('fa_eye');

    var type = shopass.getAttribute('type');
    if (type === 'password') {
      type = 'text';
      shopass.setAttribute('type', type);
      fa_eye.classList.add('fa-eye');
      fa_eye.classList.remove('fa-eye-slash');
    } else {
      type = 'password';
      shopass.setAttribute('type', type);
      fa_eye.classList.add('fa-eye-slash');
      fa_eye.classList.remove('fa-eye');
    }
  }
  return (
    <div>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      <div className="SigninBody ">
        <div className="Signin justify-content-around  d-flex ">
          <div className="Signin__Gif mt-5">
            <video loop={true} autoPlay={true} muted={true}>
              <source
                style={{ width: '600px', height: '400px' }}
                src={signup_gif}
                type="video/webm"
              />
            </video>
          </div>

          <div className="Signin__inputs  ">
            <div className="Signin__inputs__head">
              <h2 className="text-light " href="#">
                Welcome Back!
              </h2>
              <p className="text-light">Sign in to continue</p>
            </div>
            <form name="SigninForm" className=" text-center">
              <label>
                <input
                  name="emailId"
                  required
                  autoComplete="off"
                  type="email"
                  placeholder=" "
                  onChange={getEmail}
                />
                <span style={{ background: 'transparent' }}>Email</span>
              </label>{' '}
              <br />
              <label>
                <input
                  id="Showpass"
                  name="password"
                  required
                  autoComplete="off"
                  type="password"
                  placeholder=" "
                  onChange={getpassword}
                />

                <span style={{ background: 'transparent' }}>Password</span>
                <i
                  onClick={ShowPassword}
                  id="fa_eye"
                  className="fa fa-eye-slash"
                ></i>
                <p className="text-danger" id="pass"></p>
              </label>
              <div className="login__button d-flex justify-content-around">
                <button
                  type="button"
                  onClick={onSubmitBtnClick}
                  className="btn__color mb-3"
                  disabled={isLoading}
                >
                  Submit
                </button>
                <NavLink
                  className=" text-light text-decoration-none "
                  to={'/forgot'}
                >
                  Forgot Password?
                </NavLink>
              </div>
            </form>
            <p className="text-light mt-3 Signin__inputs__haveAcount">
              Don't have an account?{' '}
              <NavLink
                className=" text-decoration-none text-light font-weight-bold "
                activeClassName="active"
                exact
                to="/signup"
              >
                {' '}
                <b>Sign Up</b>
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="forgotpassword">
        <div className="forgotpassword__content">
                  <div className="forgotpassword__content__heading">
                    <h4>Forgot your password</h4>
                    <p>We will send you a email to reset your password</p>
                  </div>
        </div>
      </div> */}
    </div>
  );
}

export default Signin;
