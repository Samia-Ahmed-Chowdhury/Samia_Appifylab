import React from 'react'

function LeftSide() {
    return (
        <section id="left_side">
            <div className="row left_bar m-auto" style={{padding:"20px 10px 5px"}}>
                <h1>Explore</h1>
                <ul>
                    <li>
                        <div className='d-flex'>
                            <img src='../images/saved.svg' alt="img" className='img-fluid' />
                            <h5>Saved Post </h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex'>
                            <img src='../images/ppl.svg' alt="img" className='img-fluid' />
                            <h5>People </h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex'>
                            <img src='../images/grps.svg' alt="img" className='img-fluid' />
                            <h5>Groups</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex'>
                            <img src='../images/pages.svg' alt="img" className='img-fluid' />
                            <h5>Pages </h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex'>
                            <img src='../images/events.svg' alt="img" className='img-fluid' />
                            <h5>Events </h5>
                        </div>
                    </li>
                </ul>
            </div>


            <div className="left_bar row mt-3 m-auto">
                <h1>Download App</h1>
                <div className="row pt-2">
                    <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-0 col-0    ">
                        <img src='../images/app_store.svg' alt="img" className='img-fluid' />
                    </div>
                    <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-0 col-0    ">
                        <img src='../images/play_store.svg' alt="img" className='img-fluid' />
                    </div>
                </div>
            </div>


            <div className="left_bar row mt-3 m-auto">
                <h1>Suggested People</h1>
                <div className='d-flex align-items-center pt-2'>
                    <img src='../images/sadek.png' alt="img" className='img-fluid' style={{ width: "17%" }} />
                    <h5>Sadek Hossain </h5>
                    <button className='add'>Add +</button>
                </div>

            </div>


        </section>
    )
}

export default LeftSide