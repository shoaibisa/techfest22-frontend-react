import React from "react";

import './Navbar.css'

//images import
import headerLogo from '../../images/header-logo.png';


const Navbar = () => {
    


    return (
        <>
     
            <div className="navbar navbar-dark navbar-expand-lg  fixed-top"  style={{backgroundColor: "black"}}>
            <div className="container-fluid font-weight-light my-1" >
                <a className="navbar-brand mx-2" href="/#">
                    <img src={headerLogo} className="logo" alt="" width="200" height="35" />
                </a>
                <button className="navbar-toggler btn-outline-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbarLg" aria-controls="offcanvasNavbarLg">
                    <span className="navbar-toggler-icon">
                        <i className=""></i>
                    </span>
                </button>
                <div className="offcanvas offcanvas-end"  style={{backgroundColor: "black"}}
                    id="offcanvasNavbarLg" aria-labelledby="offcanvasNavbarLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title p-1 text-light" id="offcanvasNavbarLabel">TechFest'22</h5>
                        <button type="button" className="btn-close text-reset btn btn-light" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav text-light justify-content-end flex-grow-1 pe-3 sm ">
                            <li className="nav-item home "></li>
                            <li className="nav-item" >
                                <a className="nav-link mx-3 text-light line active " data-toggle="pill" aria-current="page"
                                    href="/#">Home</a> </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 line text-light" data-toggle="pill" aria-current="page"
                                    href="/#">About
                                    Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 text-light line" data-toggle="pill" href="/#">Workshops</a>
                            </li>
                            <li className="nav-item dropdown text-light">
                                <a className="nav-link dropdown-toggle mx-3 text-light line" href="/#"
                                    id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Domains
                                </a>

                                <ul className="dropdown-menu " aria-labelledby="offcanvasNavbarDropdown">
                                   
                                    <li><a className="dropdown-item  text-light line" href="Chemfor">Chemfor</a></li>
                                    <li><a className="dropdown-item text-light line" href="Electrica">Electrica</a></li>
                                    <li><a className="dropdown-item text-light line" href="Electrica">Electrica</a></li>
                                    <li><a className="dropdown-item text-light line" href="Kermis">Kermis</a></li>
                                    <li><a className="dropdown-item text-light line" href="Karyarachna">Karyarachna</a></li>
                                    <li><a className="dropdown-item text-light line" href="Mechanica">Mechanica</a></li>
                                    <li><a className="dropdown-item text-light line" href="Plexus">Plexus</a></li>
                                    <li><a className="dropdown-item text-light line" href="Robozar">Robozar</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-3 text-light line" aria-current="page" href="/#">CA Portal</a>
                            </li>
                            <button className="btn btn-outline-light mx-3" type="submit">Sign in</button>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </>
    );
};

export default Navbar;
