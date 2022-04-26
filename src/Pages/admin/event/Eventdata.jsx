import { useLocation } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import DomainList from './Eventdata';
import { keys } from '@material-ui/core/styles/createBreakpoints';
function Eventdata() {
  const location = useLocation();

  console.log(location.state.teams);
  return (
    <div className=" containerFulid m-5 pt-5">
      <h1>{location.state.event.name}</h1>
      <table className="table " id="mytable">
        <thead className="title">
          <tr>
            <th>Team Name</th>
            <th>Team Leader Name</th>
            <th>Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {location &&
            location.state.teams.map(t => (
              <tr style={{ borderStyle: 'none', color: 'white' }}>
                <td>{t.teamName}</td>
                <td>{t.teamLeaderName}</td>
                <td>{t.teamLeaderWahtsApp}</td>
                <td>{t.teamLeaderMail}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1 >Individual</h1>
      <table className="table " id="mytable">
        <thead className="title">
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {location &&
            location.state.event.individual.map(t => (
              <tr style={{ borderStyle: 'none', color: 'white' }}>
                <td>{t.name}</td>
                <td>{t.whatsappPhoneNumber}</td>
                <td>{t.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Eventdata;
