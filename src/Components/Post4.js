import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import LinkIcon from '@mui/icons-material/Link';
function Post4() {
    return (
        <>
            <section id="post4">
                <div className='container pb-5 mt-4' style={{ background: "white", borderRadius: "10px" }}>

                    {/* ----------Post user info-------- */}

                    <div className='row post_user_info py-3'>
                        <div className="d-flex align-items-center ">
                            <img src="../images/img4.png" alt="img" className='user_profile  img-fluid rounded-circle' />
                        </div>
                        <div className="  ">
                            <h4>Shakil Ahmed
                                <svg style={{marginLeft:"3px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM15.3773 12.1617L10.2586 15.8859C10.2305 15.9061 10.1975 15.9181 10.163 15.9207C10.1285 15.9233 10.094 15.9164 10.0633 15.9006C10.0325 15.8849 10.0067 15.861 9.98863 15.8315C9.97057 15.802 9.96099 15.7681 9.96094 15.7336V8.28984C9.96082 8.25522 9.9703 8.22124 9.98832 8.19167C10.0063 8.1621 10.0322 8.1381 10.063 8.12232C10.0938 8.10654 10.1284 8.09961 10.1629 8.10229C10.1975 8.10497 10.2306 8.11716 10.2586 8.1375L15.3773 11.8594C15.4015 11.8765 15.4213 11.8991 15.4349 11.9254C15.4485 11.9517 15.4556 11.9809 15.4556 12.0105C15.4556 12.0402 15.4485 12.0694 15.4349 12.0957C15.4213 12.122 15.4015 12.1446 15.3773 12.1617V12.1617Z" fill="black" />
                                </svg>
                                BLACK BUSINESS OWNERS
                            </h4>
                            <p>1 hours ago <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
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
                    <div className='post_row row px-2'>
                        <h6>Hi everyone</h6>
                    </div>
                    {/* ----------end--------Status-------- */}

                    {/* ----------Reactions-------- */}
                    <div className='reactions row mt-5'>
                        <div className="postNum2 d-flex">
                        <img src='../images/like.svg' alt='react' />
                            <img src='../images/love.svg' alt='react' />
                            <p>6</p>
                        </div>
                        <div className='comment_span'> 1 comment</div>
                    </div>
                    {/* ----------end--------Reactions-------- */}
                    {/* -----------actions-------- */}
                    <div className='actions row mt-2 '>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <div className=" d-flex justify-content-center align-items-center">
                                <img src="../images/like.svg" alt='react' />
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
                </div>
            </section>
        </>
    )
}

export default Post4