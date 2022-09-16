import React from 'react'
import "./Hero.css"
import Stories from "./Stories"
import Post1 from './Post1'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'
import Post5 from './Post5'
import Post6 from './Post6'
import Post7 from './Post7'
import Post8 from './Post8'
import Post9 from './Post9'
import Post10 from './Post10'
import Post11 from './Post11'
import Post12 from './Post12'
import Post13 from './Post13'
import Post14 from './Post14'
import Post15 from './Post15'
import FrndsCircle from './FrndsCircle'
import Suggested from './Suggested'
import MightLikePpl from './MightLikePpl'

function Hero() {
    return (
        <>
            <Stories />
            <div className='container'>
            <div className='responsive_view'>
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
                </div>
                <Post1 />
                <Post2 />
               <MightLikePpl />
                <Post3 />
                <Post4 />
                <Suggested />
                <Post5 />
                <Post6 />
                <Post7 />
                <Post8 />
                <Post9 />
                <Post10 />
                <Post11 />
                <Post12 />
                <Post13 />
                <Post14 />
                <Post15 />
            </div>

        </>
    )
}

export default Hero

const FrndsData = [
    {
        img_src: '../images/f1.png',
        name:'sadek Hossain'
    },
    {
        img_src: '../images/f2.png',
        name:'sadek Hosasain'
    },
   
    {
        img_src: '../images/f4.png',
        name:'sadek Hosasain'
    },
    {
        img_src: '../images/f5.png',
        name:'sadek Hossain'
    },
    {
        img_src: '../images/f6.png',
        name:'sadek Hosasain'
    },
     {
        img_src: '../images/f7.png',
        name:'sadek Hossain'
    },
    {
        img_src: '../images/f8.png',
        name:'sadek Hosasain'
    },
    {
        img_src: '../images/f2.png',
        name:'sadek Hossain'
    },
    {
        img_src: '../images/f1.png',
        name:'sadek Hosasain'
    },
    {
        img_src: '../images/f4.png',
        name:'sadek Hossain'
    },
    {
        img_src: '../images/f6.png',
        name:'sadek Hosasain'
    },
]