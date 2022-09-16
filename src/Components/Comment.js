import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Comment() {
    return (
        <>
            <div className='comment row my-4'>
                <div className="  ">
                    <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                </div>

                <div className="  ">
                    <div className='row py-4 px-2' style={{ background: "#f2f2f2", borderRadius: "20px" }}>
                        <h5>Adnan Chowdhury</h5>
                        <img src='../images/comment_pic.png' alt="img" className='img-fluid' />
                    </div>

                    <div className='  op_row row   my-3'>
                        <p style={{ fontWeight: "600" }}>Like </p>
                        <p style={{ fontWeight: "600" }}>Reply </p>
                        <p> . 50 mintues ago </p>
                    </div>
                </div>
                <div className=" ">
                    <MoreHorizIcon style={{ fontSize: "2.5rem", marginTop: "100px" }} />
                </div>
            </div>

            <div className='row my-1 p-2 mx-5' >
                <div className="col-xl-5 col-lg-6 col-md-5 col-sm-5 col-5 replied_row">
                    <div className='row d-flex pt-3' style={{ background: "#f2f2f2", borderRadius: "9px" }} >
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                            <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9  pt-2 px-4 ">
                            <h5> Adnan Chowdhury</h5>
                            <p> hlo</p>
                        </div>
                    </div>
                    <div className=' d-flex row my-1 p-2 ' >
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 ">
                            <p style={{ fontWeight: "600" }}>Like</p>
                        </div> <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9 ">
                            <p>- 1 second ago</p>
                        </div>

                    </div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1  ">
                    <MoreHorizIcon style={{ fontSize: "2.5rem", marginTop: "15px" }} />
                </div>
            </div>

            <div className=' row my-4  pb-4 mx-5'>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 ">
                    <AccountCircleIcon style={{ fontSize: "3.2rem" }} />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-evenly align-items-center">
                    <img src="../images/reactions.svg" alt='react' />
                    <img src="../images/attach.svg" alt='react' />
                    <img src="../images/gif.svg" alt='react' />
                </div>

                <div className="  col-xl-8 col-lg-8 col-md-7 col-sm-7 col-7" >
                    <form className='comment_form'>
                        <input type="text" name="text" placeholder="Write you comment..." />
                        <button className="submit_btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 28"
                                fill="none">
                                <path
                                    d="M0.432617 14.9395L7.27524 19.9821L18.1866 9.39004L11.3003 22.9484L18.1429 27.9911L24.7124 0.534885L0.432617 14.9395Z"
                                    fill="#525151" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>




        </>
    )
}

export default Comment