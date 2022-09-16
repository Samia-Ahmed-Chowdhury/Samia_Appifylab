import React from 'react'
import "./Home.css"
import Hero from '../Components/Hero'
import LeftSide from '../Components/LeftSide'
import RightSide from '../Components/RightSide'
import { Scrollbars } from "react-custom-scrollbars-2";

function Home() {
  return (
    <>
       <section id="home" style={{ background: "#E9EBEE" }}>
        <div className="container  ">
          <div className="row pt-4">
            <div className="left_side_col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-0   ">
            <LeftSide />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12   ">
              <Scrollbars style={{ width: "auto", height: "100vh" }}>
                <Hero />
              </Scrollbars>
            </div>


            <div className="right_side_col  col-xl-3 col-lg-3 col-md-3 col-sm-3 col-0   mx-auto">
            <RightSide />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home