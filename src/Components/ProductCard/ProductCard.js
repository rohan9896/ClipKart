import React from "react";
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
}) {
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
        <p className="category"><b>Category: {category}</b></p>
        <small className="ratings"><b>Rating: {rating}/5 </b></small>
        <p className="price"><b>₹{price}</b></p>
        <small style={{ color: inStock ? "green" : "red" }} className="inStock">
          {inStock ? "In Stock" : "Out of Stock"}
        </small>
      </div>
      <div className="addToCart">
        <button
          disabled={!inStock}
          style={{ backgroundColor: inStock ? null : "gray" }}
          className="primary-button darkBlue"
        >
          {inStock ? "Add To Cart" : "Out Of Stock"}
        </button>
      </div>
      <span style={{ display: isNew ? null : "none" }} className="badge">
        New!
      </span>
      <span className="heart">
        <img
          className="ecomm__icon"
          src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/heart.svg"
          alt="white heart"
        />
      </span>
    </div>
  );
}

export default ProductCard;
