import React, { useState } from "react";

export default function Result() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    filter: isHovered ? "brightness(60%)" : "brightness(100%)", // Adjust the percentage as needed
    transition: "filter 0.3s ease", // Adding a smooth transition effect
  };

  return (
    <div>
      <img
        src="pepe.jpeg"
        alt="pepe"
        style={imageStyle}
        className="result--image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
