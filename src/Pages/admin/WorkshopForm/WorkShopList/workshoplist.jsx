import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { WorkshopContext } from './contexts/contexts';
import Workshop from './workshop';

const WorkshopList = () => {
  const { workshop } = useContext(WorkshopContext);

  const handleAddWo = () => navigate('/admin/workshop/add');
  // const handleClose = () => setShow(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              WORKSHOP <b>LIST</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleAddWo}
              className="btn btn-success"
              data-toggle="modal"
              title="Add Workshop"
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span style={{ background: 'transparent', padding: '2px' }}>
                Add New Workshop
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
            <th>Workshop Name </th>
            <th>Workshop Mode</th>
            <th>Link</th>
            <th>End Time</th>
            <th>Student coordinator</th>
            <th>Faculty coordinator</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workshop &&
            workshop.map(w => (
              <tr
                style={{ borderStyle: 'none', color: 'white' }}
                key={w._id}
              >
                <Workshop pWorkshop ={w} />
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
export default WorkshopList;
