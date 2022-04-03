import React, { useContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CaPortal from './Pages/caportal/Caportal';
import Navbar from './components/header/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Forgot from './Pages/ForgotPassword/Forgot';
import './App.css';
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
import Genesis from './Pages/domain/Genesis/Genesis';
import WorkshopForm from './Pages/admin/WorkshopForm/WorkshopForm';
import DomainForm from './Pages/admin/domain/DomainForm';
import DeleteWorkshop from './Pages/admin/WorkshopForm/DeleteWorkshop';
import AdminContent from './Pages/admin/AdminContent';
import CoordinatorForm from './Pages/admin/coordinator/CoordinatorForm';
import UserDash from './Pages/user/UserDash';
import ErrorModel from './components/UI/ErrorModel/ErrorModel';
import AllUsers from './Pages/admin/userList/allUsers';
import Fourzerofour from './Pages/FourZero/Fourzerofour';
import EventForm from './Pages/admin/event/EventForm';
import AllCoordinator from './Pages/admin/coordinator/CoordinatorList/AllCoordinator';

import Workshop from './Pages/workshop/Workshop';

import EventAll from './Pages/admin/event/EventAll';
import UpdateCoordinator from './Pages/admin/coordinator/CoordinatorList/UpdateCoordinator';
import PayNow from './Pages/user/payment/UserPay';
import AuthContext from './auth/authContext';
import SponsorForm from './Pages/admin/sponsor/SponsorForm';
import SponsorAll from './Pages/admin/sponsor/AllSponsor';
import FrequentlyAsk  from './Pages/AboutUs/aboutus';

import OurTeam from './Pages/OurTeam/outTeam';
//import OurTeamDemo from './Pages/ourteamdemo/outTeam';
import WorkshopAll from './Pages/admin/WorkshopForm/WorkShopList/AllWorkshop';

function App() {
  const authContext = useContext(AuthContext);
  const [isUserLoggedIn, setUserLoggedIn] = useState();
  const [errosMade, setErrosMade] = useState();
  const [userId, serUserId] = useState(null);
  const [token, setToken] = useState();
  const navigate = useNavigate();

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
        <Route exact path="/genesis" element={<Genesis />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/about" element={<AboutUs data={dataJson} />} />
        <Route exact path="/admin/domains" element={<DomainForm />} />
        //admin routes
        <Route
          exact
          path="/domain"
          element={<Domain data={dataJson.domain} />}
        />
         <Route
          exact
          path="/frequentlyAsk"
          element={<FrequentlyAsk/>}
        />
         <Route
          exact
          path="/ourteam"
          element={<OurTeam/>}
        />
        
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            exact
            path="/admin/coordinators/add"
            element={<CoordinatorForm />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/workshop/add" element={<WorkshopForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            exact
            path="/admin/workshop/delete"
            element={<DeleteWorkshop />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin" element={<AdminContent />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/users" element={<AllUsers />} />
        )}

        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/sponsor" element={<SponsorAll />} /> 
        )} 
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
         <Route exact path="/admin/sponsor/add" element={<SponsorForm />} />
        )} 
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/workshop/" element={<WorkshopAll />} /> 
        )} 


        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/domain" element={<DomainForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/event" element={<EventAll />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="/admin/event/add" element={<EventForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route exact path="admin/coordinator" element={<AllCoordinator />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            exact
            path="admin/coordinator/add"
            element={<CoordinatorForm />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            exact
            path="admin/coordinator/update"
            element={<UpdateCoordinator />}
          />
        )}
        //user routes
        {!authContext.isUserLoggedIn && (
          <Route exact path="/signin" element={<SignIn />} />
        )}
        {!authContext.isUserLoggedIn && (
          <Route exact path="/signup" element={<SignUp />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 0 && (
          <Route
            exact
            path="/dashboard"
            element={<UserDash isAuth={isUserLoggedIn} token={token} />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 0 && (
          <Route exact path="user/pay" element={<PayNow />} />
        )}
        <Route exact path="/forgot" element={<Forgot />} />
        <Route path="*" element={<Fourzerofour />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
