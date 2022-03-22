import React, { useState, useEffect, useContext } from 'react';
import DeleteContent from '../../../components/admin/detail/DeleteContent';

import { baseUrl } from '../../../API/api';
import { localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';

const DeleteWorkshop = () => {
  const authContext = useContext(AuthContext);
  const [contents, setContents] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    fetch(`${baseUrl}/workshop/all`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    })
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
  };

  loadData();

  if (contents.length === 0) {
    return <h1 className="delete-list__fallback">Not Found!</h1>;
  }

  return (
    <div className="delete-card">
      <ul className="delete-list ">
        {contents.map(
          w => (
            { loadData },
            (
              <DeleteContent
                key={w._id}
                data={{ name: w.workshopName, desc: w.wsDesc, id: w._id }}
              />
            )
          )
        )}
        {/* <p>{contents}</p> */}
      </ul>
    </div>
  );
};

export default DeleteWorkshop;
