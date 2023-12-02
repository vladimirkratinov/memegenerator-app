import React from "react";
import boxes from "../boxesData";
import "../style.css";
import Box from "./Box";

export default function BoxGrid() {
  const [squares, setSquares] = React.useState(boxes);

  function handleClick(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      on={square.on}
      id={square.id}
      onClickHandler={handleClick}
    />
  ));

  return <div className="box-grid">{squareElements}</div>;
}
