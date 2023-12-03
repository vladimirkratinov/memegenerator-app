import React from "react";
import messageData from "../messageData";

// Conditional Rendering
export default function Message() {
  const [messages, setMessages] = React.useState(["a", "b"]);
  const [isShown, setIsShown] = React.useState(false);

  const messageArray = messageData.map((item) => (
    <p className="message-text" key={item.id}>
      {item.id}. {item.message}
    </p>
  ));

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {messages.length > 0 && (
        <h2 className="margin-left-style">
          You have {messages.length} unread messages!
        </h2>
      )}
      <button className="margin-left-style" onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Messages
      </button>
      {isShown && messageArray}
    </div>
  );
}
