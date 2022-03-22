import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';

export const SponserContext = createContext();

const SponserContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [sponser, setSponser] = useState([]);

  const deleteSponser = async props => {
    await axios.delete(`${baseUrl}/sponsor/delete/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    //console.log(props);
  };

  useEffect(() => {
    axios.get(`${baseUrl}/sponser/getAllSponsors`).then(results => {
      console.log(results.data.data);
      setSponser(results.data.data);
    });
  }, []);
  //console.log(sponser);
  return (
    <SponserContext.Provider value={{ sponser, deleteSponser }}>
      {props.children}
    </SponserContext.Provider>
  );
};

export default SponserContextProvider;
