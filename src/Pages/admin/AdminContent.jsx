import React, { useContext, useEffect, useState } from 'react';

import './AdminContent.css';
import heroImage from '../../images/SuperAdmin/2.png';
import axios from 'axios';
import { baseUrl, localUrl } from '../../API/api';
import AuthContext from '../../auth/authContext';
import LoaderSpin from '../../components/UI/loader/LoaderSpin';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';
import fs from 'file-saver';
import * as XLSX from 'xlsx';
import { CSVLink } from 'react-csv';



  const AdminContent = () => {
  const authContext = useContext(AuthContext);
  const [tfData, setTfData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errosMade, setErrosMade] = useState();
  const [datainCsv, setdatainCsv] = useState("")

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/admin/tfdetails`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(fethData => {
        if (
          fethData.status != 200 ||
          (fethData.status != 201 && fethData.data.authError)
        ) {
          setErrosMade({
            title: 'Auth Error',
            message: 'Wrong user auth!',
          });
          authContext.logout();
          return;
        }
        setTfData(fethData.data);
      });
    setIsLoading(false);
  }, []);
  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  
  const exportToCSV = async()=>{
    const csvData  =await axios
    .get(`${baseUrl}/user/allUsers`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
     
    })

    setdatainCsv(csvData.data.users);
    
    

    const content = JSON.parse(fs.readFileSync())
  

    
   
    // const ws = XLSX.utils.json_sheet(csvData.data);
    // const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    // const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // const data = new Blob([excelBuffer], {type: fileType});

    // FileSaver.saveAs(data, 'userdata' + fileExtension);

} 
  
  return (
  
    <>
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      <div style={{ textAlign: 'center' }}>
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
            <div className="btnadmin">
           
              <a  className="button button5" onClick={(e) => exportToCSV()}>Download</a>
           

           
            
            </div>
          </div>
        </div>
      )}
    </>
  );
      
};


export default AdminContent;
