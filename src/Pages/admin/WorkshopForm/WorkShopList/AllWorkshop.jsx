import React from 'react';
import ReactDOM from 'react-dom';
import WorkShopList from './workshoplist';
import WorkshopContextProvider from './contexts/contexts';
function AllWorkshop() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 pt-3">
          <div className="table-responsive">
            <div className="table-wrapper">
              <WorkshopContextProvider>
                <WorkShopList />
              </WorkshopContextProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllWorkshop;
