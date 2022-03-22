import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';

export const EventContext = createContext();

const EventContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [event, setEvent] = useState([]);

  const deleteEvent = async props => {
    await axios.delete(`${localUrl}/event/deleteEvent/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    //console.log(props);
  };

  useEffect(() => {
    axios.get(`${localUrl}/event/getAllEvents`).then(results => {
      //   console.log(results.data);
      setEvent(results.data.data);
    });
  }, [deleteEvent]);
  return (
    <EventContext.Provider value={{ event, deleteEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
