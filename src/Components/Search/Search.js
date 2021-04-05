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
        <button className="search-btn"><h3>🔍</h3></button>
      </div>
    </>
  );
}

export default Search;