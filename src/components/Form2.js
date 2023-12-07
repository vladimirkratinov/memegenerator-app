import React from "react";
import "../style.css";

export default function Form2() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form>
      <h3>Form 2 - object</h3>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />
      <div style={{display: "flex", alignItems: "center", marginLeft: "20px"}}>
      <input
        style={{verticalAlign: "middle", margin: 0, marginRight: "5px"}}
        name="isFriendly"
        id="isFriendly"
        type="checkbox"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label 
      style={{verticalAlign: "middle", margin: 0}} htmlFor="isFriendly">Are you friendly?</label>
      <br />
      </div>
    </form>
  );
}
