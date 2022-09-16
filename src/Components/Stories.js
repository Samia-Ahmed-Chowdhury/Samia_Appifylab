import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Stories() {
    return (
        <>
            <section id="stories">
                <div className='container'>
                    <div className="stories_col ">
                         <div className='card'>
                                <img src='../images/st1.png' alt="img" className='img-fluid' />
                                <div className='overlay'>

                                </div>
                                <div className='add_story_div'>
                                    <img src='../images/add_icon.svg' alt="img" style={{ maxWidth: "50%" }} className='img-fluid' />
                                    <p>Your Story</p>
                                </div>
                            </div>

                         <div className='user_story_card card'>
                                <AccountCircleIcon className='user_story_icon' />
                                <div>
                                    <img src='../images/st2.png' alt="img" className='img-fluid' />
                                </div>

                                  <p className='user_story_div'>Adnan Chowdhury</p>
                               
                            </div>

                      
                    </div>

                    <div className='row my-4 p-4' style={{ background: "white", borderRadius: "10px" }}>
                        <div className='form_container row pb-3'>
                            <div className="  ">
                                <AccountCircleIcon style={{ fontSize: "4rem", color: "#E1E1E1" }} />
                            </div>
                            <div className="">
                                <form id="form">
                                    <div className="post_form_row">
                                        <input type="search" placeholder="Create a new Post" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />

                        <div className='feeling_part row py-2' >
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex '>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="none">
                                        <path d="M8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 14V2C8.78793 2 9.56815 2.15519 10.2961 2.45672C11.0241 2.75825 11.6855 3.20021 12.2426 3.75736C12.7998 4.31451 13.2417 4.97595 13.5433 5.7039C13.8448 6.43185 14 7.21207 14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14Z" fill="black" />
                                    </svg>
                                    <p>Background</p>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{height:"12px"}}  viewBox="0 0 16 16" fill="none">
                                        <path d="M14.4444 3.55556V14.4444H3.55556V3.55556H14.4444ZM14.4444 2H3.55556C2.7 2 2 2.7 2 3.55556V14.4444C2 15.3 2.7 16 3.55556 16H14.4444C15.3 16 16 15.3 16 14.4444V3.55556C16 2.7 15.3 2 14.4444 2ZM10.6644 8.89111L8.33111 11.9011L6.66667 9.88667L4.33333 12.8889H13.6667L10.6644 8.89111Z" fill="black" />
                                    </svg>
                                    <p>Photo/Video</p>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                <div className='d-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="none">
                                        <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14V14Z" fill="black" />
                                        <path d="M3.7495 8.37113C3.84998 8.31311 3.9694 8.29739 4.08147 8.32742C4.19355 8.35745 4.28911 8.43077 4.34712 8.53125C4.61585 8.99705 5.00255 9.38382 5.46829 9.65264C5.93403 9.92145 6.46237 10.0628 7.00012 10.0625C7.53788 10.0628 8.06622 9.92145 8.53196 9.65264C8.9977 9.38382 9.3844 8.99705 9.65312 8.53125C9.68164 8.48109 9.7198 8.43707 9.7654 8.40172C9.811 8.36637 9.86314 8.34039 9.91882 8.32527C9.9745 8.31015 10.0326 8.3062 10.0898 8.31364C10.1471 8.32107 10.2022 8.33975 10.2522 8.3686C10.3022 8.39745 10.3459 8.4359 10.381 8.48173C10.416 8.52757 10.4417 8.57988 10.4564 8.63566C10.4712 8.69144 10.4747 8.74959 10.4669 8.80675C10.4591 8.86392 10.4401 8.91898 10.4109 8.96875C10.0654 9.56756 9.5682 10.0648 8.96945 10.4104C8.3707 10.756 7.69147 10.9378 7.00012 10.9375C6.30878 10.9378 5.62955 10.756 5.0308 10.4104C4.43205 10.0648 3.93489 9.56756 3.58937 8.96875C3.53136 8.86827 3.51564 8.74885 3.54567 8.63678C3.5757 8.5247 3.64902 8.42914 3.7495 8.37113ZM6.12512 5.6875C6.12512 6.412 5.73312 7 5.25012 7C4.76712 7 4.37512 6.412 4.37512 5.6875C4.37512 4.963 4.76712 4.375 5.25012 4.375C5.73312 4.375 6.12512 4.963 6.12512 5.6875ZM9.62512 5.6875C9.62512 6.412 9.23312 7 8.75012 7C8.26712 7 7.87512 6.412 7.87512 5.6875C7.87512 4.963 8.26712 4.375 8.75012 4.375C9.23312 4.375 9.62512 4.963 9.62512 5.6875Z" fill="black" />
                                    </svg>
                                    <p>Feeling/Activity</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row my-4 ' style={{ background: "white", borderRadius: "10px" }}>
                        <div className='post'>
                               <h5 style={{ color: "red", paddingLeft: "10px" }}>Public Post</h5>
                              <h5>Friend Post</h5>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default Stories