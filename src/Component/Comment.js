import React from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Comment() {
    return (
        <>
            <div className=" col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 ">
                <div className='row p-4' style={{ background: "#f2f2f2", borderRadius: "20px" }}>
                    <h5>Adnan Chowdhury</h5>
                    <img src='../images/comment_pic.png' alt="img" className='img-fluid' />
                </div>

                <div className='d-flex  op_row row justify-content-start   my-3'>
                    <div className="   col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1  ">
                        <p>Like </p>
                    </div>
                    <div className="  col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1  ">
                        <p>Reply </p>
                    </div>
                    <div className="  col-xl-6 col-lg-6 col-md-9 col-sm-9 col-9  ">
                        <p> . 50 mintues ago </p>
                    </div>
                </div>



                <div className=' d-flex my-1 p-2' style={{ background: "#f2f2f2", borderRadius: "10px" }}>

                    <div className="  col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                    </div>
                    <div className=" col-xl-6 col-lg-6 col-md-7 col-sm-7 col-7 pt-2 px-4 ">
                        <h5> Adnan Chowdhury</h5>
                        <p> hlo</p>
                    </div>
                    <div className="  col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <MoreHorizIcon style={{ fontSize: "2.5rem" }} />
                    </div>
                </div>
                <div className=' d-flex op_row row   my-3'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-3 col-3  ">
                        <p>Like</p>

                    </div>
                    <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  ">
                        <p>. 1 second ago</p>

                    </div>
                </div>


                <div className='comment_row row'>
                    <div className=" d-flex justify-content-center align-items-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <AccountCircleIcon style={{ fontSize: "3.2rem" }} />
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <EmojiEmotionsIcon style={{ fontSize: "2rem" }} />
                        <AttachmentIcon style={{ fontSize: "2.5rem" }} />
                        <GifBoxIcon style={{ fontSize: "2rem" }} />
                    </div>

                    <div class=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 " style={{ padding: "30px" }}>
                        <form className='comment_form'>
                            <input type="text" name="text" placeholder="Write comment" />
                            <button class="submit_btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 28"
                                    fill="none">
                                    <path
                                        d="M0.432617 14.9395L7.27524 19.9821L18.1866 9.39004L11.3003 22.9484L18.1429 27.9911L24.7124 0.534885L0.432617 14.9395Z"
                                        fill="#525151" />
                                </svg>
                            </button>
                        </form>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Comment