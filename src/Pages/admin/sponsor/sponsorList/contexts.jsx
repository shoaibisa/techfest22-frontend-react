import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { baseUrl, localUrl } from '../../../../API/api';
import AuthContext from '../../../../auth/authContext';

export const SponsorContext = createContext();
const SponsorContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [sponsor, setSponsor] = useState([]);
  const deleteSp = async props => {
    await axios.delete(`${baseUrl}/sponser/delete/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    const newSponsor = sponsor.filter(c => c._id !== props);
    setSponsor(newSponsor);
  };

  const updateCo = async props => {
    console.log(props);
  };
  
  useEffect(() => {
    axios
      .get(`${baseUrl}/sponser/getAllSponsors`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        setSponsor(results.data.data);
         console.log(results.data.data)
      });
  }, []);

  // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <SponsorContext.Provider value={{ sponsor, deleteSp }}>
      {props.children}
    </SponsorContext.Provider>
  );
};
export default SponsorContextProvider;
