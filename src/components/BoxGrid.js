import React from "react";
import boxesData from "../boxesData";
import "../style.css";
import Box from "./Box";

export default function BoxGrid() {
  const [boxes, setBoxes] = React.useState(boxesData);
  const boxesArray = boxesData.map((box) => (
    <Box key={box.id} on={box.on} text={box.id} />
  ));
  return <div className="box-grid">{boxesArray}</div>;
}
