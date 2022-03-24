import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../../API/api';
import AuthContext from '../../../../auth/authContext';

export const SponsorContext = createContext();
const SponsorContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [sponser, setSponsor] = useState([]);
  const deleteSp = async props => {
    await axios.delete(`${baseUrl}/sponser/delete/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    const newSponsor = sponser.filter(c => c._id !== props);
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
      });
  }, []);

  // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <SponsorContext.Provider value={{ sponser, deleteSp }}>
      {props.children}
    </SponsorContext.Provider>
  );
};
export default SponsorContextProvider;
