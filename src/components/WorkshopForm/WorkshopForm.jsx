import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

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

    console.log(studentCoordinator);

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
    zData.append('startDate', startDate);
    zData.append('endDate', endDate);
    zData.append('studentCoordinator', studentCoordinator);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/workshop/create',
        data: zData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getImageHandle = e => {
    setselectedImage(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  useEffect(() => {
    fetch('http://localhost:4000/coordinator/get-all-details')
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

    return (
      <div
        className="workshopForm"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '100px 50px',
        }}
      >
        <form
          onsubmit=" return myFormValidation()"
          name="signupForm"
          action=""
          className=""
        >
          <h1 className="" href="/#">
            Workshop Form
          </h1>
          <label className="">
            <span>Image </span>
            <input
              name="workshop"
              // value={}
              onChange={getImageHandle}
              required
              autoComplete="off"
              type="file"
              placeholder=" "
            />
            <p className="text-danger" id="pass"></p>
          </label>
          <br />
          <label>
            <span>Workshop name </span>
            <input
              name="workshopName"
              value={wsName}
              onChange={getwsName}
              required
              autoComplete="off"
              type="text"
              placeholder=" "
            />
            <p className="text-danger" id="pass"></p>
          </label>{' '}
          <br />
          <label>
            <span>Ws Desc </span>
            <input
              name="wsDesc"
              value={wsDesc}
              onChange={getwsDesc}
              required
              autoComplete="off"
              type="text"
              placeholder=" "
            />
            <p className="text-danger" id="pass"></p>
          </label>{' '}
          <br />
          <label>
            <span>Host Name </span>
            <input
              name="hostName"
              value={hostName}
              onChange={gethostName}
              required
              autoComplete="off"
              type="text"
              placeholder=" "
            />

            <p className="text-danger" id=""></p>
          </label>
          <br />
          <label>
            <span>Host Desc </span>
            <input
              name=""
              type="text"
              value={hostDesc}
              onChange={gethostDesc}
              required
              autoComplete="off"
              placeholder=" "
            />
            <p className="text-danger" id=""></p>
          </label>
          <br />
          <label>
            <span>Start Date </span>
            <input
              name="startDate"
              value={startDate}
              onChange={getstartDate}
              required
              autoComplete="off"
              type="date"
              placeholder=" "
            />

            <p className="text-danger" id=""></p>
          </label>
          <br />
          <label>
            <span>End Date </span>
            {/* <p className="text-danger" id=""></p> */}
            <input
              name="endDate"
              value={endDate}
              onChange={getendDate}
              required
              autoComplete="off"
              type="date"
              placeholder=" "
            />
            <p className="text-danger" id=""></p>
          </label>
          <br />
          <label>
            <span>Student Coordinator </span>
            <Multiselect
              onSelect={getstudentCoordinator}
              // onChange={getstudentCoordinator}
              options={dataC}
              displayValue="coordinator"
              showCheckbox="true"
            />
          </label>
          <br />
          <br />
          <button
            type="button"
            onClick={onSubmitBtnClick}
            disabled={isLoading}
            className="btn__color mb-3"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default WorkshopForm;
