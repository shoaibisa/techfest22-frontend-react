import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import axios from 'axios';

import SponsorSingleContent from './SponsorSingleContent';
import { SponserContext } from './SponserContext';

const SponsorList = () => {
  const { sponsor } = useContext(SponserContext);
  const [show, setShow] = useState(false);

  const handleAddCo = () => navigate('/admin/sponsor/add');
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  console.log(sponsor);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              SPONSORS <b>LIST</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleAddCo}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span style={{ background: 'transparent', padding: '2px' }}>
                Add New SPONSOR
              </span>
            </Button>
          </div>
        </div>
      </div>
      {/* <input placeholder="Search" type="text" value={value}  onChange={filterData}  /> */}
      <table className="table " id="mytable">
        <thead className="title">
          <tr>
            <th>Photo </th>
            <th>Sponsor Name </th>
            <th>Sponsor Link</th>
          </tr>
        </thead>
        <tbody>
          {sponsor &&
            sponsor.map(e => (
              <tr style={{ borderStyle: 'none', color: 'white' }} key={e._id}>
                <SponsorSingleContent sponsor={e} />
              </tr>
            ))}
        </tbody>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* <UpdateCoordinator /> */}</Modal.Body>

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
export default SponsorList;
