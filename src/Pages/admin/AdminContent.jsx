import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className="side-bar">
          <div className="side-bar-logo-outercontainer">
            <div className="side-bar-logo">
              <img src="/images/2.png" alt="" />
            </div>
          </div>
          <ul className="side-bar-ul">
            <li className="side-bar-navlist">
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li className="side-bar-navlist">
              <NavLink to="/admin/coordinators">Domain</NavLink>
            </li>
            <li className="side-bar-navlist">
              <NavLink to="/admin/events">Events</NavLink>
            </li>
            <li className="side-bar-navlist">
              <NavLink to="/admin/workshop">Workshop</NavLink>
            </li>
            <li className="side-bar-navlist">
              <NavLink to="/admin/sponsor">Sponser</NavLink>
            </li>
          </ul>
        </div>
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
          {/* <!-----------Domain Starts From Here-----------------> */}
          <div className="superadmin_domainselection_mainheading">
            <span>Domain</span>
          </div>
          <form className="super_admin_domain_form">
            <table>
              <tr className="super_admin_domain_name">
                <td>
                  <p>Domain Name</p>
                  <select>
                    <option value="Chemfor"> Chemfor</option>
                    <option value="Electrica"> Electrica</option>
                    <option value="Kermis"> Kermis</option>
                    <option value="Karyarachna"> Karyarachna</option>
                    <option value="Mechanica"> Mechanica</option>
                    <option value="Plexus"> Plexus</option>
                    <option value="Robozar"> Robozar</option>
                  </select>
                </td>
                <td>
                  <div>
                    <p>Domain Picture</p>
                    <input type="file" name="file" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>Enter Description(max 50 words)</p>
                  <textarea
                    name="Description"
                    cols="40"
                    rows="4"
                    placeholder="Write the Description Here"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit" className="submit_button">
                    Save
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
