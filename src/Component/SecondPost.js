import React from 'react'
import "./SecondPost.css";
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Reaction from './Reaction';
import CommentBox from './CommentBox';

function SecondPost() {

    return (
        <>
            <div className='container my-4' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <AccountCircleIcon style={{ fontSize: "4.5rem" }} />
                    </div>
                    <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 ">
                        <h4>Adnan Chowdhury <span> 😊  is feeling ok </span></h4>
                        <p>1 hours ago <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon className='dropdown' data-bs-toggle="dropdown"
                            aria-expanded="false" style={{ fontSize: "2rem" }} />
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to=" "><BookmarkIcon style={{ paddingRight: "2px" }} /> Saved Post</Link></li>
                            <li><Link class="dropdown-item" to=" "><FlagIcon style={{ paddingRight: "2px" }} />Report Post</Link></li>
                            <li><Link class="dropdown-item" to=" "><EditIcon style={{ paddingRight: "2px" }} />Edit Post</Link></li>
                            <li><Link class="dropdown-item" to=" "><RemoveIcon style={{ paddingRight: "2px" }} />Delete Post</Link></li>
                            <hr />
                            <li><Link class="dropdown-item" to=" "><LinkIcon />Oprn post in new tab</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='post_row row px-4'>
                    <h6>Have a good day !</h6>
                </div>




                <div className='img_row row mx-5 my-4 m-auto'>
                    <div className="d-flex justify-content-end col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  ">
                        <div>
                            <img src='../images/img1.png' alt="img" className='img-fluid' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-start col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  ">
                        <div>
                            <img src='../images/img1.png' alt="img" className='img-fluid' />
                        </div>
                    </div>
                    <div className='row my-4 m-auto'>
                        <div className=" d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4  ">
                            <img src='../images/img1.png' alt="img" className='img-fluid' />
                        </div>
                        <div className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4  ">
                            <img src='../images/img1.png' alt="img" className='img-fluid' />
                        </div>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto last_img ">
                            <img src='../images/img1.png' alt="img" className='img-fluid ' />
                            <h3 className='count_num'>+1</h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <span style={{ textAlign: "start", fontSize: "10px", paddingLeft: "28px" }}>
                        <FavoriteIcon style={{ color: "red" }} /> You
                    </span>
                </div>

                <Reaction />
                <CommentBox />
            </div>

        </>
    )
}

export default SecondPost