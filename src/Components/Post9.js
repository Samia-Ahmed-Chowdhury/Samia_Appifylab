import React from 'react'
import "./Post.css"
import CommentBox from './CommentBox'
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import LinkIcon from '@mui/icons-material/Link';

function Post9() {
    return (
        <>
            <section id="post9 ">
                <div className='container mt-4 pb-5' style={{ background: "white", borderRadius: "10px" }}>

                    {/* ----------Post user info-------- */}

                    <div className='row post_user_info py-3'>
                        <div className="d-flex align-items-center ">
                            <img src="../images/post3.png" alt="img" className='user_profile  img-fluid rounded-circle' />
                        </div>
                        <div className="  ">
                            <h4>Flo Pharoah</h4>
                            <p>26 days ago <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                        </div>

                        <div className="d-flex align-items-center mx-auto me-0 ">
                            <KeyboardArrowDownIcon className='dropdown' data-bs-toggle="dropdown"
                                aria-expanded="false" style={{ fontSize: "2.5rem" }} />
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to=" "><BookmarkIcon style={{ paddingRight: "2px" }} /> Saved Post</Link></li>
                                <li><Link className="dropdown-item" to=" "><FlagIcon style={{ paddingRight: "2px" }} />Report Post</Link></li>
                                <li><Link className="dropdown-item" to=" "><EditIcon style={{ paddingRight: "2px" }} />Edit Post</Link></li>
                                <li><Link className="dropdown-item" to=" "><DeleteSharpIcon style={{ paddingRight: "2px" }} />Delete Post</Link></li>
                                <hr />
                                <li><Link className="dropdown-item" to=" "><LinkIcon />Oprn post in new tab</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* ----------end-----Post user info-------- */}
                    {/* ----------Status-------- */}
                    <div className='post_row row ' >
<h6>I never seeked validation so your option of my option is something you really could've kept to yourself!! ?????????????????</h6>
                    </div>
                    {/* ----------end--------Status-------- */}

                    {/* ----------Reactions-------- */}
                    <div className='reactions row mt-5'>
                        <div className=" d-flex">
                            <img src='../images/like.svg' alt='react' />
                            <p>2</p>
                        </div>
                        <div className='comment_span'>3 Comments </div>
                    </div>
                    {/* ----------end--------Reactions-------- */}
                    {/* -----------actions-------- */}
                    <div className='actions row mt-2 '>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="../images/like_action.svg" alt='react' />
                                <p>Like</p>
                            </div>
                        </div>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src="../images/comment.svg" style={{ height: "16px" }} alt='react' />
                                <p>Comment</p>
                            </div>
                        </div>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src="../images/share.svg" alt='react' />
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                    {/* ----------end--------actions-------- */}
                   
                    <CommentBox />
                </div>
            </section>
        </>
    )
}

export default Post9