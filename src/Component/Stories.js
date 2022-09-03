import React from 'react'
import "./Stories.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Stories() {
    return (
        <>
            <section id="stories">
                <div className='container'>
                    <div className="row ">
                        <div className="stories_col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-end ">
                            <div className='card'>
                                <img src='../images/st1.png' alt="img" className='img-fluid' />

                                <div className='overlay'>

                                </div>
                                <div className='add_story_div'>
                                    <img src='../images/add_icon.svg' alt="img" style={{ maxWidth: "50%" }} className='img-fluid' />
                                    <p>Your Story</p>
                                </div>
                            </div>

                        </div>
                        <div className="stories_col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 ">
                            <div className='user_story_card card'>
                                <AccountCircleIcon className='user_story_icon' />
                                <div>

                                    <img src='../images/st2.png' alt="img" className='img-fluid' />
                                </div>

                                <div className='user_story_div'>
                                    <p>Your Story</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row my-5 p-4' style={{ background: "white", borderRadius: "10px" }}>
                        <div className='row pb-3'>
                            <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 m-auto">
                                <AccountCircleIcon style={{ fontSize: "3rem" }} />
                            </div>
                            <div className=" col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 m-auto">
                                <form id="form">
                                    <div className="form_row">
                                        <input type="search" placeholder="Create Your Post" required />

                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />

                        <div className='feeling_part row py-2' style={{ background: "white" }}>
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex'>
                                    <img src='../images/background_icon.png ' style={{height:"16px"}} alt="img" className='img-fluid' />
                               <p>Background</p>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex'>
                                    <img src='../images/photo.png' style={{height:"16px"}} alt="img" className='img-fluid' />
                                    <p>Photo/Video</p>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex'>
                                    <img src='../images/feeling.png'style={{height:"14px"}} alt="img" className='img-fluid' />
                                    <p>Feeling/Activity</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row my-5 ' style={{ background: "white", borderRadius: "10px" }}>
                        <div className='row'>
                            <div className="py-3 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                <h5 style={{color:"red",paddingLeft:"10px"}}>Public Post</h5>
                                </div>
                                <div className="py-3 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                <h5>Friend Post</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stories