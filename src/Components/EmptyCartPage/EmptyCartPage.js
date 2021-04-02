import React from "react";
import "./EmptyCartPage.css";

function EmptyCartPage() {
  return (
    <>
      <div className="EmptyCart">
        <img
          alt="emptycart"
          src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/23abfd6d1dc3f4df585291366274fc516071ee22/icons/ecomm/emptyCart.svg"
        />
        <p className="EmptyCart__line1">Your bag is empty</p>
        <p className="EmptyCart__line2">
          You don't have any products in your bag.
        </p>
      </div>
    </>
  );
}

export default EmptyCartPage;
