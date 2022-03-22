import React, { useContext, useEffect, useState } from 'react';

import './AdminContent.css';
import heroImage from '../../images/SuperAdmin/2.png';
import axios from 'axios';
import { baseUrl, localUrl } from '../../API/api';
import AuthContext from '../../auth/authContext';
import LoaderSpin from '../../components/UI/loader/LoaderSpin';

const AdminContent = () => {
  const authContext = useContext(AuthContext);
  const [tfData, setTfData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/admin/tfdetails`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(fethData => {
        // console.log(fethData.data);
        setTfData(fethData.data);
      });
    setIsLoading(false);
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        {isLoading && <LoaderSpin />}
      </div>

      {!isLoading && (
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
                    <div className="enrollecountbox_titledisplay">
                      Registration
                    </div>
                  </div>
                  <div className="enrollcountbox">
                    <div className="enrollcountbox_numberdisplay">
                      {tfData && tfData.institutions}
                    </div>
                    <div className="enrollecountbox_titledisplay">
                      Institutions
                    </div>
                  </div>
                  <div className="enrollcountbox">
                    <div className="enrollcountbox_numberdisplay">
                      {tfData && tfData.slietians}
                    </div>
                    <div className="enrollecountbox_titledisplay">
                      SLIETians
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminContent;
