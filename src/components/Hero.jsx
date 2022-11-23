import React from "react";
import meme1 from "../assets/meme1.jpg";

import memes from '../../src/memes'

export default function Hero() {

  let url

  function handleClick(event){
    event.preventDefault();
    const memesArray = memes.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomMeme].url
    return(
      
      console.log(url)
    )
  }
  return (
    <div className="hero">
      <div className="container">
      <div className="form">
        <form className="gen-form">
        <div className="top-form">
          <input type="text" placeholder="Shut up" id="left-input" />
          <input type="text" placeholder="and take money" id="right-input" />

          </div>

          <div className="btn">
          <button id="get-meme-btn" onClick={handleClick}>Get a new meme image</button>
          </div>
        </form>

        <div className="meme-image">
        <img src={meme1} alt="" id='meme'/>
        </div>
      </div>
      </div>
    </div>
  );
}
