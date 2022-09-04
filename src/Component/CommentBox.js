import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AttachmentIcon from '@mui/icons-material/Attachment';

function CommentBox() {
  return (
    <>
                  <div className='comment_row row'>
                    <div className=" d-flex justify-content-center align-items-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                        <AccountCircleIcon style={{ fontSize: "3.5rem" }} />
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center col-xl-3 col-lg-3 col-md-3 col-sm-2 col-2 ">
                        <EmojiEmotionsIcon style={{ fontSize: "2rem" }} />
                        <AttachmentIcon style={{ fontSize: "2.5rem" }} />
                        <GifBoxIcon style={{ fontSize: "2rem" }} />
                    </div>

                    <div className=" col-xl-7 col-lg-7 col-md-7 col-sm-8 col-8 " style={{ padding: "30px" }}>
                        <form className='comment_form'>
                            <input type="text" name="text" placeholder="Write you comment" />
                            <button className="submit_btn" type="submit">
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
    </>
  )
}

export default CommentBox