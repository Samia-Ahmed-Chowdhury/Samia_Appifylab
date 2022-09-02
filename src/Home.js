import React from 'react'
import Hero from './Component/Hero'
import LeftSide from './Component/LeftSide'
import RightSide from './Component/RightSide'

function Home() {
  return (
    <>
      <section id="home" style={{ background: "#E9EBEE" }}>
        <div className="container py-5 ">
          <div className="row py-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0  m-auto ">
              <LeftSide />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
              <Hero />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0  m-auto ">
              <RightSide />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home