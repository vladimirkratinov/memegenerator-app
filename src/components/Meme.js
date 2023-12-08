import React, { useState } from "react";
import memeData from "../memeData";
import MemeImage from "./MemeImage";
import "../style.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeURL: "pepe.jpeg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData);
  const [isPressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeURL: url,
    }));
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
      <div className="meme-container">
        <MemeImage url={meme.memeURL} />
        <h2 className="top-text">Text Line Top</h2>
        <h2 className="bottom-text">Text Line Bottom</h2>
      </div>
    </main>
  );
}
