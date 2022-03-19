import React from 'react';
import ReactDOM from 'react-dom';
import CoordinatorList from './CoordinatorList';
import './AllCoordinator.css';
import UserContextProvider from './contexts/CoordinatorContext';
function AllCoordinator() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 pt-3">
          <div className="table-responsive">
            <div className="table-wrapper">
              <UserContextProvider>
                <CoordinatorList />
              </UserContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCoordinator;
