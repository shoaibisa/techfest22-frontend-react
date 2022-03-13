import React from 'react';

import './AdminContent.css';
import heroImage from '../../images/SuperAdmin/2.png';

const AdminContent = () => {
  return (
    // <div classNameName="admin-list">
    //   <h2>You are in admin mode</h2>
    //   <p>Be furious</p>
    //   <NavLink classNameName="nav-link-css" to={'/admin/workshop'}>
    //     workshops
    //   </NavLink>
    //   <NavLink classNameName="nav-link-css" to={'/admin/events'}>
    //     events
    //   </NavLink>
    //   <NavLink classNameName="nav-link-css" to={'/admin/users'}>
    //     users
    //   </NavLink>
    //   <NavLink classNameName="nav-link-css" to={'/admin/domains'}>
    //     domain
    //   </NavLink>
    //   <NavLink classNameName="nav-link-css" to={'/admin/coordinators'}>
    //     coordinators
    //   </NavLink>
    // </div>
    <div>
      <div className="full_page_domain">
        <div className="domain_right_side_page">
          <div className="superadmin_welcomeoutercontainer">
            <div className="superadmin_welcome">
              <div className="superadmin_welcome_logo">
                <img src={heroImage} alt="" />
              </div>
              <div className="superadmin_welcome_speech">
                <div className="superadmin_welcome_speech_intro">
                  Namaste! Super Admin
                </div>
                <div className="superadmin_welcome_speech_tag">
                  Sant Longowal Institute Of Engineering & Technology
                </div>
              </div>
            </div>
          </div>
          <div className="superadmin_enrollcountoutercontainer">
            <div className="enrollcountbox">
              <div className="enrollcountbox_numberdisplay">2000</div>
              <div className="enrollecountbox_titledisplay">Registration</div>
            </div>
            <div className="enrollcountbox">
              <div className="enrollcountbox_numberdisplay">40</div>
              <div className="enrollecountbox_titledisplay">Institutions</div>
            </div>
            <div className="enrollcountbox">
              <div className="enrollcountbox_numberdisplay">1000</div>
              <div className="enrollecountbox_titledisplay">SLIETians</div>
            </div>
          </div>
             </div>
             </div>
    </div>
  );
};

export default AdminContent;
