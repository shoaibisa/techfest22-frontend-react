import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { localUrl } from '../../../../API/api';
import img from '../../../../images/Footfall.svg';
import { CoordinatorContext } from './contexts/CoordinatorContext';

const Coordinator = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { deleteCo } = useContext(CoordinatorContext);
  const onDeleteCoordinator = () => {
    deleteCo(user._id);
  };
  return (
    <>
      <td className="">
        <img
          src={`${localUrl}/profile/${user.photo}`}
          style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
          }}
          alt=""
        />
      </td>
      <td>{user.coordinatorName}</td>
      <td>{user.coordinatorType}</td>
      <td>{user.coordinatorEmail}</td>
      <td>{user.coordinatorDesignation}</td>
      <td>{user.coordinatorPhone}</td>
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
          onClick={onDeleteCoordinator}
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
export default Coordinator;
