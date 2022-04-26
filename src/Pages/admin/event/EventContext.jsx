import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';

export const EventContext = createContext();

const EventContextProvider = props => {
  const authContext = useContext(AuthContext);
  const [event, setEvent] = useState([]);

  const deleteEvent = async props => {
    await axios.delete(`${baseUrl}/event/deleteEvent/${props}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    const newEvent = event.filter(w => w._id !== props);
    setEvent(newEvent);
    // console.log(newEvent);
  };

  useEffect(() => {
    axios.get(`${baseUrl}/event/getAllEvents`).then(results => {
       console.log(results);
      setEvent(results.data.data);
    });
  }, []);
  return (
    <EventContext.Provider value={{ event, deleteEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
