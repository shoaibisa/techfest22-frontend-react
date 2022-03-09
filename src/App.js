import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CaPortal from './Pages/caportal/Caportal';
import Navbar from './components/header/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
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
import CoordinatorContent from './Pages/admin/coordinator/CoordinatorContent';

import UserDash from './Pages/user/UserDash';
import axios from 'axios';
import { localUrl } from './API/api';
import ErrorModel from './components/UI/ErrorModel/ErrorModel';

// import { render } from '@testing-library/react';

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState();
  const [errosMade, setErrosMade] = useState();

  useEffect(() => {});

  const userLoginHandle = async authData => {
    const fetchdata = await axios({
      method: 'post',
      data: authData,
      url: `${localUrl}/signIn`,
    });
    if (fetchdata.status !== 200 || fetchdata.status !== 201) {
      setErrosMade({
        title: 'Error',
        message: fetchdata.data.message,
      });
    }
    // setUserLoggedIn(true);
    console.log(fetchdata);
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
    </Route>
  );

  if (isUserLoggedIn) {
    routes = (
      <Route>
        <Route exact path="/dashboard" element={<UserDash />} />
      </Route>
    );
  }

  return (
    <div className="App">
      <Navbar />
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
        <Route exact path="/workshop" element={<WorkshopForm />} />
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
        <Route
          exact
          path="/admin/coordinators"
          element={<CoordinatorContent />}
        />
        <Route
          exact
          path="/admin/workshop/delete"
          element={<DeleteWorkshop />}
        />
        {routes}
        <Route exact path="/admin" element={<AdminContent />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
