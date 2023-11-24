import React, { useState } from "react";
import memeData from "../memeData";
import MemeImage from "./MemeImage";
import "../style.css";

export default function Meme() {
  const [currentURL, setURL] = useState("pepe.jpeg");
  const [isPressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setURL(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button
          className={`form--button ${isPressed ? "pressed" : ""}`}
          onClick={getMemeImage}
          onMouseDown={handlePress}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
          onTouchStart={handlePress}
          onTouchEnd={handleRelease}
        >
          Get a new meme image
        </button>
      </div>
      <div>
        <MemeImage url={currentURL} />
      </div>
    </main>
  );
}
