import React from 'react'
import FirstPost from './FirstPost'
import "./Hero.css"
import Stories from "./Stories"
import Scrollbar from 'smooth-scrollbar';
import { Scrollbars } from "react-custom-scrollbars-2";
function Hero() {
  return (
    <>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
      <Stories />
      <FirstPost />
      </Scrollbars>
    </>
  )
}

export default Hero