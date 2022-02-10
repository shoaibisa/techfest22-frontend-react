import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


//images import
import headerLogo from '../../images/header-logo.png';


const Navbar = () => {
    


    return (
     <>
            <div className="navbar navbar-dark navbar-expand-lg  fixed-top" style={{backgroundColor: "black"}} >
            <div className="container-fluid font-weight-light my-1" >
                <NavLink className="navbar-brand mx-2" to="/#">
                    <img src={headerLogo} className="logo" alt="" width="200" height="35" />
                </NavLink>
                <button className="navbar-toggler btn-outline-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbarLg" aria-controls="offcanvasNavbarLg">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"  style={{color:"white", fontSize:"28px"}}></i>
                    </span>
                </button>
                <div className="offcanvas offcanvas-end"  style={{backgroundColor: "black", borderRadius: "50px 0 0 50px", height:"80%", width:"50%"}} tabindex="-1"
                    id="offcanvasNavbarLg" aria-labelledby="offcanvasNavbarLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title p-1 text-light" id="offcanvasNavbarLabel">TechFest'22</h5>
                        <button type="button" className="btn-close text-reset btn btn-light" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" 
                    >
                        <ul className="navbar-nav text-light justify-content-end flex-grow-1 pe-3 sm ">
                            <li className="nav-item home "></li>
                            <li className="nav-item" >
                                <NavLink className="nav-link mx-3 text-light line " activeClassName="active " data-toggle="pill" aria-current="page"
                                   exact to="/">Home</NavLink> </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3 line text-light" data-toggle="pill" aria-current="page"
                                  exact  to="/about">About
                                    Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3 text-light line" data-toggle="pill" exact to="/workshop">Workshops</NavLink>
                            </li>
                            <li className="nav-item dropdown text-light">
                                <NavLink className="nav-link dropdown-toggle mx-3 text-light line" exact to="/domain"
                                
                                    id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Domains
                                </NavLink>

                                <ul className="dropdown-menu " aria-labelledby="offcanvasNavbarDropdown"
                                style={{backgroundColor :"rgb(17, 34, 13)", width: "100%", position: "absolute", bottom:"-673%"}}>
                                   
                                    <li><NavLink className="dropdown-item  text-light line" activeClassName="active " exact to="Chemfor">Chemfor</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Electrica">Electrica</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Kermis">Kermis</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Karyarachna">Karyarachna</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Mechanica">Mechanica</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Plexus">Plexus</NavLink></li>
                                    <li><NavLink className="dropdown-item text-light line" activeClassName="active " exact to="Robozar">Robozar</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  mx-3 text-light line" aria-current="page" activeClassName="active " exact to="/ca">CA Portal</NavLink>
                            </li>
                            <button className="btn btn-outline-light mx-3" type="submit">Sign in</button>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </>

            
    );
}

export default Navbar;
