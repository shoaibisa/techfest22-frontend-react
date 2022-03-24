import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../../../API/api';
import { localUrl } from '../../../API/api';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import LoaderSpin from '../../../components/UI/loader/LoaderSpin';
import { imgFileCheck } from '../../../Helper/ErrorHandle';
import AuthContext from '../../../auth/authContext';

const CoordinatorForm = () => {
  const authContext = useContext(AuthContext);
  const [wsName, setwsName] = useState('');
  const [cEmail, setCemail] = useState('');
  const [cNumber, setCnumber] = useState('');
  const [cType, setCtype] = useState('');
  const [cDeg, setCdeg] = useState('');
  const [selectedImage, setselectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errosMade, setErrosMade] = useState(); //undefined

  const getwsName = e => {
    setwsName(e.target.value);
  };

  const getEmail = e => {
    setCemail(e.target.value);
  };

  const getNumber = e => {
    setCnumber(e.target.value);
  };
  const getCtype = e => {
    setCtype(e.target.value.toLowerCase());
  };
  const getCdeg = e => {
    setCdeg(e.target.value);
  };
  const getImageHandle = e => {
    if (imgFileCheck(e.target.files[0].name)) {
      //TO DO
      setselectedImage(e.target.files[0]);
    } else {
      setErrosMade({
        title: 'Error',
        message: 'Only jpg/jpeg and png files are allowed!',
      });
    }
  };

  const onSubmitBtnClick = async event => {
    event.preventDefault();

    if (!selectedImage) {
      setErrosMade({
        title: 'Error',
        message: 'Only jpg/jpeg and png files are allowed!',
      });
      return;
    }

    if (
      wsName.trim().length === 0 ||
      cEmail.trim().length === 0 ||
      cNumber.trim().length === 0 ||
      cType.trim().length === 0
    ) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty!',
      });
      return;
    }

    //   return console.log(wsName);

    let zData = new FormData();
    zData.append('coordinator', selectedImage);
    zData.append('coordinatorName', wsName);
    zData.append('coordinatorPhone', cNumber);
    zData.append('coordinatorEmail', cEmail);
    zData.append('coordinatorType', cType);
    zData.append('coordinatorDesignation', cDeg);
    // return console.log(zData);
    axios
      .post(`${baseUrl}/coordinator/creating`, zData, {
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
        if (results.data.authError) {
          authContext.logout();
          return;
        }
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
      })
      .catch(err => {
        setErrosMade({
          title: 'Error',
          message: err,
        });
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  return (
    <>
      {' '}
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {isLoading && <LoaderSpin />}
      <div className="main">
        <div className="container mt-5 pt-5" style={{ width: '50%' }}>
          <div className="col-sm-12">
            <h2 style={{ color: 'white' }}>Add Coordinator</h2>

            <Form onSubmit={onSubmitBtnClick}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                <Form.Control
                  style={{ color: 'white', background: 'transparent' }}
                  size="sm"
                  type="text"
                  placeholder="Enter Name *"
                  onChange={getwsName}
                  value={wsName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                <Form.Control
                  style={{ color: 'white', background: 'transparent' }}
                  size="sm"
                  type="email"
                  placeholder="Enter Email *"
                  onChange={getEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Number</Form.Label>
                <Form.Control
                  style={{ color: 'white', background: 'transparent' }}
                  type="Number"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  size="sm"
                  placeholder="Enter your phone no. *"
                  onChange={getNumber}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Uplode Image</Form.Label>
                <Form.Control
                  style={{ background: 'transparent', color: 'white' }}
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  size="sm"
                  onChange={getImageHandle}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>
                  Coordinator type
                </Form.Label>
                <Form.Select
                  style={{ color: 'white', background: 'transparent' }}
                  aria-label="Default select example"
                  onChange={getCtype}
                >
                  <option style={{ color: 'black' }}>---select---</option>
                  <option style={{ color: 'black' }} value="student">
                    Student
                  </option>
                  <option style={{ color: 'black' }} value="faculty">
                    Faculty
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>
                  Coordinator Desigination
                </Form.Label>
                <Form.Control
                  style={{ color: 'white', background: 'transparent' }}
                  size="sm"
                  type="text"
                  placeholder="Enter coodinator desigination *"
                  onChange={getCdeg}
                />
              </Form.Group>

              <Button
                style={{ width: '100%' }}
                variant="success"
                type="submit"
                block
              >
                Add Coordinator
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoordinatorForm;
