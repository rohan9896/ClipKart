import React from "react";
import "./CartPage.css";
import Heading from "../Heading/Heading";
import { useCartWishlist } from "../../context/cart-wishlist-context";

function CartPage() {
  const { state, dispatch } = useCartWishlist();

  const totalPriceInCart = state.cartArr?.reduce((accumulatePrice, product) => {
    return accumulatePrice + product.price * product.quantity;
  }, 0);

  return (
    <>
      <Heading text="CART" />
      <div className="CartPage__container">
        <div>
          {state.cartArr.map(
            ({ id, img, name, description, price, quantity }) => {
              return (
                <div key={id} className="Cart">
                  <div className="CartCard__container">
                    <div className="CartCard__ItemLeft">
                      <img src={img} alt="prod" />
                      <div className="CartCard__Middle">
                        <div className="CartCard__Details">
                          <span style={{ fontWeight: "900" }}>{name}</span>
                          <small>{description}</small>
                        </div>
                        <div className="CartCard__PlusMinusBtn">
                          <button
                            onClick={() =>
                              dispatch({
                                type: "INCREASE_QUANTITY",
                                payload: id,
                              })
                            }
                          >
                            +
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({
                                type:
                                  quantity === 1
                                    ? "REMOVE_FROM_CART"
                                    : "DECREASE_QUANTITY",
                                payload: id,
                              })
                            }
                          >
                            -
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE_FROM_CART", payload: id })
                          }
                          className="primary-button red remove-btn"
                        >
                          Remove item
                        </button>
                      </div>
                    </div>
                    <div className="CartCard__ItemRight">
                      <span>₹ {price}</span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="CartPlaceOrder__container">
          <div className="CartPlaceOrder__top">
            <span>Item total</span>
            <span>₹ {totalPriceInCart}</span>
          </div>
          <div className="CartPlaceOrder__top">
            <span>Delivery</span>
            <span>₹ 50</span>
          </div>
          <div className="CartPlaceOrder__top">
            <span>Grand total</span>
            <span>₹ {totalPriceInCart + 50}</span>
          </div>
          <button className="primary-button darkBlue">Place order</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
