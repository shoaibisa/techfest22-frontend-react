import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CaPortal from './Pages/caportal/Caportal';
import Navbar from './components/header/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Forgot from './Pages/ForgotPassword/Forgot';
import './App.css';
// import Domain from "./Pages/domain/Domain";
import Chemfor from './Pages/domain/Chemfor/Chemfor';
import SignIn from './components/signin/Signin';
import SignUp from './components/signup/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import dataJson from './data/data.json';
import AboutUs from './components/aboutus/AboutUs';
import Domain from './Pages/domain/Domain';
import Electrica from './Pages/domain/Electrica/Electrica';
import Kermis from './Pages/domain/Kermis/Kermis';
import Karyarachna from './Pages/domain/Karyarachna/Karyarachna';
import Mechanica from './Pages/domain/Mechanica/Mechanica';
import Plexus from './Pages/domain/Plexus/Plexus';
import Robozar from './Pages/domain/Robozar/Robozar';
import WorkshopForm from './Pages/admin/WorkshopForm/WorkshopForm';
import DomainForm from './Pages/admin/domain/DomainForm';
import DeleteWorkshop from './Pages/admin/WorkshopForm/DeleteWorkshop';
import AdminContent from './Pages/admin/AdminContent';
import CoordinatorForm from './Pages/admin/coordinator/CoordinatorForm';
import UserDash from './Pages/user/UserDash';
import axios from 'axios';
import { baseUrl, localUrl } from './API/api';
import ErrorModel from './components/UI/ErrorModel/ErrorModel';
import AllUsers from './Pages/admin/userList/allUsers';
import Sponsor from './Pages/admin/sponsor/sponsor';
import Fourzerofour from './Pages/FourZero/Fourzerofour';
import EventForm from './Pages/admin/event/EventForm';
import AllCoordinator from './Pages/admin/coordinator/CoordinatorList/AllCoordinator';

import Workshop from "./Pages/workshop/Workshop"

import EventAll from './Pages/admin/event/EventAll';


function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState();
  const [errosMade, setErrosMade] = useState();
  const [userId, serUserId] = useState(null);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  //in first load
  useEffect(() => {
    const token = localStorage.getItem('jswToken');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logOutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    setToken(token);
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setUserLoggedIn(true);
  }, []);

  const userLoginHandle = async authData => {
    const fetchdata = await axios({
      method: 'post',
      data: authData,
      url: `${baseUrl}/signIn`,
    });
    if (
      fetchdata.status !== 200 ||
      (fetchdata.status !== 201 && fetchdata.data.isError)
    ) {
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
      setErrosMade(false);
      localStorage.setItem('jswToken', fetchdata.data.token);
      localStorage.setItem('userId', fetchdata.data.userId);
      const remainingMilliseconds = 60 * 60 * 1000; //1h
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      setToken(fetchdata.data.token);
      setUserLoggedIn(true);
      navigate('/dashboard');

      console.log(fetchdata);
    }

    // fetchdata.then(result => {
    //   console.log(result);
    // });

    // const userLoginHandle = async authData => {
    // axios
    //   .post(`${localUrl}/signIn`, authData)
    //   .then(result => {
    //     if (
    //       result.status !== 200 ||
    //       result.status !== 201 ||
    //       result.status === 400
    //     ) {
    //       // setErrosMade({
    //       //   title: 'Error',
    //       //   message: result.data.message,
    //       // });
    //       // //  return;
    //       throw new Error('fhj');
    //     }

    //     return result;
    //   })
    //   .then(resData => {
    //     console.log(resData);
    //   })
    //   .catch(err => {
    //     setErrosMade({
    //       title: 'Error',
    //       message: err,
    //     });
    //     // return;
    //   });
  };

  const logOutHandler = () => {
    setUserLoggedIn(false);

    localStorage.removeItem('jswToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiryDate');
  };

  //error message
  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

  let routes = (
    <Route>
      <Route
        exact
        path="/signin"
        element={<SignIn onLogin={userLoginHandle} />}
      />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/forgot" element={<Forgot />} />
    </Route>
  );

  if (isUserLoggedIn) {
    routes = (
      <Route>
        <Route
          exact
          path="/dashboard"
          element={<UserDash isAuth={isUserLoggedIn} token={token} />}
        />
      </Route>
    );
  }

  return (
    <div className="App">
      <Navbar isAuth={isUserLoggedIn} onLogout={logOutHandler} />
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Home data={dataJson.sponser} />} />
        <Route exact path="/ca" element={<CaPortal />} />
        <Route exact path="/chemfor" element={<Chemfor />} />
        <Route exact path="/electrica" element={<Electrica />} />
        <Route exact path="/kermis" element={<Kermis />} />
        <Route exact path="/karyarachna" element={<Karyarachna />} />
        <Route exact path="/mechanica" element={<Mechanica />} />
        <Route exact path="/plexus" element={<Plexus />} />
        <Route exact path="/robozar" element={<Robozar />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/about" element={<AboutUs data={dataJson} />} />
        <Route exact path="/admin/domains" element={<DomainForm />} />

        <Route
          exact
          path="/domain"
          element={<Domain data={dataJson.domain} />}
        />
        <Route
          exact
          path="/admin/coordinators/add"
          element={<CoordinatorForm />}
        />
        {/* <Route
          exact
          path="/admin/coordinators"
          element={<CoordinatorContent />}
        /> */}
        <Route exact path="/admin/workshop" element={<WorkshopForm />} />
        <Route
          exact
          path="/admin/workshop/delete"
          element={<DeleteWorkshop />}
        />
        {routes}
        <Route exact path="/admin" element={<AdminContent />} />
        <Route exact path="/admin/users" element={<AllUsers />} />
        <Route exact path="/admin/sponsor" element={<Sponsor />} />
        <Route exact path="/admin/domain" element={<DomainForm />} />
        <Route exact path="/admin/event" element={<EventAll />} />
        <Route exact path="/admin/event/add" element={<EventForm />} />

        <Route exact path="admin/coordinator" element={<AllCoordinator />} />
        <Route
          exact
          path="admin/coordinator/add"
          element={<CoordinatorForm />}
        />
        <Route path="*" element={<Fourzerofour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
