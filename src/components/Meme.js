import React, { useState } from "react";
import memeData from "../memeData";
import MemeImage from "./MemeImage";

export default function Meme() {
  const [currentURL, setURL] = useState("pepe.jpeg");

  function getMemeImage() {
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
    setURL(url)
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
        </div>
        <div>
        <MemeImage url={currentURL} />
      </div>

    </main>
  );
}
