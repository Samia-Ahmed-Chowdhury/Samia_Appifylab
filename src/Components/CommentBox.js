import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function CommentBox() {
    return (
        <>
            <div className='comment_row row mt-4'>
                <div className=" d-flex align-items-center  ">
                <AccountCircleIcon style={{ fontSize: "3.2rem" }} />
                </div>

                <div className="d-flex justify-content-evenly align-items-center">
                 <img src="../images/reactions.svg"  alt='react'  />
                 <img  src="../images/attach.svg"  alt='react'  />
                 <img  src="../images/gif.svg"  alt='react'  />
                </div>

                <div className="  " >
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

export default CommentBox