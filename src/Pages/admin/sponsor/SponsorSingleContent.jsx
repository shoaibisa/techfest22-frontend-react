import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl, localUrl } from '../../../API/api';
import { SponserContext } from './SponserContext';

const SponsorSingleContent = ({ sponsor }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { deleteSponsor } = useContext(SponserContext);
  //   console.log(sponsor);

  const onDeleteSponsor = () => {
    deleteSponsor(sponsor._id);
  };

  return (
    <>
      <td className="">
        <img
          src={`${baseUrl}/profile/${sponsor.imageSrc}`}
          style={{
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
          }}
          alt=""
        />
      </td>
      <td>{sponsor.title}</td>
      <td>{sponsor.link}</td>

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
      <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: 'transparent' }}
      ></Modal>
    </>
  );
};
export default SponsorSingleContent;
