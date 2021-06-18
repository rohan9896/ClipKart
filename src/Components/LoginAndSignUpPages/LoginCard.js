import React, { useState } from "react";
import "./LoginAndSignupCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

function LoginCard() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailAndPasswordExists = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!emailAndPasswordExists()) {
      setErrorMsg("Field Empty");
      return;
    } else {
      setErrorMsg("");
    }
    //submit logic
    try {
      const resp = await axios.post(apiUrl+"/auth/login");
      setSuccessMsg("login successfull")
      console.log(resp);
    } catch(err) {
      console.log(err);
      setErrorMsg(err.name+" "+err.message);
    }
  }

  return (
    <form className="LoginAndSignupCard">
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
      {errorMsg && <p className="error">{errorMsg}</p>}
      {successMsg && <p>{successMsg}</p>}
      <small onClick={() => navigate(`/signup`)} className="signupAndLoginNavigator">New to ClipKart? Signup</small>
      <button
        onClick={handleSubmit}
        style={{
          cursor: emailAndPasswordExists() ? "pointer" : "not-allowed",
        }}
        disabled={!emailAndPasswordExists()}
        className="primary-button blue"
      >
        Login
      </button>
    </form>
  );
}

export default LoginCard;
