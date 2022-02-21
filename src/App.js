import React from "react";
import { Route, Routes } from "react-router-dom";
import CaPortal from "./Pages/caportal/Caportal";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import './App.css';
import SignUp from "./components/signup/Signup"


// import Domain from "./Pages/domain/Domain";
import Chemfor from "./Pages/domain/Chemfor/Chemfor";
import SignIn from "./components/signin/Signin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ca" element={<CaPortal />} />
        <Route exact path="/chemfor" element={<Chemfor />}/>
        <Route exact path="/signin" element={<SignIn />}/>
        <Route exact path="/signin" element={<SignIn />}/>
      </Routes>
      <Footer />
      {/* <EventLogo/>
      <EventCard/> */}
    </div>
  );
}

export default App;
