import React from 'react'
import "../Navbar.css"
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FrndsCircle from './FrndsCircle';
import ExploreCard from './ExploreCard';
function Slide() {
    return (
        <>
            <div className="slide" id="slide" style={{ position: "fixed" }}>
                <ul className="navbar-nav ">

                    <li className='account'>
                        <NavLink className="nav-link " aria-current="page" to="/">
                            <AccountCircleIcon className='account_svg' />
                            <span>  Adnan Chowdhury <KeyboardArrowDownIcon /> </span>

                        </NavLink>

                    </li>

                    <li>
                        <h2 className=''>Your Friends</h2>
                        <div className=" frnds_row container-fluid d-flex">
                            {
                                FrndsData.map((val, index) => {
                                    return (
                                        <FrndsCircle key={index}
                                            img_src={val.img_src}
                                            name={val.name}
                                        />
                                    );
                                })
                            }
                        </div>
                    </li>

                    <li>
                        <div className="container">
                            <h2 className=''>Explore</h2>
                            <div className='row' style={{ padding: "11px" }}>
                                {
                                    CardData.map((val, index) => {
                                        return (
                                            <ExploreCard key={val.index}
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


const FrndsData = [
    {
        img_src: 'images/frnds2.png',
        name: 'admin'
    },
    {
        img_src: 'images/frnds1.png',
        name: 'Sadek Hossain'
    },
    {
        img_src: 'images/frnds2.png',
        name: 'admin'
    },
    {
        img_src: 'images/frnds1.png',
        name: 'Sadek Hossain'
    },
    {
        img_src: 'images/frnds2.png',
        name: 'admin'
    },
    {
        img_src: 'images/frnds1.png',
        name: 'Sadek Hossain'
    },
]