import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState ,useEffect} from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';

import { EventContext } from './EventContext';
import Event from './Event';

const EventList = () => {
  const authContext = useContext(AuthContext);
  const { event } = useContext(EventContext);
  const [show, setShow] = useState(false);
  const [eventsDetail, seteventsDetail] = useState('')
  const [datainCsv, setdatainCsv] = useState("")
  const geteventsDetail = e => {
    seteventsDetail(e.target.value);
  };

  const [filteredEvent, setFilteredEvent] = useState(event)
  const EventFilter = {
    eventFilter:eventsDetail
  }
    console.log(EventFilter);

  const handleAddCo = () => navigate('/admin/event/add');
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              EVENTS <b>LIST</b>
            </h2>
            <div className="export_event text-center">
              <input className='p-2' type="text" name="eventName"
                  required
                  autoComplete="off"
                  
                //  onChange={geteventsDetail}
                  placeholder="Enter the event name " />
                 
            </div>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleAddCo}
              className="btn btn-success"
              data-toggle="modal"
            >
              
              <i className="material-icons">&#xE147;</i>{' '}
              <span style={{ background: 'transparent', padding: '2px' }}>
                Add New EVENT
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
            <th>Name </th>
            <th>Event Mode</th>
            <th>Domain Type</th>
            <th>Date Start Event</th>
            <th>Date End Event</th>
            <th>Student Coordinators</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {event &&
            event.map(e => (
              <tr style={{ borderStyle: 'none', color: 'white' }} key={e._id}>
                <Event event={e} />
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Pagenation
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        sortedUsers={sortedUsers}
      /> */}
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
export default EventList;
