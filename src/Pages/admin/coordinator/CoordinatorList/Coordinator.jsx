import React,{useState} from "react";
import { Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from '../../../../images/Footfall.svg'
const User = ({user}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const handleClose = () => setShow(false); 
  return (
    <>
      <td className=""><img src={img} style={{width: "50px",
  height: "50px",
  background: "white",
  borderRadius: "50%"}} alt=""/></td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.type}</td>
      <td>{user.desigination}</td>
      <td>{user.phone}</td>
      <td>
        <NavLink to="" className="edit" data-toggle="modal" onClick={handleShow}>
          <i  style={{color:'white'}} className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </NavLink>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i  style={{color:'white'}} className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "transparent" }}
      ></Modal>
    </>
  );
};
export default User;
