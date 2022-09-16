import React from 'react'

function FrndsCircle({img_src,name}) {
    return (
        <>
        
            <div className=" d-flex flex-column">
            <img src={img_src} alt="img" className='user_profile  img-fluid rounded-circle' />
           <span>{name}</span>
            </div>
        </>
    )
}

export default FrndsCircle;

