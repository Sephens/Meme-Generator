import React from 'react'
import meme1 from '../assets/meme1.jpg'

export default function Hero() {
  return (
    <div className='hero'>

        <div className="container">

        <div className="top-hero">

            <input type="text" placeholder='Shut up' id='left-input'/>
            <input type="text" placeholder='and take money' id='right-input'/>

        </div>

        <div className="middle-hero">

            <a href="#" id='get-meme-btn'>Get a new meme image</a>

        </div>

        <div className="bottom-hero">
            <img src={meme1} alt="" id='meme'/>

        </div>

        </div>
      
    </div>
  )
}
