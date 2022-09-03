import React from 'react'

function FrndsCircle(props) {
    return (
        <>
        
            <div className=" col-sm-3 col-3  m-auto d-flex flex-column ">
                <img src={props.img_src} alt="img" className='img-fluid'  />
                <span>{props.name}</span>
            </div>
        </>
    )
}

export default FrndsCircle;

