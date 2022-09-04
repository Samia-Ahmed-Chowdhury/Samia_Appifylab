import React from 'react'
import FirstPost from './FirstPost'
import "./Hero.css"
import Stories from "./Stories"
import SecondPost from './SecondPost';
import SuggestPpl from './SuggestPpl';
import MightLike from './MightLike';
import PostPic from './PostPic';
function Hero() {
  return (
    <>
    <Stories />
      <FirstPost />
      <SecondPost />
      <SuggestPpl  />
      <MightLike />
      <PostPic />
   
    </>
  )
}

export default Hero


