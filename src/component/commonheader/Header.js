import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from "../../Images/1.png"
export default class Header extends Component {
    render() {
        return (
            <>
                {/* navbar */}
                <nav className="navbar navbar-expand-md sticky-top nav-shadow" style={{ height: "81px", backgroundColor: "rgb(255 221 110)" }}>
                    <div className="container-fluid" style={{ width: "100%", backgroundColor: 'rgb(255 221 110)' }}>
                        <NavLink className="navbar-brand" to='/'><img src={logoImg} alt="logo" title='iPower' style={{ height: "60px", width: "80px",background:'transparent', mixBlendMode:"darken" }} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-3 flex-row-reverse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/home">Home</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" to="/about">About</NavLink>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" role="button" data-bs-toggle="dropdown" aria-expanded="false">Challenges</NavLink>
                                    <div>
                                        <ul className="dropdown-menu  text-dark fs-6" style={{ backgroundColor: '#FFFFFF' }}>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/cycling-challenge">Cycling Challenge</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/run-challenge">Run Challenege</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/walk-challenge">Walk Challenge</NavLink></li>
                                            {/* <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/software-development">Software Development</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/digital-marketing">Digital Marketing</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/automated-system">Automated System</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/business-analysis">Business Analysis</NavLink></li>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/socialMedia-marketing">Social Media Marketing</NavLink></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/blog">View Daily Activity</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/gallery">Our Team</NavLink>
                                </li> */}
                                {/* <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/ourProducts">Our Products</NavLink>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our Products</NavLink>
                                    <div>
                                        <ul className="dropdown-menu  text-dark fs-6" style={{ backgroundColor: '#FFFFFF' }}>
                                            <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/product/erp">E.R.P Software</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/product/crm">Andorid App For Sales </NavLink></li>
                                        </ul>
                                    </div>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/contactUs">Contact us</NavLink>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

