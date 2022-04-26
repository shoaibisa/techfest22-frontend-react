import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink , Link, useNavigate} from 'react-router-dom';
import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Eventdata from './Eventdata';


import { EventContext } from './EventContext';
import { CSVLink } from 'react-csv';
import path from 'path-browserify';

const Event = ({ event }) => {
  
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { deleteEvent } = useContext(EventContext);
  const [datainCsv, setdatainCsv] = useState("")
  let navigate = useNavigate()
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
  const downEventData = async () => {

    const csvData = await axios
      .get(`${baseUrl}/event/getEventById/${event._id}`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
        

      })
      console.log(csvData.data);
      setdatainCsv(csvData.data)
const data = [
  {name:"pravin"},
  {name:"HArsh"},
  {name:"Danish"}
]
if(csvData)
{
  navigate('/admin/event/eventsdata',{state:csvData.data})
}

  }

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
        {/* <a
          href="#deleteEmployeeModal"
          onClick={onDeleteEvent}
          className="delete"
          data-toggle="modal"
          disabled={true}
        >

          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Delete"
          >
            &#xE872;

          </i>
        </a> */}
        
            <div onClick={downEventData} 
         className='btn btn-success'
      
           >Get</div>
            
         
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
