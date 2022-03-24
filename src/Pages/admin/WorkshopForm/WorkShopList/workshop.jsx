import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { baseUrl, localUrl } from '../../../../API/api';
import img from '../../../../images/Footfall.svg';
//import UpdateCoordinator from './UpdateCoordinator';
import { WorkshopContext } from './contexts/contexts';

const Workshop = ({ pWorkshop }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const navTOupdate = () => {
    // console.log(user._id);
    navigate('/admin/coordinator/update', { state: { id: pWorkshop._id } });
  };

  const handleClose = () => setShow(false);
  const { deleteWo } = useContext(WorkshopContext);
  const onDeleteWorkshop = () => {
    deleteWo(pWorkshop._id);
  };
  let cn = '';
  if (pWorkshop.studentCoordinator.length > 0) {
    const ccn = pWorkshop.studentCoordinator.map(e => e.coordinatorName);
    cn = ccn.join();
  } else {
    cn = 'Not any coordinator';
  }
  let fc = '';
  if (pWorkshop.facultyCoordinator.length > 0) {
    const ffn = pWorkshop.facultyCoordinator.map(e => e.coordinatorName);
    fc = ffn.join();
  } else {
    fc = 'Not any coordinator';
  }
  return (
    <>
      <td className="">
        <img
          src={`${baseUrl}/profile/${pWorkshop.photo}`}
          style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
          }}
          alt=""
        />
      </td>
      <td>{pWorkshop.workshopName}</td>
      <td>{pWorkshop.workshopMode}</td>
      <td>{pWorkshop.wDriveLink}</td>
      <td>{pWorkshop.endDate}</td>
      <td>{cn}</td>
      <td>{fc}</td>
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
          onClick={onDeleteWorkshop}
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
      {/* <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Workshop</Modal.Title>
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
      </Modal> */}
    </>
  );
};
export default Workshop;
