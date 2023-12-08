import React, { useState } from "react";

export default function Form3() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    subscription: false,
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

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
    event.preventDefault();
    if (formData.password !== "" && formData.confirmPassword !== "") {
      if (formData.password === formData.confirmPassword) {
        // success
        console.log("Successfully signed up");
        console.log(formData);

        // check subscription
        if (formData.subscription) {
          console.log("Thanks for signing up for our newsletter!");
        }
      } else {
        console.log("Password not match!");
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="margin-left-style">Form 3 - Challenge</h2>
        <input
          style={{ width: "200px" }}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <div style={{ display: "flex" }}>
          <input
            style={{ width: "200px" }}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={handleTogglePassword}
            style={{ marginLeft: "20px", width: "100px", height: "33px" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <input
          style={{ width: "200px" }}
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {formData.password !== "" && formData.confirmPassword !== "" && (
          <label
            htmlFor="password"
            style={{
              marginLeft: "20px",
              color:
                formData.password === formData.confirmPassword
                  ? "green"
                  : "red",
            }}
          >
            {`${
              formData.password === formData.confirmPassword
                ? "Password is correct! ✅"
                : "Password incorrect! ❌"
            }`}
          </label>
        )}

        {/* Checkbox */}
        <div style={containerStyle}>
          <input
            style={inputStyle}
            name="subscription"
            id="subscription"
            type="checkbox"
            checked={formData.subscription}
            onChange={handleChange}
          />
          <label style={labelStyle} htmlFor="subscription">
            I want to join the newsletter
          </label>
        </div>
        <br />
        <div style={containerStyle}>
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
