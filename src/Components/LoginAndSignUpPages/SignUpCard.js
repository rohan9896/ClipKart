import React, { useState } from "react";
import "./LoginAndSignupCard.css";
import { useNavigate } from "react-router-dom";

function SignUpCard() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handlepassword = (e) => setPassword(e.target.value);

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setErrorMsg("passwords donot match");
    } else {
      setErrorMsg("");
    }
  };

  const anyFieldEmpty = () => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (anyFieldEmpty()) {
      setErrorMsg("Field empty");
      return;
    } else {
      setErrorMsg("");
    }
    //submit logic
  };

  return (
    <div className="LoginAndSignupCard">
      <img
        className="faceavatar"
        src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/381a3bddf3e3dd07d18515294bc568756a913b00/icons/ecomm/logo.svg"
        alt="avatar"
      />
      <h2>Sign up for ClipKart</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="primaryInput focus"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="primaryInput focus"
        placeholder="E-Mail"
      />
      <input
        value={password}
        onChange={handlepassword}
        type="password"
        className="primaryInput focus"
        placeholder="Password"
      />
      <input
        value={confirmPassword}
        onChange={handleConfirmPassword}
        type="password"
        className="primaryInput focus"
        placeholder="Confirm Password"
      />
      {errorMsg && <p className="error">{errorMsg}</p>}
      <small
        onClick={() => navigate(`/login`)}
        className="signupAndLoginNavigator"
      >
        Already a user? LogIn
      </small>
      <button
        style={{ cursor: anyFieldEmpty() ? "not-allowed" : "pointer" }}
        disabled={anyFieldEmpty()}
        onClick={handleSubmit}
        className="primary-button blue"
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUpCard;
