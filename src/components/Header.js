import React from "react";
import "../style.css";

export default function Header() {
  return (
    <header className="header">
      <img src="nyan-cat.png" alt="nyan-cat" className="header--image" />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--project">React Course - Project 3</h3>
    </header>
  );
}
