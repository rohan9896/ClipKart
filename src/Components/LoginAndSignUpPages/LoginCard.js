import React, { useState } from "react";
import "./LoginCard.css";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailAndPasswordExists = () => {
    return email.length > 0 && password.length > 0;
  };

  return (
    <div className="LoginCard">
      <img
        className="faceavatar"
        src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/381a3bddf3e3dd07d18515294bc568756a913b00/icons/ecomm/logo.svg"
        alt="avatar"
      />
      <h2>Log in to ClipKart</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="primaryInput focus"
        placeholder="E-Mail"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="primaryInput focus"
        placeholder="Password"
      />
      <small className="forgot_passoword">Forgot password</small>
      <button
        style={{
          cursor: emailAndPasswordExists() ? "pointer" : "not-allowed",
        }}
        disabled={!emailAndPasswordExists()}
        className="primary-button blue"
      >
        Login
      </button>
    </div>
  );
}

export default LoginCard;
