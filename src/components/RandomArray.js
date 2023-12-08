import React, { useState } from "react";
import "../style.css";

export default function RandomArray() {
  const [wordsArray, setWordsArray] = useState(["word 1", "word 2"]);
  const wordsList = wordsArray.map((word) => <p key={word}>{word}</p>);

  function addItem() {
    setWordsArray((prevState) => [
      ...prevState,
      ` word ${prevState.length + 1}`,
    ]);
  }

  return (
    <div className="margin-left-style">
      <h2>Random Array</h2>
      <button className="submit-button" onClick={addItem}>
        Add Item
      </button>
      <div>{wordsList}</div>
    </div>
  );
}
