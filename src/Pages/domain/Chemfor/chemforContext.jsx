import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { localUrl } from '../../../API/api';

export const ChemforContext = createContext();
 const   ChemforContextProvider = props => {
  const [Chemfor, setChemfor] = useState();

  useEffect(() => {
    axios.get(`${localUrl}/event/getByDomain/chemfor`).then(results => {
       console.log(results);
       setChemfor(results.data);
    });
  }, []);

  return (
    <ChemforContext.Provider value={{ Chemfor }}>
      {props.children}
    </ChemforContext.Provider>
  );
};
export default ChemforContextProvider;
