import React from "react";

export default function Box(props) {
  const [isPressed, setPressed] = React.useState(false);

/* JS object must be camelCase */
  const styles = {
    backgroundColor: props.on ? "pink" : "red",
    color: props.on ? "black" : "white"    
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
      onClick={() => props.onClickHandler(props.id)}
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
