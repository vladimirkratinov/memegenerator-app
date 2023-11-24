import React, { useState } from "react";
import '../style.css';

export default function MemeImage(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    width: '350px',
    height: 'auto',
    objectFit: 'cover', // Ensures the image covers the entire container
    filter: isHovered ? 'brightness(60%)' : 'brightness(100%)',
    transition: 'filter 0.3s ease',
    display: 'block', // Ensures the image is treated as a block element
    margin: '15px auto', // Centers the image horizontally
    borderRadius: '10px',
  };

  return (
    <div>
      <img
        src={props.url}
        alt={props.name}
        className="result--image"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
