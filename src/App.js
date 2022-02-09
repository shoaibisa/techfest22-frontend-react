import React from 'react';
import {Route, Switch} from "react-router-dom";
// import CaPortal from './Pages/Caportal';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <CaPortal/> */}
      <Footer/>
    </div>
  );
}

export default App;
