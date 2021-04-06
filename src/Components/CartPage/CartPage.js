import React from "react";
import "./CartPage.css"
import Heading from '../Heading/Heading'

function CartPage() {
  return (
    <>
    <Heading text="CART" />
      <div className="Cart">
        <div className="CartCard__container">
          <div className="CartCard__ItemLeft">
            <img
              src="https://assets.myntassets.com/f_webp,w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/11045666/2020/1/27/b47ba7a2-5ed3-4afb-b1dc-c3b632cd97e51580121650001-Nike-Men-Black-COURT-LITE-2-Tennis-Shoes-4931580121648989-1.jpg"
              alt="prod"
            />
            <div className="CartCard__Middle">
              <div className="CartCard__Details">
                <span>Nike</span>
                <small>A short description about product</small>
              </div>
              <div className="CartCard__PlusMinusBtn">
                <button>+</button>
                <span>12</span>
                <button>-</button>
              </div>
              <button className="primary-button red remove-btn">
                Remove item
              </button>
            </div>
          </div>
          <div className="CartCard__ItemRight">
            <span>₹ 2999</span>
          </div>
        </div>
        <div className="CartPlaceOrder__container">
          <div className="CartPlaceOrder__top">
            <span>Item total</span>
            <span>₹ 1234</span>
          </div>
          <div className="CartPlaceOrder__top">
            <span>Delivery</span>
            <span>₹ 50</span>
          </div>
          <div className="CartPlaceOrder__top">
            <span>Grand total</span>
            <span>₹ 1284</span>
          </div>
          <button className="primary-button darkBlue">Place order</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
