import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminContent.css';
const AdminContent = () => {
  return (
    <div className="admin-list">
      <h2>You are in admin mode</h2>
      <p>Be furious</p>
      <NavLink className="nav-link-css" to={'/admin/workshop'}>
        workshops
      </NavLink>
      <NavLink className="nav-link-css" to={'/admin/events'}>
        events
      </NavLink>
      <NavLink className="nav-link-css" to={'/admin/users'}>
        users
      </NavLink>
      <NavLink className="nav-link-css" to={'/admin/domains'}>
        domain
      </NavLink>
      <NavLink className="nav-link-css" to={'/admin/coordinators'}>
        coordinators
      </NavLink>
    </div>
  );
};

export default AdminContent;
