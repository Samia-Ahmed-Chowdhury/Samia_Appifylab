import React from 'react'
import "./Suggest.css"
function SuggestPpl() {
  return (
    <>
        <div className="responsive_show container" style={{ background: "white",borderRadius:"10px" }} >
        <div className="row py-4">
                    <div className="sugesst_ppl_row col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ">
                        <h1>Suggested People</h1>
                        <div className='d-flex justify-content-between py-2'>
                        <div className='d-flex align-items-center'>
                            <img src='../images/sadek.png' alt="img" className='img-fluid'  />
                            <h5>Sadek Hossain </h5>
                            </div>
                            <div>
                                <button className='add'>Add +
                                </button>
                            </div>
                            </div>

                    </div>
                </div>
        </div>
    </>
  )
}

export default SuggestPpl