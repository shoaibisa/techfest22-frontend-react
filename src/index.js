import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './auth/authContext';
const loader = document.querySelector('.preloader');

const addClass = () => loader.classList.add('d-none');
setTimeout(() => {
  // showLoader();
  addClass();
  ReactDOM.render(
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>,
    document.getElementById('root')
  );
}, 4500);
