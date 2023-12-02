import React from "react";
import boxesData from "../boxesData";
import "../style.css";

export default function Boxes() {
  const [boxes, setBoxes] = React.useState(boxesData);

  const boxesArray = boxesData.map((box) => (
    <div className="box-item" key={box.id}>
      {box.id} {box.on}
    </div>
  ));
  return <div className="box-grid">{boxesArray}</div>;
}
