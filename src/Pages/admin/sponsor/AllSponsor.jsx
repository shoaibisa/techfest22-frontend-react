import React from 'react';
import ReactDOM from 'react-dom';
import SponsorList from './SponserList';
//import './AllCoordinator.css';
import SponsorContextProvider from './sponsorList/contexts';
function AllCoordinator() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 pt-3">
          <div className="table-responsive">
            <div className="table-wrapper">
              <SponsorContextProvider>
                <SponsorList />
              </SponsorContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCoordinator;
