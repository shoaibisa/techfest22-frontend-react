import React, { useState, useEffect, useContext } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button } from 'react-bootstrap';
import { baseUrl, localUrl } from '../../../API/api';
import LoaderSpin from '../../../components/UI/loader/LoaderSpin';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import { imgFileCheck } from '../../../Helper/ErrorHandle';
import axios from 'axios';
import AuthContext from '../../../auth/authContext';

const EventForm = () => {
  const authContext = useContext(AuthContext);
  const [eName, setEname] = useState('');
  const [eDescription, setEDescription] = useState('');
  const [eImage, setEimage] = useState(null);
  const [eDrive, setEdrive] = useState('');
  const [eStartDate, setEstartdate] = useState('');
  const [eEndDate, setEndDate] = useState('');
  const [studentCoordinator, setstudentCoordinator] = useState([]);
  // const [facultyCoordinator, setFacultyCoordinator] = useState([]);
  const [coordinatorItems, setCoordinatorItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errosMade, setErrosMade] = useState();
  const [eventType, setEtype] = useState('');
  const [eDomain, setEdomain] = useState('');
  const [ePrizeWorth, setEprizeWorth] = useState('');
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

  const getEname = e => {
    setEname(e.target.value);
  };
  const getEdescription = e => {
    setEDescription(e.target.value);
  };
  const getEdrive = e => {
    setEdrive(e.target.value);
  };
  const getStartdate = e => {
    setEstartdate(e.target.value);
  };
  const getendDate = e => {
    setEndDate(e.target.value);
  };
  const getEtype = e => {
    setEtype(e.target.value.toLowerCase());
  };
  const getEdomain = e => {
    setEdomain(e.target.value.toLowerCase());
  };
  const getstudentCoordinator = (selectedList, selectedItem) => {
    setstudentCoordinator(selectedList);
  };
  const getEPrize = e => {
    setEprizeWorth(e.target.value);
  };

  // const getfacultyCoordinator = (selectedList, selectedItem) => {
  //   setFacultyCoordinator(selectedList);
  // };
  const getImageHandle = e => {
    setEimage(e.target.files[0]);
    //console.log(e.target.files[0]);
  };
  const onSubmitBtnClick = async event => {
    event.preventDefault(); //relaod prevent

    if (
      studentCoordinator.length === 0 ||
      eName.trim().length === 0 ||
      eDescription.trim().length === 0
    ) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty',
      });
      return;
    }

    if (eStartDate >= eEndDate) {
      setErrosMade({
        title: 'Error',
        message: 'Start time should not be greater than End time',
      });
      return;
    }

    const dataSc = studentCoordinator.map(e => {
      return e.value;
    });

    let zData = new FormData();
    zData.append('name', eName);
    zData.append('description', eDescription);
    zData.append('startDate', eStartDate);
    zData.append('endDate', eEndDate);
    zData.append('eventMode', eventType);
    zData.append('domain', eDomain);
    zData.append('event', eImage);
    zData.append('driveLink', eDrive);
    zData.append('studentCoordinator', dataSc);
    zData.append('ePrizeWorth', ePrizeWorth);
    axios
      .post(`${baseUrl}/event/addEvent`, zData, {
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
        // console.log(results);
        setIsLoading(true);
        if (results.status !== 200 || results.status !== 200) {
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
        setEname('');
        setEDescription('');
        setEimage(null);
        setEdrive('');
        setEstartdate('');
        setEndDate('');
        setstudentCoordinator([]);
        setEtype('');
        setEdomain('');
      })
      .catch(err => {
        setErrosMade({
          title: 'Error',
          message: err,
        });
        console.log(err);
      });
  };

  // // const cStudent = studentCoordinator.join(',');
  // // console.log(cStudent, studentCoordinator);
  // const dataSc = studentCoordinator.map(e => {
  //   return e.value;
  // });
  // const dataFc = facultyCoordinator.map(e => {
  //   return e.value;
  // });

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
    // const dataOnlyFs = coordinatorItems.filter(
    //   w => w.coordinatorType === 'faculty'
    // );
    const dataCs = dataOnlyCs.map(w => {
      const cd = w.coordinatorName + ' ' + w.coordinatorEmail;
      return { coordinator: cd, value: w._id };
    });
    // const dataCf = dataOnlyFs.map(w => {
    //   const cd = w.coordinatorName + ' ' + w.coordinatorEmail;
    //   return { coordinator: cd, value: w._id };
    // });

    return (
      <>
        {errosMade && (
          <ErrorModel
            title={errosMade.title}
            message={errosMade.message}
            onErrosClick={onErrosMadeHandle}
          />
        )}

        <div className="main">
          <div className="container mt-5 pt-5" style={{ width: '50%' }}>
            <div className="col-sm-12 pb-3">
              <h2 style={{ color: 'white' }}>Add Event</h2>
              <Form className="pb-5" onSubmit={onSubmitBtnClick}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    size="sm"
                    type="text"
                    placeholder="Enter Name *"
                    onChange={getEname}
                    value={eName}
                  />
                </Form.Group>
                <Form.Group controlId="form.Textarea" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Event Description
                  </Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    as="textarea"
                    rows={4}
                    placeholder="Enter Description(max 50 words) *"
                    onChange={getEdescription}
                    value={eDescription}
                  />
                </Form.Group>
                <Form.Group controlId="form.Textarea" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Prize Worth
                  </Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    type="number"
                    placeholder="Enter Prize worth of event *"
                    onChange={getEPrize}
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
                  <Form.Label style={{ color: 'white' }}>Drive Link</Form.Label>
                  <Form.Control
                    style={{ color: 'white', background: 'transparent' }}
                    type="text"
                    size="sm"
                    onChange={getEdrive}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Event Mode</Form.Label>
                  <Form.Select
                    style={{ color: 'white', background: 'transparent' }}
                    aria-label="Default select example"
                    onChange={getEtype}
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
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Domain</Form.Label>
                  <Form.Select
                    style={{ color: 'white', background: 'transparent' }}
                    aria-label="Default select example"
                    onChange={getEdomain}
                  >
                    <option style={{ color: 'black' }}>---select---</option>
                    <option style={{ color: 'black' }} value="chemfor">
                      Chemfor
                    </option>
                    <option style={{ color: 'black' }} value="electrica">
                      Electrica
                    </option>
                    <option style={{ color: 'black' }} value="karyarachna">
                      Karyarachna
                    </option>
                    <option style={{ color: 'black' }} value="kermis">
                      Kermis
                    </option>
                    <option style={{ color: 'black' }} value="mechanica">
                      Mechanica
                    </option>
                    <option style={{ color: 'black' }} value="plexus">
                      Plexus
                    </option>
                    <option style={{ color: 'black' }} value="robozar">
                      Robozar
                    </option>
                    <option style={{ color: 'black' }} value="genesis">
                      Genesis
                    </option>
                  </Form.Select>
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
                      onChange={getStartdate}
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
                {/* <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Faculty Coordinator
                  </Form.Label>
                  <Multiselect
                    onSelect={getfacultyCoordinator}
                    onChange={getfacultyCoordinator}
                    options={dataCf}
                    displayValue="coordinator"
                    showCheckbox="true"
                  />
                </Form.Group> */}
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{ color: 'white' }}>
                    Student Coordinator
                  </Form.Label>
                  <Multiselect
                    onSelect={getstudentCoordinator}
                    onChange={getstudentCoordinator}
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
                  Add Event
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default EventForm;
