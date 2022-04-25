import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';
import axios from 'axios';

import { EventContext } from './EventContext';
import { CSVLink } from 'react-csv';

const Event = ({ event }) => {
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { deleteEvent } = useContext(EventContext);
  const [datainCsv, setdatainCsv] = useState("")
  const onDeleteEvent = () => {
    deleteEvent(event._id);
  };
  let cn = '';
  if (event.studentCoordinator.length > 0) {
    const ccn = event.studentCoordinator.map(e => e.coordinatorName);
    cn = ccn.join();
  } else {
    cn = 'Not any coordinator';
  }
  // console.log(cn);
  const downEventData = async()=>{
    
    const csvData  =await axios
    .get(`${baseUrl}/event/getEventById/${event._id}`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
      
    })
   
   
    console.log(csvData.data);
    console.log(csvData.data.event.name);

    console.log(csvData.data.teams[0].teamLeaderName);
    console.log(csvData.data.teams[0].teamName)
      
    console.log(csvData.data.teams.teamLeaderWahtsApp);
    setdatainCsv(csvData.data);
    
   }
  // let cn = '';
  // event.studentCoordinator.map(s => (cn += s.coordinatorName + ' '));
  // console.log(cn);
  const fileHeaders= [
    {label: "EventName", key: "csvData.data.teams[0].teamLeaderName"},
    {label: "Leader Name", key: "csvData.data.teams[0].teamLeaderName"},
    {label: "Team Name", key: "csvData.data.teams[0].teamName"},
    {label: "LeaderWhtsapp", key: "csvData.data.teams[0].teamLeaderWahtsApp"}
    
  ]
  return (
    <>
      <td className="">
        <img
          src={`${baseUrl}/profile/${event.photo}`}
          style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
          }}
          alt=""
        />
      </td>
      <td>{event.name}</td>
      <td>{event.eventMode}</td>
      <td>{event.domain}</td>
      <td>{event.startDate}</td>
      <td>{event.endDate}</td>
      {event && <td>{cn}</td>}
      <td>
        <NavLink
          to=""
          className="edit"
          data-toggle="modal"
          onClick={handleShow}
        >
          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Edit"
          >
            &#xE254;
          </i>
        </NavLink>
        <a
          href="#deleteEmployeeModal"
          onClick={onDeleteEvent}
          className="delete"
          data-toggle="modal"
          disabled = {true}
        >
          
          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Delete"
          >
             &#xE872;
             
          </i>
        </a>
        {/* <button 
        
         onClick={downEventData} className='btn btn-success' >getData</button>
        <CSVLink 
        headers={fileHeaders}
         data = {datainCsv}
         filename="results.csv"
          className='btn btn-success' >Download</CSVLink> */}
      </td>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: 'transparent' }}
      ></Modal>
    </>
  );
};
export default Event;
