import React from 'react'
import "./Suggest.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
function MightLike() {
    return (
        <>
            <div className="responsive_show container my-4" style={{ background: "white", borderRadius: "10px" }}>
                <div className="row might_like py-4">
                  
                        <h1>You Might Like</h1>
                        <hr />
                        <div className="might_like_row col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  m-auto ">
                        <div className="row">
                            <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 d-flex justify-content-center align_items-center ">
                                <AccountCircleIcon style={{ fontSize: "3rem" }} />
                            </div>
                            <div className=" d-flex flex-column justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6   ">
                                <span>Sadia</span>
                                <h5>sfdasd</h5>
                            </div>
                        </div>
                    </div>
                    <div className="might_like_row col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  m-auto d-flex justify-content-end">
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
            </div>
        </>
    )
}

export default MightLike