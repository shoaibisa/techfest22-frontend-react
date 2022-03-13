import React from 'react';
 import ReactDOM from 'react-dom';
import UserList from "./userList";
import './alllUser.css';
import UserContextProvider from "./contexts/userContext";
function allUsers() {
  return (
    <>
    <div className='main'>
    <div className="container-fluid mt-3 pt-3">
      <div className="table-responsive">
        <div className="table-wrapper">
        <UserContextProvider>
         <UserList />
        </UserContextProvider>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default allUsers;
