import React from "react";
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCartWishlist } from "../../context/cart-wishlist-context";

function ProductCard({
  id,
  name,
  description,
  price,
  inStock,
  isNew,
  img,
  category,
  rating,
  wishlisted
}) {
  const { dispatch, containsInCart } = useCartWishlist();

  return (
    <div key={id} className="card">
      <LazyLoadImage
        style={{ width: "15rem", maxWidth: "100%", height: "16rem" }}
        effect="blur"
        alt="model"
        src={img}
      />
      <div className="productInfo">
        <p className="name">{name}</p>
        <small className="description">{description}</small>
        <p className="category">
          <b>Category: {category}</b>
        </p>
        <small className="ratings">
          <b>Rating: {rating}/5 </b>
        </small>
        <p className="price">
          <b>₹{price}</b>
        </p>
        <small style={{ color: inStock ? "green" : "red" }} className="inStock">
          {inStock ? "In Stock" : "Out of Stock"}
        </small>
      </div>
      <div className="addToCart">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: id })}
          disabled={!inStock}
          style={{ backgroundColor: inStock ? null : "gray" }}
          className="primary-button darkBlue"
        >
          {inStock
            ? containsInCart(id)
              ? "Already in Cart"
              : "Add to Cart"
            : "Out Of Stock"}
        </button>
      </div>
      <span style={{ display: isNew ? null : "none" }} className="badge">
        New!
      </span>
      <span className="heart">
        <img
          className="ecomm__icon"
          onClick={() =>
            dispatch({
              type: wishlisted ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST",
              payload: id
            })
          }
          src={
            wishlisted
              ? "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/heart.svg"
              : "https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/ecomm/white-heart-emoji-clipart-lg.png?raw=true"
          }
          alt="heart"
        />
      </span>
    </div>
  );
}

export default ProductCard;
