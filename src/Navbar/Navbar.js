import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <>
            <header className='header'>
                <nav className="navbar navbar-expand-sm">
                    <div className="container ">
                        <div className="logo">
                            <NavLink to="/" >
                                <img src={logo} alt="logo" className="img-fluid" />
                            </NavLink>
                        </div>
                        <div className='search_box'>
                            <form id="form">
                                <div className="form_row">
                                    <input type="search" placeholder="Search" required />
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='widget '>
                            <ul className='d-flex flex-row'>
                                <li>
                                    <NavLink className="nav-link " aria-current="page" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="nav-link "  to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="nav-link "  to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="nav-link "  to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                        </svg>
                                    </NavLink>
                                </li>
                                <li className='search_li'>
                                    <svg  className="search_icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </li>
                                <li className='user'>
                                    <NavLink className="nav-link "  to="/">
                                        <AccountCircleIcon />
                                        <span>  Adnan Chowdhury <KeyboardArrowDownIcon /> </span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>


                        <button className="navbar-toggler" type="button" id="navbar-toggler">
                            <label>
                                <input className="toggle_btn" type="checkbox" id="toggle_btn" onClick={() => setShow(!show)} />
                                <div className="toggle">
                                    <span className="top_line common"></span>
                                    <span className="mid_line common"></span>
                                    <span className="end_line common"></span>
                                </div>
                            </label>
                        </button>

                    </div>





 { 
            /* <!-- ---------mbl nav-------------- --> */

                show ? <div className="slide" id="slide">
                    <ul className="navbar-nav  me-auto mb-lg-0 m-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/page" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Features
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/D_management">Driver management</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">Fleet management</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">Scheduling</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">Payroll</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">Complianxe</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/page">Driver app</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page">Our story</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page">Contact Us</NavLink>
                        </li>
                        <div className="btn">
                            <NavLink className="nav-link" to="/page">
                                <button type="btn" className="nav_btn">Book a demo</button>
                            </NavLink>
                        </div>

                    </ul>
                </div>
                 : null
            }



                </nav>
            </header>
        </>
    )
}

export default Navbar