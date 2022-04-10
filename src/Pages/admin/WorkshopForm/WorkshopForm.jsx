import React, { useState, useEffect, useContext } from 'react';
import './WorkshopForm.css';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl, localUrl } from '../../../API/api';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import LoaderSpin from '../../../components/UI/loader/LoaderSpin';
import AuthContext from '../../../auth/authContext';

// import { NavLink } from 'react-router-dom';

const WorkshopForm = () => {
  const authContext = useContext(AuthContext);
  const [wsName, setwsName] = useState('');
  const [wsDesc, setwsDesc] = useState('');
  const [wDriveLink, setWdriveLink] = useState('');
  const [workshopMode, setWorkshopMode] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [studentCoordinator, setstudentCoordinator] = useState([]);
  const [coordinatorItems, setCoordinatorItems] = useState([]);
  const [selectedImage, setselectedImage] = useState(null);
  const [errosMade, setErrosMade] = useState(); //undefined

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/coordinator/get-all-details`, {
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    })
      .then(res => res.json())
      .then(
        result => {
          setCoordinatorItems(result['c']); //only coordinator response in c[] array
          setIsLoading(false);
        },

        error => {
          setIsLoading(true);
        }
      );
  }, []);

  const getwsName = e => {
    setwsName(e.target.value);
  };

  const getwsDesc = e => {
    setwsDesc(e.target.value);
  };

  const getstartDate = e => {
    setstartDate(e.target.value);
  };
  const getendDate = e => {
    setendDate(e.target.value);
  };
  const getstudentCoordinator = (selectedList, selectedItem) => {
    setstudentCoordinator(selectedList);
  };

  const getWtype = e => {
    setWorkshopMode(e.target.value.toLowerCase());
  };

  const getImageHandle = e => {
    setselectedImage(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  const getWdrveLink = e => {
    setWdriveLink(e.target.value);
  };

  const onSubmitBtnClick = async event => {
    event.preventDefault(); //relaod prevent

    if (
      studentCoordinator.length === 0 ||
      wsName.trim().length === 0 ||
      wsDesc.trim().length === 0
    ) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty',
      });
      return;
    }

    if (startDate >= endDate) {
      setErrosMade({
        title: 'Error',
        message: 'Start time should not be greater than End time',
      });
      return;
    }

    // const cStudent = studentCoordinator.join(',');
    // console.log(cStudent, studentCoordinator);
    const dataSc = studentCoordinator.map(e => {
      return e.value;
    });

    // return console.log(dataSc, dataFc);

    let zData = new FormData();
    zData.append('workshop', selectedImage);
    zData.append('studentCoordinator', dataSc);
    zData.append('wsName', wsName);
    zData.append('wsDesc', wsDesc);
    zData.append('workshopMode', workshopMode);
    zData.append('wLinkDrive', wDriveLink);
    zData.append('startDate', startDate);
    zData.append('endDate', endDate);
    //return console.log(zData);
    // zData.append('studentCoordinator', sc);
    axios
      .post(`${baseUrl}/workshop/create`, zData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          Authorization: 'Bearer ' + authContext.token,
        },
        onUploadProgress: ProgressEvent => {
          console.log(
            'Upload image progress ' +
              Math.round(ProgressEvent.loaded / ProgressEvent.total) * 100 +
              ' '
          );
        },
      })
      .then(results => {
        setIsLoading(true);
        if (results.status !== 200 || results.status !== 200) {
          // console.log(results);
          setErrosMade({
            title: results.data.title,
            message: results.data.message,
          });
        }
        setErrosMade({
          title: results.data.title,
          message: results.data.message,
        });
        setIsLoading(false);
        setwsName('');
        setwsDesc('');
        setWdriveLink('');
        setstartDate(null);
        setendDate(null);
        setstudentCoordinator([]);
        setselectedImage(null);
        setWorkshopMode('');
      })
      .catch(err => {
        setIsLoading(true);
        setErrosMade({
          title: 'Error',
          message: err,
        });
        console.log(err);
      });
  };

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

  if (isLoading) {
    // return <div style={{ marginTop: '100px' }}>Loading...</div>;
    return (
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <LoaderSpin />
      </div>
    );
  } else {
    const dataOnlyCs = coordinatorItems.filter(
      w => w.coordinatorType === 'student'
    );

    const dataCs = dataOnlyCs.map(w => {
      const cd = w.coordinatorName + ' ' + w.coordinatorEmail;
      return { coordinator: cd, value: w._id };
    });

    return (
      <>
        {errosMade && (
          <ErrorModel
            title={errosMade.title}
            message={errosMade.message}
            onErrosClick={onErrosMadeHandle}
          />
        )}
        <div className="main" style={{ paddingBottom: '200px' }}>
          <div className="container mt-5 pt-5" style={{ width: '50%' }}>
            <div className="col-sm-12 pb-3">
              <h2 style={{ color: 'white' }}>Add Workshop</h2>

              <Form className="pb-5" onSubmit={onSubmitBtnClick}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    size="sm"
                    type="text"
                    placeholder="Enter Name *"
                    onChange={getwsName}
                  />
                </Form.Group>
                <Form.Group controlId="form.Textarea" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Workshop Description
                  </Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    as="textarea"
                    rows={4}
                    placeholder="Enter Description(max 50 words) *"
                    onChange={getwsDesc}
                  />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Uplode Image
                  </Form.Label>
                  <Form.Control
                    style={{ background: 'transparent', color: 'white' }}
                    type="file"
                    size="sm"
                    accept=".png, .jpg, .jpeg"
                    onChange={getImageHandle}
                  />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Drive Link *
                  </Form.Label>
                  <Form.Control
                    style={{ background: 'transparent', color: 'white' }}
                    type="text"
                    placeholder="https://xyz.com"
                    size="sm"
                    onChange={getWdrveLink}
                  />
                </Form.Group>

                <div
                  className=""
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Form.Group controlId="dob" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>
                      Start Date & Time
                    </Form.Label>
                    <Form.Control
                      style={{ width: '270px' }}
                      type="datetime-local"
                      name="dob"
                      placeholder="Date of Birth"
                      onChange={getstartDate}
                    />
                  </Form.Group>

                  <Form.Group controlId="dob" className="mb-3">
                    <Form.Label style={{ color: 'white' }}>
                      End Date & Time
                    </Form.Label>
                    <Form.Control
                      style={{ width: '270px' }}
                      type="datetime-local"
                      name="dob"
                      placeholder="Date of Birth"
                      onChange={getendDate}
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Event Mode</Form.Label>
                  <Form.Select
                    style={{ color: 'white', background: 'transparent' }}
                    aria-label="Default select example"
                    onChange={getWtype}
                  >
                    <option style={{ color: 'black' }}>---select---</option>
                    <option style={{ color: 'black' }} value="online">
                      Online
                    </option>
                    <option style={{ color: 'black' }} value="offline">
                      Offline
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Student Coordinator
                  </Form.Label>
                  <Multiselect
                    onSelect={getstudentCoordinator}
                    // onChange={getstudentCoordinator}
                    options={dataCs}
                    displayValue="coordinator"
                    showCheckbox="true"
                  />
                </Form.Group>

                <Button
                  style={{ width: '100%' }}
                  variant="success"
                  type="submit"
                  block
                >
                  Add Workshop
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default WorkshopForm;
