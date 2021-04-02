import React from "react";
import './Search.css'

function Search() {
  return (
    <>
      <div className="search__input">
        <input
          type="text"
          className="primaryInput focus"
          placeholder="Search For Products"
        />
        <button className="icon-button">
          <img
            alt="search-btn"
            src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/6d7e9d5e1ba6254a0088037db413a807aa180247/icons/icon%20component/search.svg"
          />
        </button>
      </div>
    </>
  );
}

export default Search;
