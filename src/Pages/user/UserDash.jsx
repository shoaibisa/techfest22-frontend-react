import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, localUrl } from '../../API/api';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';
import Modal from 'react-modal'






import './UserDash.css';
const UserDash = props => {

  const navigate = useNavigate()
  const [errosMade, setErrosMade] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: 'Bearer ' + props.token,
        },
      })
      .then(result => {
        setUser(result.data.user);
      });
  }, []);

  //error message
  const onErrosMadeHandle = () => {

    setErrosMade(null);
  };





  


  const [show, setShow] = useState(false)




  const onPayBtnClick = () => {
    navigate("/user/pay")
  }


  return (
    <div className="body">
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {user && (
        <div className="Dashboard__body">
          <div className="Main">
            <div className="home_background">
              <div className="container mt-4 pt-5">
                <div className="text-center py-5 mt-4">
                  <div className="text-center text-light">
                    <figure className="text-center text-light">
                      <blockquote className="blockquote">
                        <button style={{width: "120px", height: "40px", background: "#00FF00", borderRadius: "10px"}} onClick={onPayBtnClick}>Pay</button>
                        <h2>Namaste! {user && user.name}</h2>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Your Unique tF ID is {user._id}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="container  Main px-0 mt-5 pt-5">
                <div className="row justify-content-around">
                  <div className="col-lg-5">
                    <div className="card removeBg">
                      <div className="card-body">
                        <h3
                          className="card-title text-light
                                                text-center"
                        >
                          <img
                            className="idea"
                            src="https://img.icons8.com/fluency-systems-regular/48/000000/idea.png"
                            alt=""
                          />
                          Events Registered
                        </h3>
                        <div className="collapse1 p-4 mt-4 mb-2">
                          <table className="table text-light">
                            <tbody>
                              {/* <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>Today</td>
                              </tr> */}
                              {user.events.map(event => {
                                return (
                                  <tr>
                                    <td>{event.name}</td>
                                    <td></td>
                                    <td>{event.date}</td>
                                  </tr>
                                );
                              })}
                              {/* <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr>
                            <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr>
                            <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr>
                            <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr>
                            <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr>
                            <tr>
                              <td>Name of Event</td>
                              <td></td>
                              <td>20/4</td>
                            </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!----column second-------------> */}
                  <div className="col-sm-2 mt-3 vl"></div>

                  <div className="col-lg-5">
                    <div className="card removeBg">
                      <div className="card-body">
                        <h3
                          className="card-title text-light
                                                text-center"
                        >
                          <img
                            className="maintenance"
                            src="https://img.icons8.com/ios/50/000000/maintenance.png"
                            alt=""
                          />
                          Workshops Registered
                        </h3>
                        <div className="collapse1 p-4 mt-4">
                          <table className="table text-light">
                            <tbody>
                              {user.workshops.map(workshop => {
                                return (
                                  <tr>
                                    <td>{workshop.name}</td>
                                    <td></td>
                                    <td>{workshop.date}</td>
                                  </tr>
                                );
                              })}
                              {/* <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>Date</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>13/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr>
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>20/4</td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <!--------------Profile Information----------------> */}

            <div className="dashboard_both_table">

              <div className="dashboard_profile">
                <div className="dashboard_profile_container">
                  <table style={{ width: "100%" }}>
                    <tr className='TableRow'>

                      <td className="dashboard_profile_left_cell dashboard_table_heading">
                        <b>Profile Information</b>
                      </td>
                      <td className="dashboard_gapping"></td>
                      <td className="dashboard_profile_table_td dashboard_profile_right_cell">

                      </td>
                      <td><i className="fa fa-edit" onClick={()=>setShow(true)} >      </i></td>
                    </tr>


                    <div className="userEdit">








                      {

                        show ? <div className="OPenEdit">
                          <div class="modal-content  ">
                            <button className='EditClose' onClick={() => setShow(false)}  >X</button>
                            <div className="content_box">

                              <div className="personal_information">
                                <h3>Personal Information</h3>
                                <form action="#" className="form">
                                  <label className="form-input1">
                                    Full Name
                                  </label>
                                  <input type="text" className="form-input" placeholder="" />
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">Date Of Birth</label>
                                  <input type="date" className="input_Profile_Information  form-input1" name="birthday" />

                                </form>
                                <form action="push" className="form ">
                                  <label className="form-input1">You are a : </label><br />
                                  <input type="radio"  name="option1" value="" className="form-input2" />
                                  <label > Student</label>
                                  <input type="radio"  name="option2" value="" className="form-input2" />
                                  <label > Faculty</label>
                                  <input type="radio"  name="option3" value="" className="form-input2" />
                                  <label > Working Professional</label>
                                  <input type="radio"  name="option4" value="" className="form-input2" />
                                  <label className="form-input"> Others</label>
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">College Name</label><br />
                                  <select id="College__Name" name="College__Name" className="form-input">
                                    <option value="SLIET" className="form-input">Sant Longowal Institute of Engineering And Technology</option>
                                    <option value="Other" className="form-input">Other</option>
                                  </select>
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">Course Enrolled</label>
                                  <select id="Course_Enrolled" name="Course_Enrolled" className="form-input">
                                    <option value="Bachelors_Of_Engineering" className="form-input">Bachelors Of Engineering</option>
                                    <option value="Diploma" className="form-input">Diploma</option>
                                    <option value="Other" className="form-input">Other</option>
                                  </select>
                                </form>
                                <form action="#" className="form">
                                  <label >Branch of Study</label><br />
                                  <select id="Branch_of_Study" name="Branch_of_Study" className="form-input">
                                    <option value="Chemical_Engineering" className="form-input">Chemical Engineering</option>
                                    <option value="Computer_Science_and_Engineering" className="form-input">Computer Science and Engineering
                                    </option>
                                    <option value="Computer Science and Application" className="form-input">Computer Science and Application
                                    </option>
                                    <option value="Electronics_and_Communication_Engineering" className="form-input">Electronics and Communication
                                      Engineering</option>
                                    <option value="Electrical_Engineering" className="form-input">Electrical Engineering</option>
                                    <option value="Instrumentation_and_Control_Engineering" className="form-input">Instrumentation and Control
                                      Engineering</option>
                                    <option value="Industrial & Production Engineering" className="form-input">Industrial & Production Engineering
                                    </option>
                                    <option value="Maintenance & Plant Engineering" className="form-input">Maintenance & Plant Engineering</option>
                                    <option value="Food_Technology" className="form-input">Food Technology</option>
                                    <option value="Mechanical_Engineering" className="form-input">Mechanical Engineering</option>
                                  </select>
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">Year of Study</label>
                                  <select id="Year_of_Study" name="Year_of_Study" className="form-input">
                                    <option value="1" className="form-input">1</option>
                                    <option value="2" className="form-input">2</option>
                                    <option value="3" className="form-input">3</option>
                                    <option value="4" className="form-input">4</option>
                                  </select>
                                </form>
                              </div>
                              <div className="contact_information">
                                <h3>Contact Information</h3>
                                <form action="#" className="form">
                                  <label for="email" className="form-input1">E-mail id(Enter your SLIET E-mail id if SLIET student)</label>
                                  <input type="e-mail" id="e-mail" name="e-mail" value="" className="form-input" />
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">Phone Number</label><br />
                                  <input type="text" id="number" name="number" value="" className="form-input" />
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">What's app Number</label>
                                  <input type="text" id="number" name="number" value="" className="form-input" />
                                </form>
                                <form action="#" className="form">
                                  <label className="form-input1">Telegram Number</label>
                                  <input type="text" id="number" name="number" value="" className="form-input" />
                                </form>
                              </div>

                            </div>
                            <button className="Edit__info__button" type="submit">Save</button>
                          </div>

                        </div> : null
                      }


                    </div>









                  
                
                <tr className='TableRow'>
                  <td>Profession</td>

                  <td className=" ">
                    Student
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td>Organisation/College Name</td>

                  <td className="">
                    Sant longowal institute of engineering and technology
                  </td>
                </tr>
                <tr className='TableRow'>


                  <td className="">
                    {user.course}
                  </td>
                </tr>
                <tr className='TableRow'>


                  <td className="">
                    {user.yearOfStudy}
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td>Date of Birth</td>

                  <td className="">{user.dob}</td>
                </tr>
              </table>

              {/* <!-------------------Contact Information-------------> */}
              <table>
                <tr className=''>
                  <td className="" colspan="2">
                    <b>Contact Information</b>
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td className="">
                    E-mail Address
                  </td>
                  <td className="">
                    {user.email}
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td>Phone Number</td>
                  <td className="">
                    {user.phone}
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td>Whatsapp Number</td>
                  <td className="">
                    {user.whatsappPhoneNumber}
                  </td>
                </tr>
                <tr className='TableRow'>
                  <td>Telegram Number</td>
                  <td className="">
                    {user.telegramPhoneNumber}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* <!---------------------Table 2--------------------------> */}
          <div className="dashboard_certificate">
            <div className="dashboard_certificate_container">
              <table cellspacing="15px">
                <tr>
                  <td
                    className="dashboard_profile_left_cell dashboard_table_heading"
                    colspan="3"
                  >
                    <b> Certificate & Rewards</b>
                  </td>
                </tr>
                <tr>
                  <td className="dashboard_table_sub_heading" colspan="3">
                    <b>Events Certificates</b>
                  </td>
                </tr>
                <tr className="dashboard_border">
                  <td className="dashboard_profile_left_cell3">
                    Name of Event
                  </td>
                  <td>Today</td>
                  <td className="dashboard_profile_left_cell4 dashboard_border_remove">
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i id="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Name of Event</td>
                  <td>13/04</td>
                  <td>
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i id="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Name of Event</td>
                  <td>13/04</td>
                  <td>
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i id="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
              </table>
              {/* <!---------------------------------Workshop and Certificates------------------------------> */}
              <table cellspacing="15px">
                <tr>
                  <td
                    className="dashboard_table_sub_heading dashboard_profile_left_cell"
                    colspan="3"
                  >
                    <b>Workshop Certificates</b>
                  </td>
                </tr>
                <tr>
                  <td className="dashboard_profile_left_cell3">
                    Name of Event
                  </td>
                  <td>Today</td>
                  <td className="dashboard_profile_left_cell4">
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i sid="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Name of Event</td>
                  <td>13/04</td>
                  <td>
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i id="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Name of Event</td>
                  <td>13/04</td>
                  <td>
                    <a
                      download="/#"
                      href="/#"
                      className="dashboard_profile_button"
                    >
                      <i id="dashboard_download_icon" className="fa">
                        &#xf019;
                      </i>
                      Download
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        </div>
        </div >
  )
}
    </div >
  );
};

export default UserDash;
