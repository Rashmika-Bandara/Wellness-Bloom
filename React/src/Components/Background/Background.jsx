import React from 'react'
import './Background.css'
import video1 from  '../../assets/V1.mp4'
import image1 from '../../assets/P1.webp'
import image2 from '../../assets/P2.webp'
import image3 from '../../assets/P3.webp'

const Background = ({ playStatus, heroCount }) => { // Destructure props
    if (playStatus){
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    } else if (heroCount === 0) {
        return <img src={image1} className='background' alt="" />
    } else if (heroCount === 1) {
        return <img src={image2} className='background' alt="" />
    } else if (heroCount === 2) {
        return <img src={image3} className='background' alt="" />
    }
}

export default Background
