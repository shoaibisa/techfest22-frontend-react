import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const WorkshopForm = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
              //   value={}
              //   onChange={}
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
            <Multiselect options={dataC} displayValue="coordinator" />
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
};

export default WorkshopForm;
