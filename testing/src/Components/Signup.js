import React, { useState } from "react";

import "../style.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here (e.g., check if passwords match, username is unique, etc.)

    // If validation passes, you can submit the form or show a success message
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="app">
      <div className="signup-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? (
          <div>User is successfully registered</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Password Confirmation</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
