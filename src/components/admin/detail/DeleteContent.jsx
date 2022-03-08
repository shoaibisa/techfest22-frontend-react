import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';
import './DeleteContent.css';

const DeleteContent = props => {
  const [content, setContent] = useState(props.data);
  const onBtnClick = async () => {
    console.log(content);
    await axios
      .delete(`${baseUrl}/workshop/del/${content.id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
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
