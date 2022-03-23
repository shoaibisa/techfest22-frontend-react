import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SponsorContext } from './sponsorList/contexts';
import Sponser from './sponser';
// import UpdateCoordinator from './UpdateCoordinator';
// import Pagenation from './pagenation';
import axios from 'axios';
import { localUrl } from '../../../API/api';

const SponserList = () => {
  const { sponser } = useContext(SponsorContext);

  const handleAddCo = () => navigate('/admin/coordinator/add');

  const navigate = useNavigate();
  console.log(sponser);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              COORDINATORS <b>LIST</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleAddCo}
              className="btn btn-success"
              data-toggle="modal"
              title="Add Coordinator"
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span style={{ background: 'transparent', padding: '2px' }}>
                Add New Coordinator
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
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {sponser &&
            sponser.map(user => (
              <tr
                style={{ borderStyle: 'none', color: 'white' }}
                key={user._id}
              >
                <Sponser sponser={user} />
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
export default SponserList;
