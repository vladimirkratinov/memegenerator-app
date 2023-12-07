import React from "react";
import "../style.css";

export default function Form2() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
  });

  const labelStyle = { verticalAlign: "middle", margin: 0 };
  const inputStyle = {
    display: "inline",
    verticalAlign: "middle",
    margin: 0,
    marginRight: "5px",
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginRight: "20px",
  };

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
      {/* Checkbox Field (style is align checkbox and label vertically middle) */}
      <div style={containerStyle}>
        <input
          style={inputStyle}
          name="isFriendly"
          id="isFriendly"
          type="checkbox"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label style={labelStyle} htmlFor="isFriendly">
          Are you friendly?
        </label>
        <br />
      </div>

      {/* Radio Buttons */}
      <fieldset>
        <legend>Current employment status</legend>

        {/* Unemployed */}
        <input
          style={inputStyle}
          type="radio"
          id="unemployed"
          value="unemployed"
          name="employment"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label style={labelStyle} htmlFor="unemployed">
          Unemployed
        </label>
        <br />

        {/* Part-Time */}
        <input
          style={inputStyle}
          type="radio"
          id="part-time"
          value="part-time"
          name="employment"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label style={labelStyle} htmlFor="part-time">
          Part-time
        </label>
        <br />

        {/* Full-Time */}
        <input
          style={inputStyle}
          type="radio"
          id="full-time"
          value="full-time"
          name="employment"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label style={labelStyle} htmlFor="full-time">
          Full-time
        </label>
        <br />
      </fieldset>
    </form>
  );
}
