import React from 'react';

import '../AllListContent.css';
import SponserContextProvider from './SponserContext';
import SponsorList from './SponsorList';

function SponsorAll() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 pt-3">
          <div className="table-responsive">
            <div className="table-wrapper">
              <SponserContextProvider>
                <SponsorList />
              </SponserContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorAll;
