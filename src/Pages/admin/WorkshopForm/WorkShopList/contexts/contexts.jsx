import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../../../API/api';
import AuthContext from '../../../../../auth/authContext';

export const WorkshopContext = createContext();
const WorkshopContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [workshop, setWorkshop] = useState([]);
  const deleteWo = async props => {
    await axios.delete(`${baseUrl}/workshop/del/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    const newWorkshop= workshop.filter(w => w._id !== props);
    setWorkshop(newWorkshop);
  };

  const updatewo = async props => {
    console.log(props);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/workshop/all`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        if (
          results.status != 200 ||
          (results.status != 201 && results.data.authError)
        ) {
          authContext.logout();
          return;
        }
         setWorkshop(results.data.data);
         console.log(results.data.data);
      });
  }, []);

  // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <WorkshopContext.Provider value={{ workshop, deleteWo }}>
      {props.children}
    </WorkshopContext.Provider>
  );
};
export default WorkshopContextProvider;
