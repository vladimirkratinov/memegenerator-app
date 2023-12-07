import React from "react";

export default function Form2() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });
  function handleChange(event) {
    console.log(event.target.name);
  }

  return (
    <form>
      <h3>Form 2 - object</h3>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
    </form>
  );
}
