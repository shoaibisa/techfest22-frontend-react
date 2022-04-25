import React, { useContext, useEffect, useState } from 'react';

import './AdminContent.css';
import heroImage from '../../images/SuperAdmin/2.png';
import axios from 'axios';
import { baseUrl, localUrl } from '../../API/api';
import AuthContext from '../../auth/authContext';
import LoaderSpin from '../../components/UI/loader/LoaderSpin';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';
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
  const fileHeaders= [
    {label: "Email", key: "email"},
    {label: "Name", key: "name"},
    {label: "Mobile", key: "phone"},
    {label: "Events", key: "events[0].name"},
    {label: "", key: "events[1].name"},
    {label: "", key: "events[2].name"},
    {label: "", key: "events[3].name"},
    {label: "", key: "events[4].name"},
    {label: "", key: "events[5].name"},
    {label: "", key: "events[6].name"},
    {label: "", key: "events[7].name"},
    {label: "", key: "events[8].name"},
    {label: "", key: "events[9].name"},
    {label: "", key: "events[10].name"},
    {label: "", key: "events[11].name"},
    {label: "", key: "events[12].name"},
    {label: "", key: "events[13].name"},
    {label: "", key: "events[14].name"},
    {label: "", key: "events[15].name"},
    {label: "", key: "events[16].name"},
    {label: "", key: "events[17].name"},
    {label: "", key: "events[18].name"},
    {label: "", key: "events[19].name"},
    {label: "", key: "events[20].name"}
  ];
  useEffect(()=>{
    exportToCSV();
  }, [])
  const exportToCSV = async()=>{
   
    const csvData  =await axios
    .get(`${baseUrl}/user/allUsers`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
     
    })
    setdatainCsv(csvData.data.users);

  };


    
    console.log(datainCsv);
   
  
    
    
    
    
  

  

 
  
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
            <div className="btnadmin pb-5">
           
            
              <CSVLink className='btn btn-success'
        headers={fileHeaders}
        data={datainCsv}
        filename="results.csv"
       
        
      >
        Export
      </CSVLink>
           

           
            
            </div>
          </div>
        </div>
      )}
    </>
  );
      
};


export default AdminContent;