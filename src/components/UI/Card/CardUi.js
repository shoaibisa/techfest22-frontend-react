import React from 'react';

import classes from './CardUi.module.css';

const CardUi = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardUi;
