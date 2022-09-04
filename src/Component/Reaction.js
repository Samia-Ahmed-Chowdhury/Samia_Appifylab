import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';

function Reaction() {
  return (
    <>
              <div className='react row my-4 '>
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                        <div className='d-flex justify-content-center'>
                            <ThumbUpOffAltIcon style={{ fontSize: "1.9rem" }} />
                            <p>Like</p>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                        <div className='d-flex justify-content-center '>
                            <ChatBubbleOutlineIcon style={{ fontSize: "1.9rem" }} />
                            <p>Comment</p>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                        <div className='d-flex justify-content-center'>
                            <ReplyIcon style={{ fontSize: "1.9rem" }} />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Reaction