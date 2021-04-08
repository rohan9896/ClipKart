import React from "react";
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

function NavBar() {
  let navigate = useNavigate();

  return (
    <>
      <nav className="ecom__nav">
        <div onClick={() => navigate(`/`)} className="Nav3__logo">
          <img
            class="ecomm__icon"
            src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/e1217d3f5a4c18a40c95e1ced9a9be04bdb256d0/icons/ecomm/logo.svg"
            alt="white heart"
          />
          <span>Clipkart</span>
        </div>
        <div className="Nav3__icons">
          <a
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            href="https://github.com/rohan9896/"
          >
            <img
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/e6cb96c466ed6305cdf465e6f86c6bde0150fd7e/icons/social%20icon/github.svg"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            href="https://rohangupta-75149.medium.com/"
          >
            <img
              src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/medium.png?raw=true"
              alt="medium"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
