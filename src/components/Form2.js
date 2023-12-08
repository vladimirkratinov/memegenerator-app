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
    favColor: "",
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

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    // preventing default means that it won't refresh our page
    // and re-render our app with all default values and state
    event.preventDefault();
    console.log(formData);
  }

  return (
    // add Submit Handler for Submit Button
    <form onSubmit={handleSubmit}>
      <h2 className="margin-left-style">Form 2 - object</h2>
      <input
        style={{ width: "200px" }}
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        style={{ width: "200px" }}
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        style={{ width: "200px" }}
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        style={{ width: "200px", height: "60px" }}
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />

      {/* Checkbox */}
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
      </div>
      <br />

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
      </fieldset>
      <br />

      {/* Multi-optional select form */}
      <div style={containerStyle}>
        <label style={labelStyle} htmlFor="favColor">
          What is your favorite color?
        </label>
        <br />
        <select
          id="favColor"
          name="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>
      <br />

      {/* Submit Button */}
      <div style={containerStyle}>
        <button className="submit-button">Submit</button>
      </div>
    </form>
  );
}
