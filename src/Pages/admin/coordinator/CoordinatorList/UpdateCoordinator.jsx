import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import ErrorModel from '../../../../components/UI/ErrorModel/ErrorModel';
import LoaderSpin from '../../../../components/UI/loader/LoaderSpin';
import { imgFileCheck } from '../../../../Helper/ErrorHandle';
import { baseUrl, localUrl } from '../../../../API/api';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../../../auth/authContext';
const UpdateCoordinator = () => {
  const authContext = useContext(AuthContext);
  const [cName, setcName] = useState('');
  const [cEmail, setCemail] = useState('');
  const [cNumber, setCnumber] = useState('');
  const [cType, setCtype] = useState('');
  const [cDeg, setCdeg] = useState('');
  const [selectedImage, setselectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errosMade, setErrosMade] = useState(); //undefined
  const [fetched, setFetched] = useState(false);
  const cId = useLocation();
  let cccid = cId.state != null ? cId.state.id : '6230c1e3eb2653bdad716000';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await axios
      .get(`${baseUrl}/coordinator/get/${cccid}`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        //  console.log(results);

        if (
          results.status !== 200 ||
          (results.status !== 201 && results.data.isError)
        ) {
          setErrosMade({
            title: results.data.title,
            message: results.data.message,
          });
          return;
        }
        setErrosMade(false);
        setcName(results.data.data.coordinatorName);
        setCemail(results.data.data.coordinatorEmail);
        setCnumber(results.data.data.coordinatorPhone);
        setCtype(results.data.data.coordinatorType);
        setCdeg(results.data.data.coordinatorDesignation);
        setImageUrl(results.data.data.photo);
        // setselectedImage();
      });

    return () => {};
  }, [authContext.token, cccid]);

  const getwsName = e => {
    setcName(e.target.value);
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
      setImageUrl(e.target.files[0]);
    } else {
      setErrosMade({
        title: 'Error',
        message: 'Only jpg/jpeg and png files are allowed!',
      });
    }
  };

  const onSubmitBtnClick = async event => {
    event.preventDefault();

    // if (!selectedImage) {
    //   setErrosMade({
    //     title: 'Error',
    //     message: 'Only jpg/jpeg and png files are allowed!',
    //   });
    //   return;
    // }

    // return console.log(cName, imageUrl);

    if (
      cName.trim().length === 0 ||
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

    let zData = new FormData();
    zData.append('cid', cccid);
    // zData.append('coordinator', selectedImage);
    zData.append('coordinatorName', cName);
    zData.append('coordinatorPhone', cNumber);
    zData.append('coordinatorEmail', cEmail);
    zData.append('coordinatorType', cType);
    zData.append('coordinatorDesignation', cDeg);
    zData.append('imageUrl', imageUrl);

    const data = {
      coordinator: cccid,
      coordinatorName: cName,
      coordinatorPhone: cNumber,
      coordinatorEmail: cEmail,
      coordinatorType: cType,
      coordinatorDesignation: cDeg,
      imageUrl: imageUrl,
    };

    // return console.log(data);

    axios
      .put(`${baseUrl}/coordinator/update/${cccid}`, zData, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        setIsLoading(true);
        if (results.status !== 200 || results.status !== 200) {
          setErrosMade({
            title: results.data.title,
            message: results.data.message,
          });
        }
        console.log(results);
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

  // useEffect(() => {}, []);

  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  return (
    <div>
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
                  value={cName}
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
                  value={cEmail}
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
                  value={cNumber}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Uplode Image</Form.Label>
                <Form.Control
                  style={{ background: 'transparent', color: 'white' }}
                  type="file"
                  // accept="image/*"
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
                  value={cType}
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
                  value={cDeg}
                />
              </Form.Group>

              <Button
                style={{ width: '100%' }}
                variant="success"
                type="submit"
                block
                onClick={onSubmitBtnClick}
              >
                Add Coordinator
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoordinator;
