import React from 'react';
import { Route, Routes } from "react-router-dom";
import CaPortal from './Pages/caportal/Caportal';
import Navbar from './components/header/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (

    <div className="App">
 
      <Navbar/>

     <Routes>
      <Route exact path = '/' element={<Home/>}  />
      <Route exact path='/ca' element={<CaPortal/>} />
      </Routes>
  
  
      {/* <Home/>
      <CaPortal/> */}
      <Footer/>
    </div>

    

  );
}

export default App;
