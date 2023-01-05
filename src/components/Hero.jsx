import React from "react";
import memes from '../../src/memes'

export default function Hero() {

  let url
  // the concept of state
  const [memeImage, setMemeImage] = React.useState("")

  // this function handles what happens when a user clicks on the get new meme image
  function handleClick(event){
    // prevent the  site from refreshing when the button i clicked
    event.preventDefault();

    // get the memes and store them in an array
    const memesArray = memes.data.memes
    // select rabdomly from the array created above
    const randomMeme = Math.floor(Math.random() * memesArray.length)

    // just get the urls of the randomly chosen meme from the array
    url = memesArray[randomMeme].url

    // update the state by replacing it with the url above
    setMemeImage(url)
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
        <img src={memeImage} alt="" id='meme'/>
        </div>
      </div>
      </div>
    </div>
  );
}
