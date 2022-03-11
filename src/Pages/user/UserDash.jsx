import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { localUrl } from '../../API/api';
import ErrorModel from '../../components/UI/ErrorModel/ErrorModel';

import './UserDash.css';
const UserDash = props => {
  const [errosMade, setErrosMade] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${localUrl}/user/getUserById`, {
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
                  <table>
                    <tr>
                      <td className="dashboard_profile_left_cell dashboard_table_heading">
                        <b>Profile Information</b>
                      </td>
                      <td className="dashboard_gapping"></td>
                      <td className="dashboard_profile_table_td dashboard_profile_right_cell">
                        <i className="fa fa-edit"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Profession</td>
                      <td></td>
                      <td className="dashboard_profile_table_td dashboard_profile_right_cell">
                        Student
                      </td>
                    </tr>
                    <tr>
                      <td>Organisation/College Name</td>
                      <td></td>
                      <td className="dashboard_profile_table_td">{user.collegeName}</td>
                    </tr>
                    <tr>
                      <td>
                        Courses Enrolled{' '}
                        <sub>(Only application for college student)</sub>
                      </td>
                      <td></td>
                      <td className="dashboard_profile_table_td">
                        {user.course}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Year of study
                        <sub>(only applicable for college student)</sub>
                      </td>
                      <td></td>
                      <td className="dashboard_profile_table_td">{user.yearOfStudy}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td></td>
                      <td className="dashboard_profile_table_td">{user.dob}</td>
                    </tr>
                  </table>
                  <hr className="dashboard_hr" />
                  {/* <!-------------------Contact Information-------------> */}
                  <table>
                    <tr>
                      <td className="dashboard_table_sub_heading" colspan="2">
                        <b>Contact Information</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="dashboard_profile_left_cell2">
                        E-mail Address
                      </td>
                      <td className="dashboard_profile_table_td">
                        {user.email}
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td className="dashboard_profile_table_td">
                        {user.phone}
                      </td>
                    </tr>
                    <tr>
                      <td>Whatsapp Number</td>
                      <td className="dashboard_profile_table_td">
                        {user.whatsappPhoneNumber}
                      </td>
                    </tr>
                    <tr>
                      <td>Telegram Number</td>
                      <td className="dashboard_profile_table_td">
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
        </div>
      )}
    </div>
  );
};

export default UserDash;
