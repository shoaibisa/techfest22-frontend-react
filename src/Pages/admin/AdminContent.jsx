import React, { useEffect, useState } from 'react';

import './AdminContent.css';
import heroImage from '../../images/SuperAdmin/2.png';
import axios from 'axios';
import { baseUrl, localUrl } from '../../API/api';

const AdminContent = () => {
  const [tfData, setTfData] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/admin/tfdetails`).then(fethData => {
      console.log(fethData.data);
      setTfData(fethData.data);
    });
  }, []);
  return (
    <div className="main">
      <div className="container mt-5 pt-5" style={{ width: '100%' }}>
        <div className="col-sm-12"></div>
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
                <div className="enrollcountbox_numberdisplay">
                  {tfData && tfData.registration}
                </div>
                <div className="enrollecountbox_titledisplay">Registration</div>
              </div>
              <div className="enrollcountbox">
                <div className="enrollcountbox_numberdisplay">
                  {tfData && tfData.institutions}
                </div>
                <div className="enrollecountbox_titledisplay">Institutions</div>
              </div>
              <div className="enrollcountbox">
                <div className="enrollcountbox_numberdisplay">
                  {tfData && tfData.slietians}
                </div>
                <div className="enrollecountbox_titledisplay">SLIETians</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
