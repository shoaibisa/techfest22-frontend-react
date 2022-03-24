import axios from 'axios';
import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { baseUrl, localUrl } from '../../../API/api';
import AuthContext from '../../../auth/authContext';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import { imgFileCheck } from '../../../Helper/ErrorHandle';

const SponsorForm = () => {
  const authContext = useContext(AuthContext);
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
    if (imgFileCheck(e.target.files[0].name)) {
      setSimage(e.target.files[0]);
    } else {
      setSimage(null);
      setErrosMade({
        title: 'Error',
        message: 'Only jpg/jpeg and png files are allowed!',
      });
    }
  };

  const onSubmitClick = e => {
    e.preventDefault();

    if (!sImage) {
      setErrosMade({
        title: 'Error',
        message: 'Only jpg/jpeg and png files are allowed!',
      });
      return;
    }

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

    // console.log(sData);
    // return console.log(name);
    axios
      .post(`${baseUrl}/sponser/addSponsor`, sData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(result => {
        if (result.data.authError) {
          setErrosMade({
            title: 'Auth Error',
            message: 'Wrong user auth!',
          });
          authContext.logout();
          return;
        }
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
        // console.log(result.data);
      })
      .catch(err => {
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
            <h2 style={{ color: 'white' }}>Add Sponsor</h2>
          </div>
          <Form className="pb-3" onSubmit={onSubmitClick}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'white' }}>Name</Form.Label>
              <Form.Control
                style={{ color: 'white', background: 'transparent' }}
                size="sm"
                type="text"
                placeholder="Enter Name *"
                // required
                value={name}
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
                style={{ background: 'transparent', color: 'white' }}
                type="file"
                size="sm"
                accept=".png, .jpg, .jpeg"
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

export default SponsorForm;
