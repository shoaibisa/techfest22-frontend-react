import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { baseUrl, localUrl } from '../../../API/api';
import img from '../../../images/Footfall.svg';
//import UpdateCoordinator from './UpdateCoordinator';
import { SponsorContext } from './sponsorList/contexts';

const Sponsor = ({ sponser }) => {
  const [show, setShow] = useState(false);

  const { deleteSp } = useContext(SponsorContext);
  const onDeleteSponsor = () => {
    deleteSp(sponser._id);
  };

  return (
    <>
      <td className="">
        <img
          src={`${baseUrl}/profile/${sponser.imageSrc}`}
          style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
          }}
          alt=""
        />
      </td>
      <td>{sponser.title}</td>
      <td>{sponser.link}</td>

      <td>
        <a
          href="#deleteEmployeeModal"
          onClick={onDeleteSponsor}
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
      </Modal> */}
    </>
  );
};
export default Sponsor;
