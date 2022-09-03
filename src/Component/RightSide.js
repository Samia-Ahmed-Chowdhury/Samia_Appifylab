import React from 'react'
import "./RightSide.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function RightSide() {
  return (
    <>
      <section id="Right_side">
        <div className="row">
          <div className="Right_bar col-xl-10 col-lg-10 col-md-10 col-sm-0 col-0  m-auto ">
            <h1>You Might Like</h1>
            <hr />
            <div className="row">
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-0 col-0    ">
                <AccountCircleIcon className='user' />
              </div>
              <div className=" d-flex flex-column justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-0 col-0    ">
                <span>Sadia</span>
                <h5>sfdasd</h5>
              </div>
            </div>

            <div className="row   ">
              <div className="d-flex h-btn py-4">
                <Link to="/page">
                  <button className="hero-btn" href="#">Ignore</button></Link>
                <Link to="/page">
                  <button className="hlper-btn" href="#">Follow</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="Right_bar col-xl-10 col-lg-10 col-md-10 col-sm-0 col-0  m-auto ">
            <h1>Your Friends</h1>

            <form id="form">
              <div className="right_form_row">
                <input type="search" required />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="row mt-5">
              <div className='d-flex align-items-center'>
                <img src='../images/user_img.png' alt="img" className='img-fluid' style={{ width: "20%" }} />
                <h5>admin </h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className='d-flex align-items-center'>
                <img src='../images/sadek.png' alt="img" className='img-fluid' style={{ width: "20%" }} />
                <h5>Sadek Hossain </h5>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default RightSide