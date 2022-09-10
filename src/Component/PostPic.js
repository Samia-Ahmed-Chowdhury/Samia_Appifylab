import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import Reaction from './Reaction';
import CommentBox from './CommentBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
function PostPic() {
    return (
        <>
            <div className='container' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <img src='../images/post3.png' alt="img" className='img-fluid rounded-circle' />

                    </div>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 px-3 ">
                        <div className='d-flex align-items-center'>
                            <h4>alfred parchment </h4><span style={{ paddingLeft: "3px" }}> update her profile picture</span>
                        </div>
                        <p>17 hours ago  <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>
                <div className='post_pic row m-auto'>
                
                        <img src='../images/post3.png' alt="img"  />
                   
                </div>
                <div className='row my-5'>
                    <span style={{ textAlign: "start", fontSize: "10px", paddingLeft: "28px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 40" fill="none">
                            <ellipse cx="21" cy="20" rx="21" ry="20" fill="#033CCC" />
                            <path d="M9.548 29.999C9.46674 29.9987 9.38843 29.9685 9.32809 29.914C9.26775 29.8596 9.22962 29.7848 9.221 29.704V29.703L8.001 17.335L8 17.304C8 17.122 8.147 16.975 8.329 16.975H16.562V30L9.548 29.999ZM12.908 26.734V26.735C12.908 26.9923 12.9843 27.2438 13.1273 27.4578C13.2702 27.6717 13.4734 27.8385 13.7111 27.937C13.9489 28.0354 14.2104 28.0612 14.4628 28.011C14.7152 27.9608 14.947 27.8369 15.1289 27.6549C15.3109 27.473 15.4348 27.2412 15.485 26.9888C15.5352 26.7364 15.5094 26.4749 15.411 26.2371C15.3125 25.9994 15.1457 25.7962 14.9318 25.6533C14.7178 25.5103 14.4663 25.434 14.209 25.434H14.207C13.488 25.434 12.906 26.016 12.905 26.735L12.908 26.734ZM13.388 18.734C13.388 18.915 13.535 19.062 13.717 19.062H14.481C14.568 19.062 14.6514 19.0274 14.7129 18.9659C14.7744 18.9044 14.809 18.821 14.809 18.734C14.809 18.647 14.7744 18.5636 14.7129 18.5021C14.6514 18.4406 14.568 18.406 14.481 18.406H13.711C13.6237 18.406 13.5401 18.4407 13.4784 18.5024C13.4167 18.5641 13.382 18.6477 13.382 18.735V18.738L13.388 18.734ZM9.778 18.734C9.778 18.915 9.925 19.062 10.106 19.062H12.611C12.698 19.062 12.7814 19.0274 12.8429 18.9659C12.9044 18.9044 12.939 18.821 12.939 18.734C12.939 18.647 12.9044 18.5636 12.8429 18.5021C12.7814 18.4406 12.698 18.406 12.611 18.406H10.1C10.013 18.406 9.92958 18.4406 9.86807 18.5021C9.80656 18.5636 9.772 18.647 9.772 18.734V18.737L9.778 18.734ZM19.578 28.122C19.4018 28.0625 19.2353 27.9772 19.084 27.869L19.09 27.873L18.99 27.81C18.7571 27.6639 18.527 27.5132 18.3 27.358L18.199 27.287C18.067 27.192 18.005 27.15 17.937 27.154C17.697 27.159 17.457 27.161 17.217 27.164V18.009L17.204 17.239C17.655 16.952 18.071 16.679 18.196 16.575C18.366 16.233 18.534 15.947 18.72 15.673L18.703 15.7C18.788 15.567 18.873 15.435 18.951 15.304L20.675 12.41C20.755 12.274 20.842 12.138 20.929 12.002C21.074 11.786 21.228 11.528 21.369 11.262L21.393 11.213C21.472 11.0515 21.4996 10.8697 21.472 10.692L21.473 10.697L21.467 7.577C21.53 7.123 21.786 6.739 22.147 6.505L22.153 6.501C22.4748 6.21112 22.8832 6.03539 23.315 6.001H23.322L23.385 6C23.726 6 24.048 6.081 24.334 6.224L24.322 6.218C24.513 6.31 24.676 6.408 24.829 6.518L24.819 6.511L24.925 6.581C25.166 6.708 25.346 6.922 25.426 7.181L25.428 7.188C25.615 7.884 25.786 8.517 25.945 9.152L26.011 9.411C26.112 9.751 26.199 10.162 26.255 10.583L26.26 10.625C26.089 12.199 25.76 13.635 25.284 15.003L25.326 14.865L33.019 14.854H33.047C33.2801 14.854 33.5104 14.9036 33.7229 14.9995C33.9353 15.0954 34.1249 15.2354 34.279 15.4102C34.4332 15.585 34.5484 15.7905 34.617 16.0133C34.6856 16.236 34.7061 16.4708 34.677 16.702L34.678 16.694C34.6995 17.0434 34.6281 17.3922 34.4711 17.705C34.3141 18.0179 34.077 18.2835 33.784 18.475L33.776 18.48C34.0566 18.8903 34.1879 19.3845 34.148 19.88V19.873C34.183 20.2656 34.0916 20.6592 33.887 20.9962C33.6825 21.3332 33.3755 21.5959 33.011 21.746L32.999 21.75C33.2227 22.1488 33.3265 22.6037 33.298 23.06V23.054C33.3198 23.3958 33.249 23.7372 33.093 24.0422C32.9371 24.3472 32.7018 24.6045 32.412 24.787L32.404 24.792C32.6082 25.2494 32.6856 25.7534 32.628 26.251L32.629 26.238V26.426C32.6147 26.6723 32.5508 26.9132 32.4412 27.1342C32.3316 27.3553 32.1785 27.5519 31.9911 27.7124C31.8038 27.8729 31.5859 27.9939 31.3507 28.0683C31.1154 28.1426 30.8676 28.1687 30.622 28.145L30.629 28.146H26.2L26.185 28.147L26.169 28.146H26.17H20.26C20.209 28.146 20.156 28.146 20.1 28.154C20.032 28.158 19.96 28.164 19.886 28.164H19.871C19.77 28.1641 19.6694 28.1506 19.572 28.124L19.58 28.126L19.578 28.122ZM13.563 26.735C13.5631 26.6509 13.5797 26.5676 13.6119 26.4899C13.6442 26.4122 13.6914 26.3417 13.751 26.2822C13.8105 26.2228 13.8811 26.1757 13.9589 26.1436C14.0366 26.1114 14.1199 26.0949 14.204 26.095C14.2881 26.0951 14.3714 26.1117 14.4491 26.1439C14.5268 26.1762 14.5973 26.2234 14.6568 26.283C14.7162 26.3425 14.7633 26.4131 14.7954 26.4909C14.8276 26.5686 14.8441 26.6519 14.844 26.736C14.8439 26.9059 14.7763 27.0687 14.656 27.1888C14.5358 27.3088 14.3729 27.3761 14.203 27.376C14.0331 27.3759 13.8703 27.3083 13.7502 27.188C13.6302 27.0678 13.5629 26.9049 13.563 26.735Z" fill="white" />
                        </svg> 3
                    </span>
                </div>
                <Reaction />
                <CommentBox />
            </div>

            <div className='container my-4' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <img src='../images/post3.png' alt="img" className='img-fluid rounded-circle' />

                    </div>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 px-3 ">
                        <div className='d-flex align-items-center'>
                            <h4>Shakil Ahmed
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM15.3773 12.1617L10.2586 15.8859C10.2305 15.9061 10.1975 15.9181 10.163 15.9207C10.1285 15.9233 10.094 15.9164 10.0633 15.9006C10.0325 15.8849 10.0067 15.861 9.98863 15.8315C9.97057 15.802 9.96099 15.7681 9.96094 15.7336V8.28984C9.96082 8.25522 9.9703 8.22124 9.98832 8.19167C10.0063 8.1621 10.0322 8.1381 10.063 8.12232C10.0938 8.10654 10.1284 8.09961 10.1629 8.10229C10.1975 8.10497 10.2306 8.11716 10.2586 8.1375L15.3773 11.8594C15.4015 11.8765 15.4213 11.8991 15.4349 11.9254C15.4485 11.9517 15.4556 11.9809 15.4556 12.0105C15.4556 12.0402 15.4485 12.0694 15.4349 12.0957C15.4213 12.122 15.4015 12.1446 15.3773 12.1617V12.1617Z" fill="black" />
                                </svg>
                                BLACK BUSINESS OWNERS</h4>
                        </div>
                        <p>17 hours ago  <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>
                <div className='post_row row px-4'>
                    <h6>Hi everyone </h6>
                </div>

                <div className='row my-5'>
                    <span style={{ textAlign: "start", fontSize: "12px", paddingLeft: "28px" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 42 40" fill="none">
                            <ellipse cx="21" cy="20" rx="21" ry="20" fill="#033CCC" />
                            <path d="M9.548 29.999C9.46674 29.9987 9.38843 29.9685 9.32809 29.914C9.26775 29.8596 9.22962 29.7848 9.221 29.704V29.703L8.001 17.335L8 17.304C8 17.122 8.147 16.975 8.329 16.975H16.562V30L9.548 29.999ZM12.908 26.734V26.735C12.908 26.9923 12.9843 27.2438 13.1273 27.4578C13.2702 27.6717 13.4734 27.8385 13.7111 27.937C13.9489 28.0354 14.2104 28.0612 14.4628 28.011C14.7152 27.9608 14.947 27.8369 15.1289 27.6549C15.3109 27.473 15.4348 27.2412 15.485 26.9888C15.5352 26.7364 15.5094 26.4749 15.411 26.2371C15.3125 25.9994 15.1457 25.7962 14.9318 25.6533C14.7178 25.5103 14.4663 25.434 14.209 25.434H14.207C13.488 25.434 12.906 26.016 12.905 26.735L12.908 26.734ZM13.388 18.734C13.388 18.915 13.535 19.062 13.717 19.062H14.481C14.568 19.062 14.6514 19.0274 14.7129 18.9659C14.7744 18.9044 14.809 18.821 14.809 18.734C14.809 18.647 14.7744 18.5636 14.7129 18.5021C14.6514 18.4406 14.568 18.406 14.481 18.406H13.711C13.6237 18.406 13.5401 18.4407 13.4784 18.5024C13.4167 18.5641 13.382 18.6477 13.382 18.735V18.738L13.388 18.734ZM9.778 18.734C9.778 18.915 9.925 19.062 10.106 19.062H12.611C12.698 19.062 12.7814 19.0274 12.8429 18.9659C12.9044 18.9044 12.939 18.821 12.939 18.734C12.939 18.647 12.9044 18.5636 12.8429 18.5021C12.7814 18.4406 12.698 18.406 12.611 18.406H10.1C10.013 18.406 9.92958 18.4406 9.86807 18.5021C9.80656 18.5636 9.772 18.647 9.772 18.734V18.737L9.778 18.734ZM19.578 28.122C19.4018 28.0625 19.2353 27.9772 19.084 27.869L19.09 27.873L18.99 27.81C18.7571 27.6639 18.527 27.5132 18.3 27.358L18.199 27.287C18.067 27.192 18.005 27.15 17.937 27.154C17.697 27.159 17.457 27.161 17.217 27.164V18.009L17.204 17.239C17.655 16.952 18.071 16.679 18.196 16.575C18.366 16.233 18.534 15.947 18.72 15.673L18.703 15.7C18.788 15.567 18.873 15.435 18.951 15.304L20.675 12.41C20.755 12.274 20.842 12.138 20.929 12.002C21.074 11.786 21.228 11.528 21.369 11.262L21.393 11.213C21.472 11.0515 21.4996 10.8697 21.472 10.692L21.473 10.697L21.467 7.577C21.53 7.123 21.786 6.739 22.147 6.505L22.153 6.501C22.4748 6.21112 22.8832 6.03539 23.315 6.001H23.322L23.385 6C23.726 6 24.048 6.081 24.334 6.224L24.322 6.218C24.513 6.31 24.676 6.408 24.829 6.518L24.819 6.511L24.925 6.581C25.166 6.708 25.346 6.922 25.426 7.181L25.428 7.188C25.615 7.884 25.786 8.517 25.945 9.152L26.011 9.411C26.112 9.751 26.199 10.162 26.255 10.583L26.26 10.625C26.089 12.199 25.76 13.635 25.284 15.003L25.326 14.865L33.019 14.854H33.047C33.2801 14.854 33.5104 14.9036 33.7229 14.9995C33.9353 15.0954 34.1249 15.2354 34.279 15.4102C34.4332 15.585 34.5484 15.7905 34.617 16.0133C34.6856 16.236 34.7061 16.4708 34.677 16.702L34.678 16.694C34.6995 17.0434 34.6281 17.3922 34.4711 17.705C34.3141 18.0179 34.077 18.2835 33.784 18.475L33.776 18.48C34.0566 18.8903 34.1879 19.3845 34.148 19.88V19.873C34.183 20.2656 34.0916 20.6592 33.887 20.9962C33.6825 21.3332 33.3755 21.5959 33.011 21.746L32.999 21.75C33.2227 22.1488 33.3265 22.6037 33.298 23.06V23.054C33.3198 23.3958 33.249 23.7372 33.093 24.0422C32.9371 24.3472 32.7018 24.6045 32.412 24.787L32.404 24.792C32.6082 25.2494 32.6856 25.7534 32.628 26.251L32.629 26.238V26.426C32.6147 26.6723 32.5508 26.9132 32.4412 27.1342C32.3316 27.3553 32.1785 27.5519 31.9911 27.7124C31.8038 27.8729 31.5859 27.9939 31.3507 28.0683C31.1154 28.1426 30.8676 28.1687 30.622 28.145L30.629 28.146H26.2L26.185 28.147L26.169 28.146H26.17H20.26C20.209 28.146 20.156 28.146 20.1 28.154C20.032 28.158 19.96 28.164 19.886 28.164H19.871C19.77 28.1641 19.6694 28.1506 19.572 28.124L19.58 28.126L19.578 28.122ZM13.563 26.735C13.5631 26.6509 13.5797 26.5676 13.6119 26.4899C13.6442 26.4122 13.6914 26.3417 13.751 26.2822C13.8105 26.2228 13.8811 26.1757 13.9589 26.1436C14.0366 26.1114 14.1199 26.0949 14.204 26.095C14.2881 26.0951 14.3714 26.1117 14.4491 26.1439C14.5268 26.1762 14.5973 26.2234 14.6568 26.283C14.7162 26.3425 14.7633 26.4131 14.7954 26.4909C14.8276 26.5686 14.8441 26.6519 14.844 26.736C14.8439 26.9059 14.7763 27.0687 14.656 27.1888C14.5358 27.3088 14.3729 27.3761 14.203 27.376C14.0331 27.3759 13.8703 27.3083 13.7502 27.188C13.6302 27.0678 13.5629 26.9049 13.563 26.735Z" fill="white" />
                        </svg>
                        <FavoriteIcon style={{ color: "red" }} />

                        8
                    </span>


                    <span style={{ textAlign: "end", fontSize: "10px", paddingRight: "28px" }}> 1 Comment</span>

                </div>
                <Reaction />
                <CommentBox />
            </div>

            <div className='container' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <img src='../images/post3.png' alt="img" className='img-fluid rounded-circle' />

                    </div>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 px-3 ">
                        <div className='d-flex align-items-center'>
                            <h4>Flo Pharoah </h4>
                        </div>
                        <p>22 days ago  <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>
                <div className='post_pic post_row row m-auto'>
                    
                        <h6>Since im detoxing and my head is becoming clearer, it's time for me to
                            dive into this book! It's a self-reflective book! It's a book of self-control and discline ! I hghly recommand 🦾🦾
                        </h6>
                        <img src='../images/post5.png' alt="img" className='img-fluid' />
                
                </div>

                <div className='row my-5'>
                    <span style={{ textAlign: "start", fontSize: "10px", paddingLeft: "28px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 40" fill="none">
                            <ellipse cx="21" cy="20" rx="21" ry="20" fill="#033CCC" />
                            <path d="M9.548 29.999C9.46674 29.9987 9.38843 29.9685 9.32809 29.914C9.26775 29.8596 9.22962 29.7848 9.221 29.704V29.703L8.001 17.335L8 17.304C8 17.122 8.147 16.975 8.329 16.975H16.562V30L9.548 29.999ZM12.908 26.734V26.735C12.908 26.9923 12.9843 27.2438 13.1273 27.4578C13.2702 27.6717 13.4734 27.8385 13.7111 27.937C13.9489 28.0354 14.2104 28.0612 14.4628 28.011C14.7152 27.9608 14.947 27.8369 15.1289 27.6549C15.3109 27.473 15.4348 27.2412 15.485 26.9888C15.5352 26.7364 15.5094 26.4749 15.411 26.2371C15.3125 25.9994 15.1457 25.7962 14.9318 25.6533C14.7178 25.5103 14.4663 25.434 14.209 25.434H14.207C13.488 25.434 12.906 26.016 12.905 26.735L12.908 26.734ZM13.388 18.734C13.388 18.915 13.535 19.062 13.717 19.062H14.481C14.568 19.062 14.6514 19.0274 14.7129 18.9659C14.7744 18.9044 14.809 18.821 14.809 18.734C14.809 18.647 14.7744 18.5636 14.7129 18.5021C14.6514 18.4406 14.568 18.406 14.481 18.406H13.711C13.6237 18.406 13.5401 18.4407 13.4784 18.5024C13.4167 18.5641 13.382 18.6477 13.382 18.735V18.738L13.388 18.734ZM9.778 18.734C9.778 18.915 9.925 19.062 10.106 19.062H12.611C12.698 19.062 12.7814 19.0274 12.8429 18.9659C12.9044 18.9044 12.939 18.821 12.939 18.734C12.939 18.647 12.9044 18.5636 12.8429 18.5021C12.7814 18.4406 12.698 18.406 12.611 18.406H10.1C10.013 18.406 9.92958 18.4406 9.86807 18.5021C9.80656 18.5636 9.772 18.647 9.772 18.734V18.737L9.778 18.734ZM19.578 28.122C19.4018 28.0625 19.2353 27.9772 19.084 27.869L19.09 27.873L18.99 27.81C18.7571 27.6639 18.527 27.5132 18.3 27.358L18.199 27.287C18.067 27.192 18.005 27.15 17.937 27.154C17.697 27.159 17.457 27.161 17.217 27.164V18.009L17.204 17.239C17.655 16.952 18.071 16.679 18.196 16.575C18.366 16.233 18.534 15.947 18.72 15.673L18.703 15.7C18.788 15.567 18.873 15.435 18.951 15.304L20.675 12.41C20.755 12.274 20.842 12.138 20.929 12.002C21.074 11.786 21.228 11.528 21.369 11.262L21.393 11.213C21.472 11.0515 21.4996 10.8697 21.472 10.692L21.473 10.697L21.467 7.577C21.53 7.123 21.786 6.739 22.147 6.505L22.153 6.501C22.4748 6.21112 22.8832 6.03539 23.315 6.001H23.322L23.385 6C23.726 6 24.048 6.081 24.334 6.224L24.322 6.218C24.513 6.31 24.676 6.408 24.829 6.518L24.819 6.511L24.925 6.581C25.166 6.708 25.346 6.922 25.426 7.181L25.428 7.188C25.615 7.884 25.786 8.517 25.945 9.152L26.011 9.411C26.112 9.751 26.199 10.162 26.255 10.583L26.26 10.625C26.089 12.199 25.76 13.635 25.284 15.003L25.326 14.865L33.019 14.854H33.047C33.2801 14.854 33.5104 14.9036 33.7229 14.9995C33.9353 15.0954 34.1249 15.2354 34.279 15.4102C34.4332 15.585 34.5484 15.7905 34.617 16.0133C34.6856 16.236 34.7061 16.4708 34.677 16.702L34.678 16.694C34.6995 17.0434 34.6281 17.3922 34.4711 17.705C34.3141 18.0179 34.077 18.2835 33.784 18.475L33.776 18.48C34.0566 18.8903 34.1879 19.3845 34.148 19.88V19.873C34.183 20.2656 34.0916 20.6592 33.887 20.9962C33.6825 21.3332 33.3755 21.5959 33.011 21.746L32.999 21.75C33.2227 22.1488 33.3265 22.6037 33.298 23.06V23.054C33.3198 23.3958 33.249 23.7372 33.093 24.0422C32.9371 24.3472 32.7018 24.6045 32.412 24.787L32.404 24.792C32.6082 25.2494 32.6856 25.7534 32.628 26.251L32.629 26.238V26.426C32.6147 26.6723 32.5508 26.9132 32.4412 27.1342C32.3316 27.3553 32.1785 27.5519 31.9911 27.7124C31.8038 27.8729 31.5859 27.9939 31.3507 28.0683C31.1154 28.1426 30.8676 28.1687 30.622 28.145L30.629 28.146H26.2L26.185 28.147L26.169 28.146H26.17H20.26C20.209 28.146 20.156 28.146 20.1 28.154C20.032 28.158 19.96 28.164 19.886 28.164H19.871C19.77 28.1641 19.6694 28.1506 19.572 28.124L19.58 28.126L19.578 28.122ZM13.563 26.735C13.5631 26.6509 13.5797 26.5676 13.6119 26.4899C13.6442 26.4122 13.6914 26.3417 13.751 26.2822C13.8105 26.2228 13.8811 26.1757 13.9589 26.1436C14.0366 26.1114 14.1199 26.0949 14.204 26.095C14.2881 26.0951 14.3714 26.1117 14.4491 26.1439C14.5268 26.1762 14.5973 26.2234 14.6568 26.283C14.7162 26.3425 14.7633 26.4131 14.7954 26.4909C14.8276 26.5686 14.8441 26.6519 14.844 26.736C14.8439 26.9059 14.7763 27.0687 14.656 27.1888C14.5358 27.3088 14.3729 27.3761 14.203 27.376C14.0331 27.3759 13.8703 27.3083 13.7502 27.188C13.6302 27.0678 13.5629 26.9049 13.563 26.735Z" fill="white" />
                        </svg>
                        <FavoriteIcon style={{ color: "red" }} />
                        😡 You and 2 others
                    </span>
                </div>
                <Reaction />
                <CommentBox />
            </div>

            <div className='container my-4' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <img src='../images/st1.png' alt="img" className='img-fluid rounded-circle' />

                    </div>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 px-3 ">
                        <div className='d-flex align-items-center'>
                            <h4>Habib Hossain </h4>
                        </div>
                        <p>24 days ago  <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>
                <div className='post_pic row m-auto'>
                
                        <img src='../images/post6.png' alt="img" className='img-fluid' />
               
                </div>
                <div className='row my-5'>
                    <span style={{ textAlign: "start", fontSize: "10px", paddingLeft: "28px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 40" fill="none">
                            <ellipse cx="21" cy="20" rx="21" ry="20" fill="#033CCC" />
                            <path d="M9.548 29.999C9.46674 29.9987 9.38843 29.9685 9.32809 29.914C9.26775 29.8596 9.22962 29.7848 9.221 29.704V29.703L8.001 17.335L8 17.304C8 17.122 8.147 16.975 8.329 16.975H16.562V30L9.548 29.999ZM12.908 26.734V26.735C12.908 26.9923 12.9843 27.2438 13.1273 27.4578C13.2702 27.6717 13.4734 27.8385 13.7111 27.937C13.9489 28.0354 14.2104 28.0612 14.4628 28.011C14.7152 27.9608 14.947 27.8369 15.1289 27.6549C15.3109 27.473 15.4348 27.2412 15.485 26.9888C15.5352 26.7364 15.5094 26.4749 15.411 26.2371C15.3125 25.9994 15.1457 25.7962 14.9318 25.6533C14.7178 25.5103 14.4663 25.434 14.209 25.434H14.207C13.488 25.434 12.906 26.016 12.905 26.735L12.908 26.734ZM13.388 18.734C13.388 18.915 13.535 19.062 13.717 19.062H14.481C14.568 19.062 14.6514 19.0274 14.7129 18.9659C14.7744 18.9044 14.809 18.821 14.809 18.734C14.809 18.647 14.7744 18.5636 14.7129 18.5021C14.6514 18.4406 14.568 18.406 14.481 18.406H13.711C13.6237 18.406 13.5401 18.4407 13.4784 18.5024C13.4167 18.5641 13.382 18.6477 13.382 18.735V18.738L13.388 18.734ZM9.778 18.734C9.778 18.915 9.925 19.062 10.106 19.062H12.611C12.698 19.062 12.7814 19.0274 12.8429 18.9659C12.9044 18.9044 12.939 18.821 12.939 18.734C12.939 18.647 12.9044 18.5636 12.8429 18.5021C12.7814 18.4406 12.698 18.406 12.611 18.406H10.1C10.013 18.406 9.92958 18.4406 9.86807 18.5021C9.80656 18.5636 9.772 18.647 9.772 18.734V18.737L9.778 18.734ZM19.578 28.122C19.4018 28.0625 19.2353 27.9772 19.084 27.869L19.09 27.873L18.99 27.81C18.7571 27.6639 18.527 27.5132 18.3 27.358L18.199 27.287C18.067 27.192 18.005 27.15 17.937 27.154C17.697 27.159 17.457 27.161 17.217 27.164V18.009L17.204 17.239C17.655 16.952 18.071 16.679 18.196 16.575C18.366 16.233 18.534 15.947 18.72 15.673L18.703 15.7C18.788 15.567 18.873 15.435 18.951 15.304L20.675 12.41C20.755 12.274 20.842 12.138 20.929 12.002C21.074 11.786 21.228 11.528 21.369 11.262L21.393 11.213C21.472 11.0515 21.4996 10.8697 21.472 10.692L21.473 10.697L21.467 7.577C21.53 7.123 21.786 6.739 22.147 6.505L22.153 6.501C22.4748 6.21112 22.8832 6.03539 23.315 6.001H23.322L23.385 6C23.726 6 24.048 6.081 24.334 6.224L24.322 6.218C24.513 6.31 24.676 6.408 24.829 6.518L24.819 6.511L24.925 6.581C25.166 6.708 25.346 6.922 25.426 7.181L25.428 7.188C25.615 7.884 25.786 8.517 25.945 9.152L26.011 9.411C26.112 9.751 26.199 10.162 26.255 10.583L26.26 10.625C26.089 12.199 25.76 13.635 25.284 15.003L25.326 14.865L33.019 14.854H33.047C33.2801 14.854 33.5104 14.9036 33.7229 14.9995C33.9353 15.0954 34.1249 15.2354 34.279 15.4102C34.4332 15.585 34.5484 15.7905 34.617 16.0133C34.6856 16.236 34.7061 16.4708 34.677 16.702L34.678 16.694C34.6995 17.0434 34.6281 17.3922 34.4711 17.705C34.3141 18.0179 34.077 18.2835 33.784 18.475L33.776 18.48C34.0566 18.8903 34.1879 19.3845 34.148 19.88V19.873C34.183 20.2656 34.0916 20.6592 33.887 20.9962C33.6825 21.3332 33.3755 21.5959 33.011 21.746L32.999 21.75C33.2227 22.1488 33.3265 22.6037 33.298 23.06V23.054C33.3198 23.3958 33.249 23.7372 33.093 24.0422C32.9371 24.3472 32.7018 24.6045 32.412 24.787L32.404 24.792C32.6082 25.2494 32.6856 25.7534 32.628 26.251L32.629 26.238V26.426C32.6147 26.6723 32.5508 26.9132 32.4412 27.1342C32.3316 27.3553 32.1785 27.5519 31.9911 27.7124C31.8038 27.8729 31.5859 27.9939 31.3507 28.0683C31.1154 28.1426 30.8676 28.1687 30.622 28.145L30.629 28.146H26.2L26.185 28.147L26.169 28.146H26.17H20.26C20.209 28.146 20.156 28.146 20.1 28.154C20.032 28.158 19.96 28.164 19.886 28.164H19.871C19.77 28.1641 19.6694 28.1506 19.572 28.124L19.58 28.126L19.578 28.122ZM13.563 26.735C13.5631 26.6509 13.5797 26.5676 13.6119 26.4899C13.6442 26.4122 13.6914 26.3417 13.751 26.2822C13.8105 26.2228 13.8811 26.1757 13.9589 26.1436C14.0366 26.1114 14.1199 26.0949 14.204 26.095C14.2881 26.0951 14.3714 26.1117 14.4491 26.1439C14.5268 26.1762 14.5973 26.2234 14.6568 26.283C14.7162 26.3425 14.7633 26.4131 14.7954 26.4909C14.8276 26.5686 14.8441 26.6519 14.844 26.736C14.8439 26.9059 14.7763 27.0687 14.656 27.1888C14.5358 27.3088 14.3729 27.3761 14.203 27.376C14.0331 27.3759 13.8703 27.3083 13.7502 27.188C13.6302 27.0678 13.5629 26.9049 13.563 26.735Z" fill="white" />
                        </svg>
                        <FavoriteIcon style={{ color: "red" }} />
                        You and 2 others
                    </span>
                    <span style={{ textAlign: "end", fontSize: "10px", paddingRight: "28px" }}> 1 Comment</span>

                </div>
                <Reaction />
                <CommentBox />
            </div>

            
            <div className='container' style={{ background: "white", borderRadius: "10px" }}>
                <div className='row post_user_info py-4'>
                    <div className=" col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 ">
                        <img src='../images/post3.png' alt="img" className='img-fluid rounded-circle' />

                    </div>
                    <div className=" col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 px-3 ">
                        <div className='d-flex align-items-center'>
                            <h4>Flo Pharoah </h4>
                        </div>
                        <p>25 days ago  <LanguageIcon style={{ paddingLeft: "2px" }} /> </p>
                    </div>

                    <div className=" col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto me-0 ">
                        <KeyboardArrowDownIcon style={{ fontSize: "2rem" }} />
                    </div>

                </div>
                <div className='post_pic post_row  row m-auto'>
                   
                        <h6>Stop confusing temporary happiness for long-term connections!Ther are same people that came into your life that is judt there for thr moments! NOt everyone deserves your inside story,Your happiness for long-term connections!Ther are same people that came into your life that is judt there for thr moment
                        🖤💪
                          </h6>
                
                </div>

                <div className='row my-5'>
                    <span style={{ textAlign: "start", fontSize: "10px", paddingLeft: "28px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 40" fill="none">
                            <ellipse cx="21" cy="20" rx="21" ry="20" fill="#033CCC" />
                            <path d="M9.548 29.999C9.46674 29.9987 9.38843 29.9685 9.32809 29.914C9.26775 29.8596 9.22962 29.7848 9.221 29.704V29.703L8.001 17.335L8 17.304C8 17.122 8.147 16.975 8.329 16.975H16.562V30L9.548 29.999ZM12.908 26.734V26.735C12.908 26.9923 12.9843 27.2438 13.1273 27.4578C13.2702 27.6717 13.4734 27.8385 13.7111 27.937C13.9489 28.0354 14.2104 28.0612 14.4628 28.011C14.7152 27.9608 14.947 27.8369 15.1289 27.6549C15.3109 27.473 15.4348 27.2412 15.485 26.9888C15.5352 26.7364 15.5094 26.4749 15.411 26.2371C15.3125 25.9994 15.1457 25.7962 14.9318 25.6533C14.7178 25.5103 14.4663 25.434 14.209 25.434H14.207C13.488 25.434 12.906 26.016 12.905 26.735L12.908 26.734ZM13.388 18.734C13.388 18.915 13.535 19.062 13.717 19.062H14.481C14.568 19.062 14.6514 19.0274 14.7129 18.9659C14.7744 18.9044 14.809 18.821 14.809 18.734C14.809 18.647 14.7744 18.5636 14.7129 18.5021C14.6514 18.4406 14.568 18.406 14.481 18.406H13.711C13.6237 18.406 13.5401 18.4407 13.4784 18.5024C13.4167 18.5641 13.382 18.6477 13.382 18.735V18.738L13.388 18.734ZM9.778 18.734C9.778 18.915 9.925 19.062 10.106 19.062H12.611C12.698 19.062 12.7814 19.0274 12.8429 18.9659C12.9044 18.9044 12.939 18.821 12.939 18.734C12.939 18.647 12.9044 18.5636 12.8429 18.5021C12.7814 18.4406 12.698 18.406 12.611 18.406H10.1C10.013 18.406 9.92958 18.4406 9.86807 18.5021C9.80656 18.5636 9.772 18.647 9.772 18.734V18.737L9.778 18.734ZM19.578 28.122C19.4018 28.0625 19.2353 27.9772 19.084 27.869L19.09 27.873L18.99 27.81C18.7571 27.6639 18.527 27.5132 18.3 27.358L18.199 27.287C18.067 27.192 18.005 27.15 17.937 27.154C17.697 27.159 17.457 27.161 17.217 27.164V18.009L17.204 17.239C17.655 16.952 18.071 16.679 18.196 16.575C18.366 16.233 18.534 15.947 18.72 15.673L18.703 15.7C18.788 15.567 18.873 15.435 18.951 15.304L20.675 12.41C20.755 12.274 20.842 12.138 20.929 12.002C21.074 11.786 21.228 11.528 21.369 11.262L21.393 11.213C21.472 11.0515 21.4996 10.8697 21.472 10.692L21.473 10.697L21.467 7.577C21.53 7.123 21.786 6.739 22.147 6.505L22.153 6.501C22.4748 6.21112 22.8832 6.03539 23.315 6.001H23.322L23.385 6C23.726 6 24.048 6.081 24.334 6.224L24.322 6.218C24.513 6.31 24.676 6.408 24.829 6.518L24.819 6.511L24.925 6.581C25.166 6.708 25.346 6.922 25.426 7.181L25.428 7.188C25.615 7.884 25.786 8.517 25.945 9.152L26.011 9.411C26.112 9.751 26.199 10.162 26.255 10.583L26.26 10.625C26.089 12.199 25.76 13.635 25.284 15.003L25.326 14.865L33.019 14.854H33.047C33.2801 14.854 33.5104 14.9036 33.7229 14.9995C33.9353 15.0954 34.1249 15.2354 34.279 15.4102C34.4332 15.585 34.5484 15.7905 34.617 16.0133C34.6856 16.236 34.7061 16.4708 34.677 16.702L34.678 16.694C34.6995 17.0434 34.6281 17.3922 34.4711 17.705C34.3141 18.0179 34.077 18.2835 33.784 18.475L33.776 18.48C34.0566 18.8903 34.1879 19.3845 34.148 19.88V19.873C34.183 20.2656 34.0916 20.6592 33.887 20.9962C33.6825 21.3332 33.3755 21.5959 33.011 21.746L32.999 21.75C33.2227 22.1488 33.3265 22.6037 33.298 23.06V23.054C33.3198 23.3958 33.249 23.7372 33.093 24.0422C32.9371 24.3472 32.7018 24.6045 32.412 24.787L32.404 24.792C32.6082 25.2494 32.6856 25.7534 32.628 26.251L32.629 26.238V26.426C32.6147 26.6723 32.5508 26.9132 32.4412 27.1342C32.3316 27.3553 32.1785 27.5519 31.9911 27.7124C31.8038 27.8729 31.5859 27.9939 31.3507 28.0683C31.1154 28.1426 30.8676 28.1687 30.622 28.145L30.629 28.146H26.2L26.185 28.147L26.169 28.146H26.17H20.26C20.209 28.146 20.156 28.146 20.1 28.154C20.032 28.158 19.96 28.164 19.886 28.164H19.871C19.77 28.1641 19.6694 28.1506 19.572 28.124L19.58 28.126L19.578 28.122ZM13.563 26.735C13.5631 26.6509 13.5797 26.5676 13.6119 26.4899C13.6442 26.4122 13.6914 26.3417 13.751 26.2822C13.8105 26.2228 13.8811 26.1757 13.9589 26.1436C14.0366 26.1114 14.1199 26.0949 14.204 26.095C14.2881 26.0951 14.3714 26.1117 14.4491 26.1439C14.5268 26.1762 14.5973 26.2234 14.6568 26.283C14.7162 26.3425 14.7633 26.4131 14.7954 26.4909C14.8276 26.5686 14.8441 26.6519 14.844 26.736C14.8439 26.9059 14.7763 27.0687 14.656 27.1888C14.5358 27.3088 14.3729 27.3761 14.203 27.376C14.0331 27.3759 13.8703 27.3083 13.7502 27.188C13.6302 27.0678 13.5629 26.9049 13.563 26.735Z" fill="white" />
                        </svg>
                        😮
                        <FavoriteIcon style={{ color: "red" }} />
                        9
                    </span>
                </div>
                <Reaction />
                <CommentBox />
            </div>
        </>
    )
}

export default PostPic
