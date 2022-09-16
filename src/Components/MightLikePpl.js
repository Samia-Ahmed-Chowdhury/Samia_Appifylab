import React from 'react'
import { Link } from 'react-router-dom';
function MightLikePpl() {
    return (
        <>
            <div className="responsive_view container my-4" style={{ background: "white", borderRadius: "10px" }}>
                <div className='might_like_ppl pt-4'>
                    <h1>You Might Like</h1>
                    <hr />
                </div>
                <div className="row might_like py-4">
                    <div className="might_like_row   m-auto ">
                        <div className=" d-flex justify-content-center align_items-center ">
                            <img src='../images/frnds2.png' alt="img" className='user_profile  img-fluid rounded-circle' />
                        </div>
                        <div className=" d-flex flex-column justify-content-center ps-3  ">
                            <span>Sadia</span>
                            <h5>sfdasd</h5>
                        </div>

                    </div>
                    <div className="might_like_row  m-auto d-flex justify-content-end">
                        <div className="d-flex h-btn py-4">
                            <Link to="/page">
                                <button className="hero_btn" href="#">Ignore</button></Link>
                            <Link to="/page">
                                <button className="hlper_btn" href="#">Follow</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MightLikePpl