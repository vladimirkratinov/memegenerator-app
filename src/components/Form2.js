import React from "react";
import '../style.css'

export default function Form2() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <h3>Form 2 - object</h3>
      <input
        name="firstName"
        value={formData.firstName}
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        value={formData.lastName}
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        type="text"
        placeholder="Email"
        onChange={handleChange}
      />
      <textarea 
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
    </form>
  );
}
