import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { baseUrl, localUrl } from '../../../../API/api';
import img from '../../../../images/Footfall.svg';
import UpdateCoordinator from './UpdateCoordinator';
import { CoordinatorContext } from './contexts/CoordinatorContext';

const Coordinator = ({ user }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const navTOupdate = () => {
    // console.log(user._id);
    navigate('/admin/coordinator/update', { state: { id: user._id } });
  };

  const handleClose = () => setShow(false);
  const { deleteCo } = useContext(CoordinatorContext);
  const onDeleteCoordinator = () => {
    deleteCo(user._id);
  };
  return (
    <>
      <td className="">
        <img
          src={`${baseUrl}/profile/${user.photo}`}
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
        <a
          style={{ cursor: 'pointer' }}
          className="edit"
          data-toggle="modal"
          onClick={navTOupdate}
        >
          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Edit"
          >
            &#xE254;
          </i>
        </a>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Coordinator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCoordinator />
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ width: '100%' }}
            varient="secondary"
            onClick={handleClose}
          >
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Coordinator;
