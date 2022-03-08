import React, { useState, useEffect } from 'react';
import DeleteContent from '../../../components/admin/detail/DeleteContent';

import { baseUrl } from '../../../API/api';
import { localUrl } from '../../../API/api';

const CoordinatorContent = () => {
  const [contents, setContents] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${localUrl}/coordinator/get-all-details`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setContents(result['c']);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // loadData();

  if (contents.length === 0) {
    return <h1 className="delete-list__fallback">Not Found!</h1>;
  }

  return (
    <div className="delete-card">
      <ul className="delete-list ">
        {contents.map(w => (
          <DeleteContent
            key={w._id}
            data={{
              name: w.coordinatorName,
              desc: w.coordinatorEmail,
              id: w._id,
            }}
          />
        ))}
        {/* <p>{contents}</p> */}
      </ul>
    </div>
  );
};

export default CoordinatorContent;
