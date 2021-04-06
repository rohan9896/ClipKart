import React from "react";
import "./EmptyPage.css";

function EmptyPage({img, pageType}) {
  return (
    <>
      <div className="EmptyContainer">
        <img
          alt="emptycontainer"
          src={img}
        />
        <p className="EmptyContainer__line1">Your {pageType} is empty</p>
        <p className="EmptyContainer__line2">
          You don't have any products in your {pageType}.
        </p>
      </div>
    </>
  );
}

export default EmptyPage;
