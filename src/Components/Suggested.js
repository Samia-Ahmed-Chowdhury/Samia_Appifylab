import React from 'react'
function Suggested() {
  return (
    <>
      <div className="responsive_view container mt-4" style={{ background: "white", borderRadius: "10px" }} >
        <div className="sugesst_ppl_row row py-4">
            <h1>Suggested People</h1>
            <hr />

            <div className='d-flex justify-content-between py-2 pt-4'>
              <div className='d-flex align-items-center'>
                <img src='../images/sadek.png' alt="img" className='img-fluid' />
                <h5>Sadek Hossain </h5>
              </div>
              <div>
                <button className='add'>Add +
                </button>
              </div>
            </div>
        </div>
        <p style={{textAlign:"end",marginRight: "30px", paddingBottom:"1rem"}}>Check More...</p>

      </div>
    </>
  )
}

export default Suggested