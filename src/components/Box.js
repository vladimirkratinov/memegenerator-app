import React from "react";

export default function Box(props) {
  const [isPressed, setPressed] = React.useState(false);

  const styles = {
    backgroundColor: props.on ? "green" : "yellow",
    color: props.on ? "white" : "black",
  };

  const handlePress = () => {
    setPressed(true);
  };

  const handleRelease = () => {
    setPressed(false);
  };

  return (
    <div
      style={styles}
      className={`box-item ${isPressed ? "pressed" : ""}`}
      onClick={()=>props.onClickHandler(props.id)}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
    >
      {props.id}
    </div>
  );
}
