import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import Hero from './Components/Hero/Hero'

const App = () => {

  let heroData = [
    {text1:"Image 1", text2:"Image 2"},
    {text1:"Image 3", text2:"Image 4"},
    {text1:"Image 5", text2:"Image 6"},
  ]
  const[heroCount,setHeroCount] = useState(1);
  const[playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Navbar/>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
      <Hero 
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App
