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
    <span>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </form>
    </span>
  );
}
