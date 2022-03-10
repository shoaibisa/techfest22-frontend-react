import React from 'react';

import './UserDash.css';
const UserDash = () => {
  return (
    <div>

       <div className="Dashboard__body">
        <div className="Main">
            <div className="home_background">
                <div className="container mt-5 pt-5">
                    <div className="text-center py-2">
                        <div className="text-center text-light">

                            <figure className="text-center text-light">
                                <blockquote className="blockquote">
                                    <h2>Namaste! Anubhav Raj</h2>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Your Unique tF ID is 1960
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
                                    <h3 className="card-title text-light
                                                text-center">
                                                  {/* <img className="idea"
                                            src="https://img.icons8.com/fluency-systems-regular/48/000000/idea.png" />Event */}
                                        Register
                                    </h3>
                                    <div className="collapse1 p-3 m-3">
                                        <table className="table text-light">
                                            <tbody>
                                                <tr>
                                                    <td>Name of Event</td>
                                                    <td></td>
                                                    <td>Today</td>
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
                                                </tr>
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
                                    <h3 className="card-title text-light
                                                text-center">
                                                  {/* <img className="maintenance"
                                            src="https://img.icons8.com/ios/50/000000/maintenance.png" />Workshops */}
                                        Register
                                    </h3>
                                    <div className="collapse1 p-3 m-3">
                                        <table className="table text-light">
                                            <tbody>
                                                <tr>
                                                    <td>Name of Event</td>
                                                    <td></td>
                                                    <td>Today</td>
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
                                                </tr>
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
                                <td>
                                    Professional
                                </td>
                                <td></td>
                                <td className="dashboard_profile_table_td dashboard_profile_right_cell">
                                    Student
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Organisation/College Name
                                </td>
                                <td></td>
                                <td className="dashboard_profile_table_td">
                                    S.L.I.E.T.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Courses Enrolled <sub>(Only application for college student)</sub>
                                </td>
                                <td></td>
                                <td className="dashboard_profile_table_td">
                                    B.E.(Chemical Engineering)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Year of study<sub>(only applicable for college student)</sub>
                                </td>
                                <td></td>
                                <td className="dashboard_profile_table_td">
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Date of Birth
                                </td>
                                <td></td>
                                <td className="dashboard_profile_table_td">
                                    DD/MM/YYYY
                                </td>
                            </tr>
                        </table>
                        <hr className="dashboard_hr"/>
                        {/* <!-------------------Contact Information-------------> */}
                        <table>
                            <tr>
                                <td className="dashboard_table_sub_heading" colspan="2"><b>Contact Information</b></td>
                            </tr>
                            <tr>
                                <td className="dashboard_profile_left_cell2">
                                    E-mail Address
                                </td>
                                <td className="dashboard_profile_table_td">
                                    abhishushakya@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone Number
                                </td>
                                <td className="dashboard_profile_table_td">
                                    +91XXXXXXXXXX
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Whatsapp Number
                                </td>
                                <td className="dashboard_profile_table_td">
                                    +91XXXXXXXXXX
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Telegram Number
                                </td>
                                <td className="dashboard_profile_table_td">
                                    +91XXXXXXXXXX
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
                                <td className="dashboard_profile_left_cell dashboard_table_heading" colspan="3">
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
                                <td>
                                    Today
                                </td>
                                <td className="dashboard_profile_left_cell4 dashboard_border_remove">
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            id="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name of Event
                                </td>
                                <td>
                                    13/04
                                </td>
                                <td>
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            id="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name of Event
                                </td>
                                <td>
                                    13/04
                                </td>
                                <td>
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            id="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                        </table>
                        {/* <!---------------------------------Workshop and Certificates------------------------------> */}
                        <table cellspacing="15px">
                            <tr>
                                <td className="dashboard_table_sub_heading dashboard_profile_left_cell" colspan="3">
                                    <b>Workshop Certificates</b>
                                </td>
                            </tr>
                            <tr>
                                <td className="dashboard_profile_left_cell3">
                                    Name of Event
                                </td>
                                <td>
                                    Today
                                </td>
                                <td className="dashboard_profile_left_cell4">
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            sid="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name of Event
                                </td>
                                <td>
                                    13/04
                                </td>
                                <td>
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            id="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name of Event
                                </td>
                                <td>
                                    13/04
                                </td>
                                <td>
                                    <a download="/#" href="/#" className="dashboard_profile_button"><i
                                            id="dashboard_download_icon" className='fa'>&#xf019;</i>Download</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
  );
}

export default UserDash;
