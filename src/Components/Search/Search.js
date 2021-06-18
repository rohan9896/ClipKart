import React, { useState } from "react";
import { useData } from "../../context/data-context";
import "./Search.css";
import { useNavigate, useLocation } from "react-router-dom";

function Search() {
  const searchQuery = new URLSearchParams(useLocation().search);

  const [inputVal, setInputVal] = useState(searchQuery.get("q") || "");
  const { dispatch } = useData();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: inputVal });
    navigate(`/products/search?q=${inputVal}`);
  };

  return (
    <>
      <div className="search__input">
        <input
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          className="primaryInput focus"
          placeholder="Search For Products"
        />
        <button
          disabled={inputVal === ""}
          onClick={() => handleSearch()}
          className="search-btn"
          style={{ cursor: inputVal ? "pointer" : "not-allowed" }}
        >
          <h3>
            <span role="img" aria-label="search">
              🔍
            </span>
          </h3>
        </button>
      </div>
    </>
  );
}

export default Search;
