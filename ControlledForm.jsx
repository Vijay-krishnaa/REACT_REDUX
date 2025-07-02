import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      alert("Name must be of three characters");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Invaild email");
      return;
    }
    const pswregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    if (!pswregx.test(password)) {
      alert(
        "At least one uppercase letter and At least one lowercase letter At least one digit and At least one special character"
      );
      return;
    }
    if (confirmPassword !== password) {
      alert("Enter same Password");
      return;
    }
  };

  return (
    <div>
      <h1>ControlledForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="confirmPassword">ConfirmPassword:</label>
        <input
          type="password"
          placeholder="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
