import React, { useState,useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button } from 'react-bootstrap';
import { baseUrl,localUrl } from '../../../API/api';
import LoaderSpin from '../../../components/UI/loader/LoaderSpin';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import { imgFileCheck } from '../../../Helper/ErrorHandle';
const EventForm = () => {
  const [eName, setEname] = useState('');
  const [eDescription, setEDescription] = useState('');
  const [eImage, setEimage] = useState(null);
  const [eDrive, setEdrive] = useState('');
  const [eDate, setEdate] = useState('');
  const [eEdate, setEeDate] = useState('');
  const [studentCoordinator, setstudentCoordinator] = useState([]);
  const [facultyCoordinator, setfacultyCoordinator] = useState([]);
  const [coordinatorItems, setCoordinatorItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errosMade, setErrosMade] = useState(); 

  useEffect(() => {
    setIsLoading(true);
    fetch(`${localUrl}/coordinator/get-all-details`)
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
  const getEdrive = (e) => {
    setEdrive(e.target.value);
  };
  const getEdate = (e) => {
    setEdate(e.target.value);
  };
  const getEeDate = (e) => {
    setEeDate(e.target.value);
  };
  const getstudentCoordinator = (selectedList, selectedItem) => {
    setstudentCoordinator(selectedList);
  };

  const getfacultyCoordinator = (selectedList, selectedItem) => {
    setfacultyCoordinator(selectedList);
  };
  const getImageHandle = e => {
    setEimage(e.target.files[0]);
    //console.log(e.target.files[0]);
  };
  const onSubmitBtnClick = async event => {
    event.preventDefault(); //relaod prevent

    if (
      studentCoordinator.length === 0 ||
      facultyCoordinator.length === 0 ||
      eName.trim().length === 0 ||
      eDescription.trim().length === 0
    ) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty',
      });
      return;
    }

    if (eDate >= eEdate) {
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
    const dataFc = facultyCoordinator.map(e => {
      return e.value;
    });


  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };

 

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
        <div className="col-sm-12">
          <h2 style={{ color: 'white' }}>Add Event</h2>
          <Form onSubmit={onSubmitBtnClick}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'white' }}>Name</Form.Label>
              <Form.Control
                style={{ color: 'white', background: 'transparent' }}
                size="sm"
                type="text"
                placeholder="Enter Name *"
                onChange = {getEname}
                value = {eName}
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
                onChange = {getEdescription}
                value = {eDescription}
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{ color: 'white' }}>Uplode Image</Form.Label>
              <Form.Control
                style={{ background: 'transparent' }}
                type="file"
                size="sm"
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
                  onChange={getEdate}
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
                  onChange={getEeDate}
                />
              </Form.Group>
            </div>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{ color: 'white' }}>
                Faculty Coordinator
              </Form.Label>
              <Multiselect
                  onSelect={getfacultyCoordinator}
                // onChange={getfacultyCoordinator}
                  // options={dataC}
                displayValue="coordinator"
                showCheckbox="true"
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{ color: 'white' }}>
                Student Coordinator
              </Form.Label>
              <Multiselect
                  onSelect={getstudentCoordinator}
                // onChange={getstudentCoordinator}
                  // options={dataC}
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
