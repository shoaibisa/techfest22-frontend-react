import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { baseUrl, localUrl } from '../../../API/api';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';

const Sponsor = () => {
  const [name, setName] = useState('');
  const [sponserLink, setSponserLink] = useState('');
  const [sImage, setSimage] = useState('');
  const [errosMade, setErrosMade] = useState(); //undefined

  const getName = e => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const getLink = e => {
    setSponserLink(e.target.value);
  };

  const getSimage = e => {
    setSimage(e.target.files[0]);
  };

  const onSubmitClick = e => {
    // console.log(e.target.value);
    e.preventDefault();

    // return console.log(sImage);

    if (name.trim().length === 0 || sponserLink.trim().length === 0) {
      setErrosMade({
        title: 'Error',
        message: 'Field should not be empty',
      });
      return;
    }
    let sData = new FormData();
    sData.append('sponserImg', sImage);
    sData.append('name', name);
    sData.append('link', sponserLink);

    axios
      .post(`${baseUrl}/sponser/addSponsor`, sData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then(result => {
        if (result.status !== 201 || result.status !== 200) {
          setErrosMade({
            title: result.data.title,
            message: result.data.message,
          });
          return;
        }

        setErrosMade({
          title: result.data.title,
          message: result.data.message,
        });

        setName('');
        setSimage(null);
        setSponserLink('');
        console.log(result.data);
      });
  };

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
            <h2 style={{ color: 'white' }}>Add Sponsor</h2>
          </div>
          <Form onSubmit={onSubmitClick}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'white' }}>Name</Form.Label>
              <Form.Control
                style={{ color: 'white', background: 'transparent' }}
                size="sm"
                type="text"
                placeholder="Enter Name *"
                // required

                onChange={getName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'white' }}>Link</Form.Label>
              <Form.Control
                style={{ color: 'white', background: 'transparent' }}
                size="sm"
                type="text"
                placeholder="Enter Link *"
                onChange={getLink}

                // required
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{ color: 'white' }}>Uplode Image</Form.Label>
              <Form.Control
                style={{ background: 'transparent' }}
                type="file"
                size="sm"
                onChange={getSimage}
              />
            </Form.Group>
            <Button
              style={{ width: '100%' }}
              variant="success"
              type="submit"
              block
            >
              Add Sponsor
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
