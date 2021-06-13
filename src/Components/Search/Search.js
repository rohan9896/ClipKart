import React, { useState } from "react";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import "./Search.css";
import { useNavigate, useLocation } from "react-router-dom";

function Search() {

  const searchQuery = new URLSearchParams(useLocation().search);

  const [inputVal, setInputVal] = useState(searchQuery.get('q') || '');
  const { dispatch } = useCartWishlist();
  let navigate = useNavigate();

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
            navigate(`/products/search?q=${inputVal}`)
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
    </>
  );
}

export default Search;
