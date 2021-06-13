import React from "react";
import "./EmptyPage.css";

function EmptyPage({ img, pageType, noLine }) {
  return (
    <>
      <div className="EmptyContainer">
        <img alt="emptycontainer" src={img} />
        <p
          style={{ display: noLine ? "none" : null }}
          className="EmptyContainer__line1"
        >
          Your {pageType} is empty
        </p>
        <p
          style={{ display: noLine ? "none" : null }}
          className="EmptyContainer__line2"
        >
          You don't have any products in your {pageType}.
        </p>
      </div>
    </>
  );
}

export default EmptyPage;
