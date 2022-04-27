import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

//images import
import headerLogo from '../../images/header-logo.png';
import AuthContext from '../../auth/authContext';

const Navbar = props => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const logOutHandler = async () => {
    await authContext.logout();
    navigate('/');
  };
  return (
    <>
      <div
        className="navbar  navbar-dark navbar-expand-lg  fixed-top"
        style={{ backgroundColor: 'black' }}
      >
        <div className="container-fluid navbar__justyfy font-weight-light my-1">
          <NavLink className="navbar-brand mx-2" to="/#">
            <img
              src={headerLogo}
              className="logo"
              alt=""
              width="200"
              height="35"
            />
          </NavLink>
          <button
            className="navbar-toggler btn-outline-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarLg"
            aria-controls="offcanvasNavbarLg"
          >
            <span className="navbar-toggler-icon">
              <i
                className="fa fa-bars"
                style={{
                  color: 'white',
                  fontSize: '28px',
                  margin: '-8px 0 0 -7px',
                }}
              ></i>
            </span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{
              backgroundColor: 'black',
              borderRadius: '50px 0 0 50px',
              height: '80%',
              width: '50%',
            }}
            tabIndex="-1"
            id="offcanvasNavbarLg"
            aria-labelledby="offcanvasNavbarLgLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title p-1 text-light"
                id="offcanvasNavbarLabel"
              >
                TechFest'22
              </h5>
              <button
                type="button"
                className="btn-close text-reset btn btn-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav text-light justify-content-end flex-grow-1 pe-3 sm ">
                <li className="nav-item home "></li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link mx-3 text-light line "
                    activeClassName="active "
                    data-toggle="pill"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>{' '}
                </li>
                {authContext.isUserLoggedIn && authContext.userRole == 0 && (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link mx-3 text-light line "
                      activeClassName="active "
                      data-toggle="pill"
                      aria-current="page"
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>{' '}
                  </li>
                )}
                {authContext.isUserLoggedIn && authContext.userRole == 569 && (
                  <li className="nav-item dropdown text-light">
                    <NavLink
                      className="nav-link dropdown-toggle mx-3 text-light line"
                      to="/admin"
                      id="offcanvasNavbarDropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      Admin
                    </NavLink>

                    <ul
                      className="dropdown-menu "
                      aria-labelledby="offcanvasNavbarDropdown"
                      style={{
                        backgroundColor: 'rgb(17, 34, 13)',
                        width: '100%',
                      }}
                    >
                      <li>
                        <NavLink
                          className="dropdown-item  text-light line"
                          activeClassName="active "
                          to="/admin/users"
                        >
                          Users
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item  text-light line"
                          activeClassName="active "
                          to="/admin/coordinator"
                        >
                          Coordinator
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item text-light line"
                          to="/admin/event"
                        >
                          Events
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item text-light line"
                          activeClassName="active "
                          to="/admin/workshop"
                        >
                          Workshop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item text-light line"
                          activeClassName="active "
                          to="/admin/sponsor"
                        >
                          Sponser
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}

                <li className="nav-item dropdown text-light">
                  <a
                    className="nav-link dropdown-toggle mx-3 text-light line"

                    id="offcanvasNavbarDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    About
                  </a>

                  <ul
                    className="dropdown-menu "
                    aria-labelledby="offcanvasNavbarDropdown"
                    style={{
                      backgroundColor: 'rgb(17, 34, 13)',
                      width: '100%',
                    }}
                  >
                    <li><NavLink
                      className="dropdown-item text-light line"
                      to="/about"
                      id="offcanvasNavbarDropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      About Us
                    </NavLink></li>
                    <li>
                      <NavLink style={{ backgroundColor: 'rgb(17, 34, 13)' }}
                        className=" dropdown-item text-light line"
                        role="button"
                        to="/frequentlyAsk"
                        aria-expanded="false"
                      >
                        Help
                      </NavLink>
                    </li>


                  </ul>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className="nav-link mx-3 text-light line "
                    to="/OurTeam"
                  >
                    Our Team
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link mx-3 text-light line"
                    data-toggle="pill"
                    to="/workshop"
                  >
                    Workshops
                  </NavLink>
                </li>

                <li className="nav-item dropdown text-light">
                  <NavLink
                    className="nav-link dropdown-toggle mx-3 text-light line"
                    to="/domain"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Domains
                  </NavLink>

                  <ul
                    className="dropdown-menu "
                    aria-labelledby="offcanvasNavbarDropdown"
                    style={{
                      backgroundColor: 'rgb(17, 34, 13)',
                      width: '100%',
                    }}
                  >
                    <li>
                      <NavLink
                        className="dropdown-item  text-light line"
                        activeClassName="active "
                        to="Chemfor"
                      >
                        Chemfor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Electrica"
                      >
                        Electrica
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Kermis"
                      >
                        Kermis
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Karyarachna"
                      >
                        Karyarachna
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Mechanica"
                      >
                        Mechanica
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Plexus"
                      >
                        Plexus
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="Robozar"
                      >
                        Robozar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item text-light line"
                        activeClassName="active "
                        to="genesis"
                      >
                        Genesis
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  mx-3 text-light line"
                    aria-current="page"
                    activeClassName="active "
                    to="/ca"
                  >
                    CA Portal
                  </NavLink>
                </li>
                {authContext.isUserLoggedIn && (
                  <button
                    className="btn btn-md btn-outline-light active mx-3"
                    activeClassName="active "
                    onClick={logOutHandler}
                    //  to="/"
                    data-toggle="button"
                    aria-pressed="true"
                    autoComplete="off"
                    role="button"
                  >
                    Log out
                  </button>
                )}
                {!authContext.isUserLoggedIn && (
                  <NavLink
                    className="btn btn-md btn-outline-light active  signIn my-1"
                    activeClassName="active "
                    to="/signin"
                    data-toggle="button"
                    aria-pressed="true"
                    autoComplete="off"
                    role="button"
                  >
                    Sign in
                  </NavLink>
                )}
              </ul>
            </div>
          </div>
        </div>
      
      </div>
     
    </>
  );
};

export default Navbar;
