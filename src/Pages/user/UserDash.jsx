import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../API/api';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';

import './UserDash.css';
import AuthContext from '../../auth/authContext';
import AddTeamMembers from '../../components/UI/AddMembers/AddTeamMember';

const UserDash = props => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [errosMade, setErrosMade] = useState('');
  const [user, setUser] = useState(null);
  const [dob, setDob] = useState();
  const [collegeName, setCollegeName] = useState();
  const [course, setCourse] = useState();
  const [branch, setBranch] = useState();
  const [yearOfStudy, setYearOfStudy] = useState();
  const [phone, setPhone] = useState();
  const [whatsapp, setWhatsApp] = useState();
  const [telegram, setTelegram] = useState();
  const [isAddTeam, setIsAddTeam] = useState();
  const [teams, setTeam] = useState(null);
  const onIsAddMembers = () => {
    setIsAddTeam({
      title: 'add',
      message: 'hello',
    });
  };

  const onPayClick = () => {
    navigate('/user/pay');
  };

  const teamListAdd = props => {
    console.log(props);
  };
  const onSaveClick = () => {
    const saveUser = {
      name: user.name,
      email: user.email,
      instituteAddress: '',
      dob: dob,
      phone: phone,
      whatsappPhoneNumber: whatsapp,
      telegramPhoneNumber: telegram,
      collegeName: collegeName,
      course: course,
      branchOfStudy: branch,
      yearOfStudy: yearOfStudy,
    };
    axios
      .post(
        `${baseUrl}/user/updateUser`,
        { data: saveUser },
        {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: 'Bearer ' + authContext.token,
          },
        }
      )
      .then(res => {
        if (res.data.isError) {
          setErrosMade(res.data);
        } else {
          setErrosMade('Updated successfully');
        }
        window.location.href = '/dashboard';
      })
      .catch(err => {
        setErrosMade(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(result => {
        if (
          result.status !== 200 ||
          (result.status !== 201 && result.data.isError)
        ) {
          setErrosMade({
            title: 'Auth Error',
            message: 'Wrong user auth!',
          });
          authContext.logout();
          return;
        }

        setUser(result.data.user);
      });
    axios
      .get(`${baseUrl}/team/getTeams`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(results => {
        setTeam(results.data.teams);
      });
  }, [authContext, authContext.login]);

  //error message
  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const onIsTeamMadeHandle = () => {
    setIsAddTeam(null);
  };

  const [show, setShow] = useState(false);

  // const onPayBtnClick = () => {
  //   navigate('/user/pay');
  // };

  return (
    <div className="body">
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {isAddTeam && (
        <AddTeamMembers
          title={isAddTeam.title}
          message={isAddTeam.message}
          onTeamListAdd={teamListAdd}
          onErrosClick={onIsTeamMadeHandle}
        />
      )}
      {user && (
        <div className="Dashboard__body">
          <div className="Main">
            <div className="home_background">
              <div className="container mt-1 pt-2">
                <div className="text-center py-5 mt-4">
                  <div className="text-center text-light">
                    <figure className="text-center text-light">
                      <blockquote className="blockquote">
                        <h2>Namaste! {user && user.name}</h2>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Your Unique referral tF ID is {user.referralCode}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {user.paymentDetails.paymentStatus != 'Sliet mail Domain' && (
                  <div className="payment__select">
                    <div className="payment__select__icon">
                      {!user.hasPaidEntry && (
                        <>
                          <i class="fa fa-info-circle"></i>
                          <h3>Registration Fee</h3>
                          <p>
                            Pay one time registration fee and hustle <br />{' '}
                            through the plethora of Events at techFEST'22
                          </p>
                        </>
                      )}
                      {user.hasPaidEntry && (
                        <>
                          <h3>You have paid!</h3>
                          <p>See your payment subscription!</p>
                        </>
                      )}

                      <button
                        className="payment__select__button"
                        // onClick={onPayClick}
                        onClick={() =>
                          setErrosMade({
                            title: 'Pay',
                            message: 'Payment process will begin shortly',
                          })
                        }
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                )}
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
                              <tr>
                                <td>Name of Event</td>
                                <td></td>
                                <td>Time</td>
                              </tr>
                              {user.events.length === 0 && (
                                <tr>
                                  <td>Not any Registered Events</td>
                                </tr>
                              )}
                              {user.events.map(event => {
                                return (
                                  <tr key={event._id}>
                                    <td>{event.name}</td>
                                    <td></td>
                                    {/* {var a ="n"} */}
                                    <td>{event.endDate.split('T')[0]}</td>
                                  </tr>
                                );
                              })}
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
                              <tr>
                                <td>Name of Worshop</td>
                                <td></td>
                                <td>Time</td>
                              </tr>
                              {user.workshops.length === 0 && (
                                <tr>
                                  <td>Not any Registered Workshops</td>
                                </tr>
                              )}
                              {user.workshops.map(workshop => {
                                return (
                                  <tr key={workshop._id}>
                                    <td>{workshop.workshopName}</td>
                                    <td></td>
                                    <td>{workshop.endDate.split('T')[0]}</td>
                                  </tr>
                                );
                              })}
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
                  <table style={{ width: '100%' }}>
                    <tr className="TableRow">
                      <td className="dashboard_profile_left_cell dashboard_table_heading">
                        <b>Profile Information</b>
                      </td>
                      {/* <td className="dashboard_gapping"></td> */}
                      {/* <td className="dashboard_profile_table_td dashboard_profile_right_cell"></td> */}
                      <td>
                        <i
                          className="fa fa-edit edit__res  "
                          onClick={() => setShow(true)}
                        ></i>
                      </td>
                    </tr>

                    <div className="userEdit">
                      {show ? (
                        <div className="OPenEdit">
                          <div class="modal-content  ">
                            <button
                              className="EditClose"
                              onClick={() => setShow()}
                            >
                              X
                            </button>
                            <div className="content_box">
                              <div className="personal_information">
                                <h3>Personal Information</h3>
                                <form action="#" className="form">
                                  <label className="form-input1">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    value={user.name}
                                    disabled="true"
                                    className="form-input"
                                    placeholder=""
                                  />
                                </form>
                                <div className="form">
                                  <label className="form-input1">
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    onChange={e => {
                                      setDob(e.target.value);
                                    }}
                                    className="input_Profile_Information  form-input1"
                                    name="birthday"
                                  />
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    College Name
                                  </label>
                                  <br />
                                  <select
                                    id="College__Name"
                                    name="College__Name"
                                    className="form-input"
                                    onChange={e => {
                                      setCollegeName(e.target.value);
                                    }}
                                  >
                                    <option
                                      value="SLIET"
                                      className="form-input"
                                    >
                                      Sant Longowal Institute of Engineering And
                                      Technology
                                    </option>
                                    <option
                                      value="Other"
                                      className="form-input"
                                    >
                                      Other
                                    </option>
                                  </select>
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    Course Enrolled
                                  </label>
                                  <select
                                    id="Course_Enrolled"
                                    name="Course_Enrolled"
                                    className="form-input"
                                    onChange={e => {
                                      setCourse(e.target.value);
                                    }}
                                  >
                                    <option
                                      value="Bachelors_Of_Engineering"
                                      className="form-input"
                                    >
                                      Bachelors Of Engineering
                                    </option>
                                    <option
                                      value="Diploma"
                                      className="form-input"
                                    >
                                      Diploma
                                    </option>
                                    <option
                                      value="Other"
                                      className="form-input"
                                    >
                                      Other
                                    </option>
                                  </select>
                                </div>
                                <div className="form">
                                  <label>Branch of Study</label>
                                  <br />
                                  <select
                                    id="Branch_of_Study"
                                    name="Branch_of_Study"
                                    className="form-input"
                                    onChange={e => {
                                      setBranch(e.target.value);
                                    }}
                                  >
                                    <option
                                      value="Chemical_Engineering"
                                      className="form-input"
                                    >
                                      Chemical Engineering
                                    </option>
                                    <option
                                      value="Computer_Science_and_Engineering"
                                      className="form-input"
                                    >
                                      Computer Science and Engineering
                                    </option>
                                    <option
                                      value="Computer Science and Application"
                                      className="form-input"
                                    >
                                      Computer Science and Application
                                    </option>
                                    <option
                                      value="Electronics_and_Communication_Engineering"
                                      className="form-input"
                                    >
                                      Electronics and Communication Engineering
                                    </option>
                                    <option
                                      value="Electrical_Engineering"
                                      className="form-input"
                                    >
                                      Electrical Engineering
                                    </option>
                                    <option
                                      value="Instrumentation_and_Control_Engineering"
                                      className="form-input"
                                    >
                                      Instrumentation and Control Engineering
                                    </option>
                                    <option
                                      value="Industrial & Production Engineering"
                                      className="form-input"
                                    >
                                      Industrial & Production Engineering
                                    </option>
                                    <option
                                      value="Maintenance & Plant Engineering"
                                      className="form-input"
                                    >
                                      Maintenance & Plant Engineering
                                    </option>
                                    <option
                                      value="Food_Technology"
                                      className="form-input"
                                    >
                                      Food Technology
                                    </option>
                                    <option
                                      value="Mechanical_Engineering"
                                      className="form-input"
                                    >
                                      Mechanical Engineering
                                    </option>
                                  </select>
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    Year of Study
                                  </label>
                                  <select
                                    id="Year_of_Study"
                                    name="Year_of_Study"
                                    className="form-input"
                                    onChange={e =>
                                      setYearOfStudy(e.target.value)
                                    }
                                  >
                                    <option value="1" className="form-input">
                                      1
                                    </option>
                                    <option value="2" className="form-input">
                                      2
                                    </option>
                                    <option value="3" className="form-input">
                                      3
                                    </option>
                                    <option value="4" className="form-input">
                                      4
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="contact_information">
                                <h3>Contact Information</h3>
                                <div className="form">
                                  <label for="email" className="form-input1">
                                    E-mail id(Enter your SLIET E-mail id if
                                    SLIET student)
                                  </label>
                                  <input
                                    type="e-mail"
                                    value={user.email}
                                    id="e-mail"
                                    name="e-mail"
                                    disabled="true"
                                    className="form-input"
                                  />
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    Phone Number
                                  </label>
                                  <br />
                                  <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={phone}
                                    onChange={e => {
                                      setPhone(e.target.value);
                                    }}
                                    className="form-input"
                                  />
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    What's app Number
                                  </label>
                                  <input
                                    type="text"
                                    id="number"
                                    onChange={e => {
                                      setWhatsApp(e.target.value);
                                    }}
                                    name="number"
                                    value={whatsapp}
                                    className="form-input"
                                  />
                                </div>
                                <div className="form">
                                  <label className="form-input1">
                                    Telegram Number
                                  </label>
                                  <input
                                    type="text"
                                    id="number"
                                    onChange={e => {
                                      setTelegram(e.target.value);
                                    }}
                                    name="number"
                                    value={telegram}
                                    className="form-input"
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              className="Save__info__button"
                              onClick={onSaveClick}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <tr className="TableRow">
                      <td>Profession</td>

                      <td className="TableRow__res ">Student</td>
                    </tr>
                    <tr className="TableRow">
                      <td>Organisation/College Name</td>

                      <td className="TableRow__res">
                        {user.collegeName && user.collegeName}
                      </td>
                    </tr>
                    <tr className="TableRow ">
                      <td>Course</td>
                      <td className="TableRow__res">
                        {user.course && user.course}
                      </td>
                    </tr>

                    <tr className="TableRow"></tr>
                    <tr className="TableRow ">
                      <td>Year Of Study</td>
                      <td className="TableRow__res">
                        {user.yearOfStudy && user.yearOfStudy}
                      </td>
                    </tr>
                    <tr className="TableRow  ">
                      <td>Date of Birth</td>

                      <td className="TableRow__res">
                        {user.dob && user.dob.toString().substring(0, 10)}
                      </td>
                    </tr>
                  </table>

                  {/* <!-------------------Contact Information-------------> */}
                  <table style={{ width: '100%' }}>
                    <tr className="TableRow">
                      <td className="" colspan="2">
                        <b>Contact Information</b>
                      </td>
                    </tr>
                    <tr className="TableRow">
                      <td className="">E-mail Address</td>
                      <td className="">{user.email}</td>
                    </tr>
                    <tr className="TableRow">
                      <td>Phone Number</td>
                      <td className="">{user.phone}</td>
                    </tr>
                    <tr className="TableRow">
                      <td>Whatsapp Number</td>
                      <td className="">{user.whatsappPhoneNumber}</td>
                    </tr>
                    <tr className="TableRow">
                      <td>Telegram Number</td>
                      <td className="">{user.telegramPhoneNumber}</td>
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
                        <b> Team Member</b>
                      </td>
                      <td>
                        <i
                          className="fa fa-edit Edit__info__button"
                          onClick={onIsAddMembers}
                          style={{ cursor: 'pointer', fontSize: '30px' }}
                          title="Create team"
                        >
                          {' '}
                        </i>
                      </td>
                    </tr>
                    {/* <tr>

                  {/* <!---------------------------------Teams------------------------------> */}
                  </table>
                  <table>
                    <tr>
                      <th>Team Name</th>
                      <th>Team Leader</th>
                      <th>Members Email & Status</th>
                      <th>Event Registered</th>
                    </tr>
                    {/* <tr>
                      <td>Peter</td>
                      <td>Griffin</td>
                      <td>Griffin</td>
                      <td>$100</td>
                      <td></td>
                      <td>
                        <i
                          className="fa fa-trash"
                          style={{ marginRight: '12px' }}
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr> */}
                    {teams &&
                      teams.map(team => (
                        <tr key={team._id}>
                          <td>{team.name}</td>
                          <td>{team.leaderName}</td>

                          {teams &&
                            team.members.map(member => (
                              <td key={member._id}>
                                {member.email}:-
                                {member.status ? 'Accepted' : 'Not accepted'},
                                <br />
                              </td>
                            ))}
                          {/* <td>{cn}</td> */}
                          <td>
                            {!team.events || team.events.length === 0
                              ? 'None'
                              : team.events.map(e => e.name + ',')}
                          </td>
                          <td>
                            <i
                              className="fa fa-trash"
                              style={{ marginRight: '12px' }}
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                      ))}
                    {/* {teams && teams.map(t => <h1>{t.name}</h1>)} */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDash;
