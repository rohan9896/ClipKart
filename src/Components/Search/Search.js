import React, { useState } from "react";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import "./Search.css";

function Search() {
  const [inputVal, setInputVal] = useState("");
  const { dispatch } = useCartWishlist();

  return (
    <>
      <div className="search__input">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          className="primaryInput focus"
          placeholder="Search For Products"
        />
        <button
          disabled={inputVal === ""}
          onClick={() => {
            dispatch({ type: "SEARCH_PRODUCTS", payload: inputVal });
          }}
          className="search-btn"
        >
          <h3>
            <span role="img" aria-label="search">
              🔍
            </span>
          </h3>
        </button>
      </div>
      <div
        style={{ display: inputVal ? null : "none" }}
        className="clearSearch"
      >
        <p
          onClick={() => {
            dispatch({ type: "SHOW_ALL_PRODUCTS" });
            setInputVal("");
          }}
        >
          Clear Search
        </p>
      </div>
    </>
  );
}

export default Search;
