import { Modal, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UserContext } from './contexts/userContext';
import User from './user';
import { useNavigate } from 'react-router-dom';
//import AddUser from "./AddUser";
//import Pagenation from "./pagenation";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              USER<b>LIST</b>
            </h2>
          </div>
        </div>
      </div>
      {/* <input placeholder="Search" type="text" value={value}  onChange={filterData}  /> */}
      <table className="table " id="mytable">
        <thead className="title">
          <tr>
            <th>Name </th>
            <th>Email</th>
            <td>Phone and Whatsapp</td>
            <th>Team</th>
            <th>Events</th>
            <th>Workshops</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map(user => (
              <tr
                style={{ borderStyle: 'none', color: 'white' }}
                key={user._id}
              >
                <User user={user} />
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
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUser />
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ width: "100%" }}
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
export default UserList;
