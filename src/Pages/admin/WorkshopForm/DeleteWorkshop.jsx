import React, { useState, useEffect } from 'react';
import DeleteContent from '../../../components/admin/detail/DeleteContent';

import { baseUrl } from '../../../API/api';
import { localUrl } from '../../../API/api';

const data = {
  name: 'mahi',
  desc: 'kjsdjk',
  id: '2',
};

const DeleteWorkshop = () => {
  const [contents, setContents] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${localUrl}/workshop/all`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setContents(result['w']);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (contents.length === 0) {
    return <h1 className="delete-list__fallback">Not Found!</h1>;
  }

  return (
    <ul className="expense-list">
      {contents.map(w => (
        <DeleteContent
          key={w._id}
          data={{ name: w.workshopName, desc: w.wsDesc, id: w._id }}
        />
      ))}
      {/* <p>{contents}</p> */}
    </ul>
  );
};

export default DeleteWorkshop;
