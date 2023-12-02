import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);
  const [isPressed, setPressed] = React.useState(false);

  const styles = {
    backgroundColor: on ? "green" : "yellow",
    color: on ? "white" : "black",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

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
      onClick={toggle}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
    >
      {props.text}
    </div>
  );
}
