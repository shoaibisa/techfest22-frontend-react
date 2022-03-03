import React, { useState } from 'react';
import './DeleteContent.css';

const DeleteContent = props => {
  const [content, setContent] = useState(props);
  const onBtnClick = () => {
    //setContent('show');
    console.log(content);
  };

  return (
    <div className="delete-item">
      <p>{props.data.name}</p>
      <p>{props.data.desc}</p>
      <button type="button" onClick={onBtnClick} className="btn__color mb-3">
        Delete
      </button>
    </div>
  );
};

export default DeleteContent;
