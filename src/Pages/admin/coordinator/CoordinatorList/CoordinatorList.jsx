import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/CoordinatorContext";
import User from "./Coordinator";
import UpdateCoordinator from "./UpdateCoordinator";
import Pagenation from "./pagenation";

const UserList = () => {
  const { sortedUsers } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleShow = () => 
  navigate('/admin/coordinator/add');
  ;
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(9);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPagesNum = Math.ceil(sortedUsers.length / userPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              COORDINATOR <b>LIST</b>
            </h2>
          </div>
          <div className="col-sm-6" >
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span style={{background: 'transparent' ,padding:'2px'}} >Add New User</span>
            </Button>
          </div>
        </div>
      </div>
      {/* <input placeholder="Search" type="text" value={value}  onChange={filterData}  /> */}
      <table className="table " id ="mytable">
        <thead className="title">
          <tr>
            <th>Photo </th>
            <th>Name </th>
            <th>Email</th>
            <th>Coordinator Type</th>
            <th>Desigination</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user) => (
            <tr 
              style={{ borderStyle: "none", color:'white' }}
              key={user.id}
            >
              <User user={user} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagenation
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        sortedUsers={sortedUsers}
      />
      <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCoordinator />
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
      </Modal>
    </>
  );
};
export default UserList;
