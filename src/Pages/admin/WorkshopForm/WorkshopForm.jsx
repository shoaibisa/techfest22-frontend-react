import React, { useState, useEffect } from 'react';
import './WorkshopForm.css';
import AdminContent from '../AdminContent';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../../../API/api';
import { localUrl } from '../../../API/api';
// import { NavLink } from 'react-router-dom';

const WorkshopForm = () => {
  const [wsName, setwsName] = useState('');
  const [wsDesc, setwsDesc] = useState('');
  const [hostDesc, sethostDesc] = useState('');
  const [hostName, sethostName] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [studentCoordinator, setstudentCoordinator] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedImage, setselectedImage] = useState(null);
  const [response, setResponse] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const getwsName = e => {
    setwsName(e.target.value);
  };

  const getwsDesc = e => {
    setwsDesc(e.target.value);
  };

  const gethostDesc = e => {
    sethostDesc(e.target.value);
  };

  const gethostName = e => {
    sethostName(e.target.value);
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

  const onSubmitBtnClick = async event => {
    // const cStudent = studentCoordinator.join(',');
    // console.log(cStudent, studentCoordinator);
    const sc = studentCoordinator.map(e => {
      return e.value;
    });

    //console.log(sc[0]);

    event.preventDefault();
    let zData = new FormData();
    zData.append('workshop', selectedImage);
    // const data = {
    //   wsName: wsName,
    //   wsDesc: wsDesc,
    //   hostDesc: hostDesc,
    //   hostName: hostName,
    //   startDate: startDate,
    //   endDate: endDate,
    //   studentCoordinator: studentCoordinator,
    // };
    zData.append('wsName', wsName);
    zData.append('wsDesc', wsDesc);
    zData.append('hostName', hostName);
    zData.append('hostDesc', hostDesc);
    zData.append('startDate', startDate);
    zData.append('endDate', endDate);
    zData.append('studentCoordinator', sc);
    try {
      return await axios(
        {
          method: 'post',
          url: `${baseUrl}/workshop/create`,
          data: zData,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
        {
          onUploadProgress: ProgressEvent => {
            console.log(
              'Upload image progress ' +
                Math.round(ProgressEvent.loaded / ProgressEvent.total) * 100 +
                ' '
            );
          },
        }
      )
        .then(res => {
          //setResponse(res)
          if (res.status !== 200 || res.status !== 200) {
            console.log(res);
            throw res.data;
          }
        })
        .then(res => {
          setResponse(res);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    // await axios
    //   //.post(`${baseUrl}/signUp`, data)
    //   .post('http://localhost:4000/workshop/create', zData, config)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const getImageHandle = e => {
    setselectedImage(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  useEffect(() => {
    fetch(`${baseUrl}/coordinator/get-all-details`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result['c']); //only coordinator response in c[] array
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const dataC = items.map(w => {
      const cd = w.coordinatorName + ' ' + w.coordinatorEmail;
      return { coordinator: cd, value: w._id };
    });

  //   return (
  //     <div>
  //       <div style={{ marginTop: '100px' }}>
  //         <NavLink to={'/admin/workshop/delete'} target="_blank">
  //           Delete Workshop
  //         </NavLink>
  //       </div>
  //       <div
  //         className="workshopForm"
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'flex-start',
  //           marginLeft: '100px',
  //         }}
  //       >
  //         <form
  //           onSubmit=" return myFormValidation()"
  //           name="signupForm"
  //           action=""
  //           className=""
  //         >
  //           <h1>res {response}</h1>
  //           <h1 className="" href="/#">
  //             Workshop Form
  //           </h1>
  //           {/* <label className="">
  //           <span>Image </span>
  //           <input
  //             name="workshop"
  //             // value={}
  //             onChange={getImageHandle}
  //             required
  //             autoComplete="off"
  //             type="file"
  //             placeholder=" "
  //           />
  //           <p className="text-danger" id="pass"></p>
  //         </label> */}
  //           <label class="btn btn-default btn-file ">
  //             Image browse{' '}
  //             <input
  //               type="file"
  //               style={{}}
  //               name="workshop"
  //               // value={}
  //               onChange={getImageHandle}
  //               required
  //               autoComplete="off"
  //               placeholder=" "
  //               accept="image/png, image/gif, image/jpeg"
  //             />
  //           </label>
  //           <br />
  //           <label>
  //             <span>Workshop name </span>
  //             <input
  //               name="workshopName"
  //               value={wsName}
  //               onChange={getwsName}
  //               required
  //               autoComplete="off"
  //               type="text"
  //               placeholder=" "
  //             />
  //             <p className="text-danger" id="pass"></p>
  //           </label>{' '}
  //           <br />
  //           <label>
  //             <span>Ws Desc </span>
  //             <input
  //               name="wsDesc"
  //               value={wsDesc}
  //               onChange={getwsDesc}
  //               required
  //               autoComplete="off"
  //               type="text"
  //               placeholder=" "
  //             />
  //             <p className="text-danger" id="pass"></p>
  //           </label>{' '}
  //           <br />
  //           <label>
  //             <span>Host Name </span>
  //             <input
  //               name="hostName"
  //               value={hostName}
  //               onChange={gethostName}
  //               required
  //               autoComplete="off"
  //               type="text"
  //               placeholder=" "
  //             />

  //             <p className="text-danger" id=""></p>
  //           </label>
  //           <br />
  //           <label>
  //             <span>Host Desc </span>
  //             <input
  //               name=""
  //               type="text"
  //               value={hostDesc}
  //               onChange={gethostDesc}
  //               required
  //               autoComplete="off"
  //               placeholder=" "
  //             />
  //             <p className="text-danger" id=""></p>
  //           </label>
  //           <br />
  //           <label>
  //             <span>Start Date </span>
  //             <input
  //               name="startDate"
  //               value={startDate}
  //               onChange={getstartDate}
  //               required
  //               autoComplete="off"
  //               type="date"
  //               placeholder=" "
  //             />

  //             <p className="text-danger" id=""></p>
  //           </label>
  //           <br />
  //           <label>
  //             <span>End Date </span>
  //             {/* <p className="text-danger" id=""></p> */}
  //             <input
  //               name="endDate"
  //               value={endDate}
  //               onChange={getendDate}
  //               required
  //               autoComplete="off"
  //               type="date"
  //               placeholder=" "
  //             />
  //             <p className="text-danger" id=""></p>
  //           </label>
  //           <br />
  //           <label>
  //             <span>Student Coordinator </span>
  //             <Multiselect
  //               onSelect={getstudentCoordinator}
  //               // onChange={getstudentCoordinator}
  //               options={dataC}
  //               displayValue="coordinator"
  //               showCheckbox="true"
  //             />
  //           </label>
  //           <br />
  //           <br />
  //           <button
  //             type="button"
  //             onClick={onSubmitBtnClick}
  //             disabled={isLoading}
  //             className="btn__color mb-3"
  //           >
  //             Submit
  //           </button>
          // </form>
          return(
            <div>
          {/* <div className="superadmin_workshopselection_mainheading">
      <span>Workshop</span>
</div>
<form className="super_admin_workshop_form">
<table>
<tr className="super_admin_workshop_name">
    <td>
        <p>Workshop Name</p>
    <input type="text" name="workshop_name"/>
</td>
    <td>
        <p>Workshop Picture</p>
    <input type="file" name="file"/>
</td>
</tr>
    <tr>
        <td>
            <p>Workshop Description(max 50 words)</p>
            <textarea name="Description" cols="40" rows="4"placeholder="Write the Description Here"></textarea>
        </td>
        <td className=" super_admin_workshop_table_description_padding">
            <p>Workshop Statement Drive Link</p>
            <textarea name="Description" cols="40" rows="4"placeholder="Write the Description Here"></textarea>
        </td>
    </tr>
<tr>
    <td>
        <p>Registration Closes On</p>
        <input type="datetime-local" placeholder=""/>
    </td>
    <td className="workshop_registration_closes_event_select">
        <p>Registration Closes On(time)</p>
        <input type="time" name="file"/>
    </td>
</tr>
    <tr>
    <td>
    <button type="submit"
     className="submit_button">Save</button>
    </td>
    </tr>
    </table>
    </form> */}
     <div className="main">
        <div className="container mt-5 pt-5" style={{width:'50%'}}>
        <div className="col-sm-12">
            <h2 style={{ color:'white'}}>Add Workshop</h2>
    <Form>
                <Form.Group className="mb-3">
                <Form.Label style={{color:'white'}}>Name</Form.Label>
                  <Form.Control  style={{ color:'white',background: 'transparent'}} size="sm"  type="text" placeholder="Enter Name *" required />
                </Form.Group>
                  <Form.Group controlId="form.Textarea" className="mb-3">
                <Form.Label style={{color:'white'}}>Workshop Description</Form.Label>
            <Form.Control style={{ color:'white',background: 'transparent'}} as="textarea" rows={4} placeholder="Enter Description(max 50 words) *" required/>
            </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{color:'white'}}>Uplode Image</Form.Label>
                  <Form.Control    style={{background: 'transparent'}} type="file" size="sm" />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{color:'white'}}>Uplode File</Form.Label>
                  <Form.Control style={{background: 'transparent'}} type="file" size="sm" />
                </Form.Group>
                <div className=''style={{display:'flex' ,justifyContent: "space-between"}} >
                <Form.Group controlId="dob" className="mb-3">
                            <Form.Label style={{color:'white'}}>Start Date & Time</Form.Label>
                            <Form.Control style={{width:"270px"}} type="datetime-local" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                       
                        <Form.Group controlId="dob" className="mb-3">
                            <Form.Label style={{color:'white'}}>End Date & Time</Form.Label>
                            <Form.Control  style={{width:"270px"}} type="datetime-local" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                        </div>
                <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label style={{color:'white'}}>Faculty Coordinator</Form.Label>
              <Multiselect 
              onSelect={getstudentCoordinator}
              // onChange={getstudentCoordinator}
              options={dataC}
              displayValue="coordinator"
              showCheckbox="true"
            />
            </Form.Group>
             <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label style={{color:'white'}}>Student Coordinator</Form.Label>
              <Multiselect 
              onSelect={getstudentCoordinator}
              // onChange={getstudentCoordinator}
              options={dataC}
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
                  Add Domain
                </Button>
              </Form>
              </div>
              </div>
              
    </div>
    </div>
   
    );
          }
        
};

export default WorkshopForm;
