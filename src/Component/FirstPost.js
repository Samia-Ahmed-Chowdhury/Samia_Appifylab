import React from 'react'
import "./FirstPost.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Reaction from './Reaction';
import CommentBox from './CommentBox';
import Comment from './Comment';
import LanguageIcon from '@mui/icons-material/Language';
function FirstPost() {
    return (
        <>
            <div className='container' style={{ background: "white",borderRadius:"10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <AccountCircleIcon style={{ fontSize: "4.5rem" }} />
                    </div>
                    <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-3 ">
                        <h4>Adnan Chowdhury</h4>
                        <p>1 hours ago  <LanguageIcon style={{paddingLeft:"2px"}}/> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>

                <div className='post_row row px-4'>
                    <h6>your favourite game</h6>
                </div>

                <div className=' vote_form_row row'>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 ">
                        <div className='row my-4'>
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
                        <div className='row my-4 '>
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
                            <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                            <span>I vote</span>
                        </div>

                    </div>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <div className='row my-4'>
                            <HighlightOffIcon style={{ fontSize: "3.5rem" }} />
                        </div>
                        <div className='row my-4'>
                            <HighlightOffIcon style={{ fontSize: "3.5rem" }} />
                        </div>
                        <div className='row my-4'>
                            <HighlightOffIcon style={{ fontSize: "3.5rem" }} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <span style={{ textAlign: "end", fontSize: "10px", paddingRight: "28px" }}> 1 Comment</span>
                </div>
                <Reaction />
                <CommentBox />

                <div className='comment row'>
                    <div className=" d-flex justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                    </div>
                    <Comment />

                    <div className=" d-flex justify-content-center  col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <MoreHorizIcon style={{ fontSize: "2.5rem" }} />
                    </div>
                </div>



            </div>
        </>
    )
}

export default FirstPost