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

  let dateEvent = pWorkshop.endDate.split('T');
  let date = dateEvent[0].split('-');
  let time = dateEvent[1].split(':');
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
      <td>{`${dateEvent[0]} / ${time[0]}: ${time[1]}`}</td>
      <td>{cn}</td>

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
