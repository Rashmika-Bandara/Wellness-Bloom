import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background';

const App = () => {

  let heroData = [
    {text1:"Image 1", text12:"Image 2"},
    {text1:"Image 3", text12:"Image 4"},
    {text1:"Image 5", text12:"Image 6"},
  ]
  const[heroCount,setHeroCount] = useState(2);
  const[playStatus,setPlayStatus] = useState(false);

  return (
    <div>
      <Navbar/>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
    </div>
  )
}

export default App
