import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const WorkshopForm = () => {
     const [wsName, setwsName ] = useState('');
  const [wsDesc,setwsDesc ] = useState('');
  const [hostDesc, sethostDesc] = useState('');
  const [hostName, sethostName] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate,setendDate] = useState('');
  const [studentCoordinator, setstudentCoordinator] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getwsName = (e) => {
    setwsName(e.target.value);
  }

  const getwsDesc = (e) => {
    setwsDesc(e.target.value);
  }

  const gethostDesc = (e) => {
    sethostDesc(e.target.value);
  }

  const gethostName = (e) => {
    sethostName(e.target.value)
  }

  const getstartDate = (e) => {
    setstartDate(e.target.value);
  }
  const getendDate = (e) => {
    setendDate(e.target.value);
  }
  const getstudentCoordinator = (e) => {
    setstudentCoordinator(e.target.value);
  }


    console.log(data)
  

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
      return { coordinator: w.coordinatorName, value: w._id };
    });
    const onSubmitBtnClick = async() => {
        const data = {
         
        "wsName":wsName,
        "wsDesc":wsDesc,
        "hostDesc":hostDesc,
        "hostName":hostName,
        "startDate":startDate,
        "endDate":endDate,
        "studentCoordinator":studentCoordinator
        }

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
              name="image"
                // value={}
                // onChange={}
              required
              autocomplete="off"
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
              autocomplete="off"
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
              autocomplete="off"
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
              autocomplete="off"
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
              autocomplete="off"
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
              autocomplete="off"
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
              autocomplete="off"
              type="date"
              placeholder=" "
            />
            <p className="text-danger" id=""></p>
          </label>
          <br />
          <label>
            <span>Student Coordinator </span>
            <Multiselect
            value={studentCoordinator}
            onChange={getstudentCoordinator} 
            options={dataC} displayValue="coordinator" />
          </label>
          <br />
          <br />
          <button type="button" className="btn__color mb-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
};

export default WorkshopForm;
