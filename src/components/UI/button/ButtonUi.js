import React from 'react';

const ButtonUi = props => {
  return (
    <button
      className="btn__color mb-3 mr-3"
      style={{ marginRight:'10px' }}
      type={props.types || 'button'}
      onClick={props.onBtnClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonUi;
