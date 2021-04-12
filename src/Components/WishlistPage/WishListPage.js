import React from "react";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import Heading from "../Heading/Heading";
import "./WishListPage.css";

function WishListPage() {
  const { state, dispatch, containsInCart } = useCartWishlist();

  return (
    <>
      <Heading text="WISHLIST" />
      <div className="Wishlist__List">
        {state.wishlistArr.map((product) => {
          const productAlreadyInCart = containsInCart(product.id);
          return (
            <div key={product.id} className="card2">
              <img alt="wishlistCard" src={product.img} />
              <span className="card2__brand">{product.name}</span>
              <span>Price: ₹ {product.price}</span>
              <span>Category: {product.category}</span>
              <button
                style={{
                  backgroundColor:
                    productAlreadyInCart || !product.inStock ? "gray" : null
                }}
                disabled={productAlreadyInCart || !product.inStock}
                onClick={() =>
                  dispatch({
                    type: productAlreadyInCart
                      ? null
                      : "MOVE_TO_CART_FROM_WISHLIST",
                    payload: product.id
                  })
                }
                className="primary-button darkBlue"
              >
                {productAlreadyInCart
                  ? "Already in Cart"
                  : product.inStock
                  ? "Move To Cart"
                  : "Out of Stock"}
              </button>
              <span
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: product.id
                  })
                }
                className="cross"
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WishListPage;
