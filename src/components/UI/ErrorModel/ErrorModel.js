import React from 'react';
import CardUi from '../Card/CardUi';
import classes from './ErrorModel.module.css';
import ButtonUi from '../button/ButtonUi';
import ReactDOM from 'react-dom';

const BackdropBg = props => {
  return <div className={classes.backdrop} onClick={props.onErrosClick} />;
};

const ModalOverlay = props => {
  return (
    <CardUi>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <ButtonUi onBtnClick={props.onErrosClick}>OK</ButtonUi>
      </footer>
    </CardUi>
  );
};

const ErrorModel = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropBg />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrosClick={props.onErrsClick}
        />,
        document.getElementById('error-model-root')
      )}
    </>
  );
};

export default ErrorModel;
