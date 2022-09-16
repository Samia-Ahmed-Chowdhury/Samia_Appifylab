import React from 'react'
import "./Navbar.css"
import ExploreCard from './ExploreCard';
function Slide() {
    return (
        <>
            <div className="slide" id="slide" style={{ position: "fixed" }}>
                <ul className=" ">

                    <li>
                        <div className="container">
                            <h2 className=''>Explore</h2>
                            <div className='row' style={{ padding: "11px 0" }}>
                                {
                                    CardData.map((val,index) => {
                                        return (
                                            <ExploreCard key={index}
                                                img_src={val.img_src}
                                                h5_title={val.h5_title}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="container">
                            <h2 className=''>Download App</h2>
                            <div className="row" style={{ paddingTop: "6px", paddingLeft: "12px" }}>
                                <div className=" col-8">
                                    <div className="row">
                                        <div className=" col-5  ">
                                            <img src='../images/app_store.svg' alt="img" className='img-fluid' />
                                        </div>
                                        <div className=" col-5  ">
                                            <img src='../images/play_store.svg' alt="img" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Slide

const CardData = [
    {
        img_src: '../images/saved.svg',
        h5_title: 'Saved'
    },
    {
        img_src: '../images/ppl.svg',
        h5_title: 'People'
    },
    {
        img_src: '../images/grps.svg',
        h5_title: 'Groups',
    },
    {
        img_src: '../images/pages.svg',
        h5_title: 'Pages',
    },
    {
        img_src: '../images/events.svg',
        h5_title: 'Events',
    }
]

