import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { baseUrl, localUrl } from '../../../../../API/api';
import AuthContext from '../../../../../auth/authContext';

export const CoordinatorContext = createContext();
const CoordinatorContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [coordinator, setCoordinator] = useState([]);
  const deleteCo = async props => {
    await axios.delete(`${baseUrl}/coordinator/delete/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    const newCoordinator = coordinator.filter(c => c._id !== props);
    setCoordinator(newCoordinator);
  };

  const updateCo = async props => {
    console.log(props);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/coordinator/get-all-details`, {
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
        setCoordinator(results.data.c);
      });
  }, []);

  // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <CoordinatorContext.Provider value={{ coordinator, deleteCo }}>
      {props.children}
    </CoordinatorContext.Provider>
  );
};
export default CoordinatorContextProvider;
