import React from 'react'
import logo from '../assets/icon.png'
import '../styles/mine.css'

export default function Navbar() {
  return (
    <div className='nav-bar'>

        <div className="left-nav">
            <img src={logo} alt="" id='logo-img' />
            <h2 id='logo-title'>Meme Generetor</h2>

        </div>

        <div className="right-nav">
            <h3 id='nav-text'>
            Rions ensemble
            </h3>

        </div>
       
    </div>


  )
}
