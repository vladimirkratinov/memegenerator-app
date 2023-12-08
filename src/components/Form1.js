import React from "react";

export default function Form1() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <h2 className="margin-left-style">Form 1 - simple</h2>
      <input
        style={{ width: "200px" }}
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />
      <input
        style={{ width: "200px" }}
        type="text"
        placeholder="Last Name"
        onChange={handleLastNameChange}
      />
    </form>
  );
}
