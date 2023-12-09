import React from "react";
import { useRef } from "react";
// import memeData from "../memeData";
import MemeImage from "./MemeImage";
import "../style.css";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeURL: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [isPressed, setPressed] = React.useState(false);
  const canvasRef = useRef(null);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    console.log("Effect ran");
  }, []);

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    console.log(url);

    setMeme((prevMeme) => ({
      ...prevMeme,
      memeURL: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function saveMeme() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the image dimensions
    const memeImage = new Image();
    memeImage.crossOrigin = "anonymous"; // FIX SAVE FUNCTION
    memeImage.src = meme.memeURL;

    console.log(memeImage.src);

    memeImage.onload = () => {
      canvas.width = memeImage.width;
      canvas.height = memeImage.height;

      // Draw meme image on canvas
      context.drawImage(memeImage, 0, 0, canvas.width, canvas.height);

      // Set common text properties
      context.fillStyle = "#ffffff";
      context.font = "64px Impact, sans-serif";
      context.textAlign = "center";
      context.shadowColor = "rgba(0, 0, 0, 1)";
      context.shadowBlur = 4;
      context.lineWidth = 5; // Adjusted stroke width
      context.strokeStyle = "black"; // Adjusted stroke color

      // Draw top text
      context.textBaseline = "top"; // Align text to the top
      context.strokeText(meme.topText.toUpperCase(), canvas.width / 2, 10);
      context.fillText(meme.topText.toUpperCase(), canvas.width / 2, 10);

      // Draw bottom text
      context.textBaseline = "bottom"; // Align text to the bottom
      context.strokeText(
        meme.bottomText.toUpperCase(),
        canvas.width / 2,
        canvas.height - 10
      );
      context.fillText(
        meme.bottomText.toUpperCase(),
        canvas.width / 2,
        canvas.height - 10
      );

      // Convert canvas content to data URL and open in a new window for download
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "meme.png";
      link.click();
    };
  }

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          type="text"
          placeholder="Top text"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
        />
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
        <h2 className="top-text">{meme.topText}</h2>
        <h2 className="bottom-text">{meme.bottomText}</h2>
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      <div className="fancy-button-container">
        <button className="fancy-button" onClick={saveMeme}>
          Save
        </button>
      </div>
    </main>
  );
}
