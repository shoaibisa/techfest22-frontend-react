import React from 'react';

import '../AllListContent.css';
import EventContextProvider from './EventContext';
import EventList from './EventList';

function EventAll() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 pt-3">
          <div className="table-responsive">
            <div className="table-wrapper">
              <EventContextProvider>
                <EventList />
              </EventContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventAll;
