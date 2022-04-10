import React from 'react';

const User = ({ user }) => {
  return (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.phone} {user.whatsappPhoneNumber}
      </td>
      <td>
        {!user.teamMembers || user.teamMembers.length === 0
          ? 'None'
          : user.teamMembers.map(t => t.name + ', ')}
      </td>
      <td>
        {!user.events || user.events.length === 0
          ? 'None'
          : user.events.map(e => e.name + ', ')}
      </td>
      <td>
        {!user.workshops || user.workshops.length === 0
          ? 'None'
          : user.workshops.map(w => w.workshopName + ', ')}
      </td>
      {/* <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Edit"
          >
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i
            style={{ color: 'white' }}
            className="material-icons"
            data-toggle="tooltip"
            title="Delete"
          >
            &#xE872;
          </i>
        </a>
      </td> */}
    </>
  );
};
export default User;
