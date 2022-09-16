import React from 'react'
import "./Post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function FormVote() {
    return (
        <>
            <div className=' vote_form_row row'>
                <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 ">
                    <div className='row my-3'>
                        <div className="d-flex align-items-center justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                            <input type="checkbox" defaultChecked />
                        </div>
                        <div className=" label col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                            <h5>Added by you</h5>
                            <h4>Football</h4>
                        </div>
                    </div>
                    <div className='row '>
                        <div className="d-flex align-items-center justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                            <input type="checkbox" />
                        </div>
                        <div className=" label col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                            <h5>Added by you</h5>
                            <h4>Cricket</h4>
                        </div>
                    </div>
                    <div className='row my-3 '>
                        <div className="d-flex align-items-center justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                            <input type="checkbox" />
                        </div>
                        <div className=" label col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                            <h5>Added by you</h5>
                            <h4>Badminton</h4>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                    <div className='row my-4'>
                        <AccountCircleIcon style={{ fontSize: "4rem", color: "#E1E1E1" }} />
                        <span>I vote</span>
                    </div>

                </div>
                <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                    <div className='row my-4'>
                        <HighlightOffIcon style={{ fontSize: "3.7rem" }} />
                    </div>
                    <div className='row my-4'>
                        <HighlightOffIcon style={{ fontSize: "3.7rem" }} />
                    </div>
                    <div className='row my-4'>
                        <HighlightOffIcon style={{ fontSize: "3.7rem" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormVote