import React from "react";
import { useData } from "../../context/data-context";
import "./NoProductFoundPage.css";
import { useNavigate } from "react-router-dom";

function NoProductFoundPage() {
  const { dispatch } = useData();
  let navigate = useNavigate();

  return (
    <>
      <div className="NoProductFound__container">
        <img
          src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/f9d72a361efa4ce798ca6d6bc10659b431b3dfaa/icons/ecomm/Search-not-found.svg"
          alt="no-prod-found"
        />
        <p className="line1">No Product Found</p>
        <p>Please check the spelling or try searching for something else..</p>
        <button
          onClick={() => {
            dispatch({ type: "SHOW_ALL_PRODUCTS" })
            navigate("/products")
          }}
          className="primary-button darkBlue"
        >
          Back To Shopping
        </button>
      </div>
    </>
  );
}

export default NoProductFoundPage;
