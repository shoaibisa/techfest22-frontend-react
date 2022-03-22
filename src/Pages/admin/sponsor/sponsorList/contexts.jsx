// import axios from 'axios';
// import { createContext, useContext, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { baseUrl, localUrl } from '../../../../../API/api';
// import AuthContext from '../../../../../auth/authContext';

// export const sponsorContext = createContext();
// const sponsorContextProvider = props => {
//   const authContext = useContext(AuthContext);
//   const [sponsor, setSponsor] = useState([]);
//   const deleteCo = async props => {
//     await axios.delete(`${baseUrl}/coordinator/delete/${props}`, {
//       headers: {
//         Authorization: 'Bearer ' + authContext.token,
//       },
//     });
//     const newCoordinator = coordinator.filter(c => c._id !== props);
//     setCoordinator(newCoordinator);
//   };

//   const updateCo = async props => {
//     console.log(props);
//   };
  
//   useEffect(() => {
//     axios
//       .get(`${baseUrl}/sponser/`, {
//         headers: {
//           Authorization: 'Bearer ' + authContext.token,
//         },
//       })
//       .then(results => {
//         setSponsor(results.data.data);
//       });
//   }, []);

//   // const sortedUsers = users.sort((a, b) => (a.name < b.name ? -1 : 1));
//   return (
//     <CoordinatorContext.Provider value={{ coordinator, deleteCo }}>
//       {props.children}
//     </CoordinatorContext.Provider>
//   );
// };
// export default CoordinatorContextProvider;
