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
    <CardUi className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div  style={{ color:'black'}} className={classes.content}>{props.message}</div>
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
        <BackdropBg onErrosClick={props.onErrosClick} />,
        document.getElementById('backdropbg-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrosClick={props.onErrosClick}
        />,
        document.getElementById('error-model-root')
      )}
    </>
  );
};

export default ErrorModel;
