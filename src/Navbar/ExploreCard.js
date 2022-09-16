import React from 'react'

function ExploreCard(props) {
    return (
        <>
            <div className="col-sm-4 col-4 " style={{ marginBottom: "2rem" }}>
                <div className="">
                    <div className='explore_card card'>
                        <div>
                            <img src={props.img_src} alt="img" className='img-fluid' />
                        </div>
                        <h5>{props.h5_title}  </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreCard