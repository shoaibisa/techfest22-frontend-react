import React from 'react';

const ButtonUi = props => {
  return (
    <button type={props.types || 'button'} onClick={props.onBtnClick}>
      props.children
    </button>
  );
};

export default ButtonUi;
