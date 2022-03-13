import React from "react";

const User = ({user}) => {
  return (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i  style={{color:'white'}} className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i  style={{color:'white'}} className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </>
  );
};
export default User;
