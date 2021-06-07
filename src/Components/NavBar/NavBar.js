import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <>
      <nav className="ecom__nav">
        <div onClick={() => navigate(`/`)} className="Nav3__logo">
          <img
            className="ecomm__icon"
            src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/e1217d3f5a4c18a40c95e1ced9a9be04bdb256d0/icons/ecomm/logo.svg"
            alt="white heart"
          />
          <span>Clipkart</span>
        </div>
        <div className="Nav3__icons">
          <button onClick={() => navigate(`/login`)} className="ecom__nav__login">Log In</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
