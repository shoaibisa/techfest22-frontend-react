import React from 'react';
import './Signin.css';
import signup_gif from '../../images/Signup gif.webm';
import image from '../../images/hero image.png'
// import signinGif from "./images/gif/Signup gif.webm"

const Sigin = () => {
  function ShowPassword()
  {
      var shopass = document.getElementById("Showpass");
      var fa_eye = document.getElementById("fa_eye");
  
      
      var type = shopass.getAttribute("type");
      if(type == "password")
      {
          type = "text";
         shopass.setAttribute("type", type);
         fa_eye.classList.add("fa-eye");
         fa_eye.classList.remove("fa-eye-slash");
         
      }
      else
      {
          
          type = "password";
          shopass.setAttribute("type",type);
          fa_eye.classList.add("fa-eye-slash");
         fa_eye.classList.remove("fa-eye");
          
      }
      
  }




  return (
    <div className='SigninBody'>
      
    </div>
  );
};
export default Sigin;
