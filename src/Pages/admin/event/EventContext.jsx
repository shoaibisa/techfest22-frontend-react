import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { localUrl } from '../../../API/api';

export const EventContext = createContext();

const EventContextProvider = props => {
  const [event, setEvent] = useState([]);

  const deleteEvent = props => {
    console.log(props);
  };

  useEffect(() => {
    axios.get(`${localUrl}/event/getAllEvents`).then(results => {
      //   console.log(results.data);
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
