import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { localUrl } from '../../../API/api';

import { EventContext } from './EventContext';

const Event = ({ event }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { deleteEvent } = useContext(EventContext);
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
  console.log(cn);

  // let cn = '';
  // event.studentCoordinator.map(s => (cn += s.coordinatorName + ' '));
  // console.log(cn);
  return (
    <>
      <td className="">
        <img
          src={`${localUrl}/profile/${event.photo}`}
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
      <td>{event.date}</td>
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
