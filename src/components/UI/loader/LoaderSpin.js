import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Loader.module.css';

const LoaderSpinnser = props => {
  return (
    <div className={classes.loader}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

const LoaderSpin = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <LoaderSpinnser />,
        document.getElementById('load-spinner')
      )}
    </>
  );
};

export default LoaderSpin;
