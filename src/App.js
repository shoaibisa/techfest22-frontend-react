import React, { useContext, useState,lazy } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
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
import Help from './components/help/Help';
import Workshop from './Pages/workshop/Workshop';
import Date from './components/Date/Date';
import EventAll from './Pages/admin/event/EventAll';
import UpdateCoordinator from './Pages/admin/coordinator/CoordinatorList/UpdateCoordinator';
import PayNow from './Pages/user/payment/UserPay';
import AuthContext from './auth/authContext';
import SponsorForm from './Pages/admin/sponsor/SponsorForm';
import SponsorAll from './Pages/admin/sponsor/AllSponsor';
import FrequentlyAsk  from './Pages/AboutUs/aboutus';
import Datehorizontal from './components/Datehorizontal/Datehorizontal'
import OurTeam from './Pages/OurTeam/outTeam';
//import OurTeamDemo from './Pages/ourteamdemo/outTeam';
import WorkshopAll from './Pages/admin/WorkshopForm/WorkShopList/AllWorkshop';
import Eventdata from './Pages/admin/event/Eventdata';
import DateExt from './components/dateExtanded';

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
     <NavLink to={"/frequentlyAsk"}> <Help /></NavLink>
    <Datehorizontal/>
     <Date/>
     <DateExt/>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      <Routes> 
        <Route path="/" element={<Home data={dataJson.sponser} />} />
        <Route  path="/ca" element={<CaPortal />} />
        <Route  path="/chemfor" element={<Chemfor />} />
        <Route  path="/electrica" element={<Electrica />} />
        <Route  path="/kermis" element={<Kermis />} />
        <Route  path="/karyarachna" element={<Karyarachna />} />
        <Route  path="/mechanica" element={<Mechanica />} />
        <Route  path="/plexus" element={<Plexus />} />
        <Route  path="/robozar" element={<Robozar />} />
        <Route  path="/genesis" element={<Genesis />} />
        <Route  path="/workshop" element={<Workshop />} />
        <Route  path="/about" element={<AboutUs data={dataJson} />} />
        <Route  path="/admin/domains" element={<DomainForm />} />
        
        
        
        //admin routes
        <Route
          path="/domain"
          element={<Domain data={dataJson.domain} />}
        />
         <Route
          path="/frequentlyAsk"
          element={<FrequentlyAsk/>}
        />
         <Route
          path="/ourteam"
          element={<OurTeam/>}
        />
        
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            path="/admin/coordinators/add"
            element={<CoordinatorForm />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/workshop/add" element={<WorkshopForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            path="/admin/workshop/delete"
            element={<DeleteWorkshop />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin" element={<AdminContent />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/users" element={<AllUsers />} />
        )}

        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/sponsor" element={<SponsorAll />} /> 
        )} 
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
         <Route  path="/admin/sponsor/add" element={<SponsorForm />} />
        )} 
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/workshop/" element={<WorkshopAll />} /> 
        )} 


        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/domain" element={<DomainForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/event" element={<EventAll />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/event/eventsdata" element={<Eventdata />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="/admin/event/add" element={<EventForm />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route  path="admin/coordinator" element={<AllCoordinator />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            path="admin/coordinator/add"
            element={<CoordinatorForm />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 569 && (
          <Route
            path="admin/coordinator/update"
            element={<UpdateCoordinator />}
          />
        )}
        //user routes
        {!authContext.isUserLoggedIn && (
          <Route  path="/signin" element={<SignIn />} />
        )}
        {!authContext.isUserLoggedIn && (
          <Route  path="/signup" element={<SignUp />} />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 0 && (
          <Route
            path="/dashboard"
            element={<UserDash isAuth={isUserLoggedIn} token={token} />}
          />
        )}
        {authContext.isUserLoggedIn && authContext.userRole == 0 && (
          <Route  path="user/pay" element={<PayNow />} />
        )}
        <Route  path="/forgot" element={<Forgot />} />
        <Route path="*" element={<Fourzerofour />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
