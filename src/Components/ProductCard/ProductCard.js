import React from "react";
import './ProductCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductCard({id, name, description, price, inStock, isNew, img, category, rating}) {
  return (
    <div class="card">
      <LazyLoadImage style={{width: "15rem", maxWidth: "100%", height: "20rem"}} effect="blur" alt="model" src={img} />
      <div class="productInfo">
        <p>{name}</p>
        <small>{description}</small>
        <p>Category: {category}</p>
        <small>Rating: {rating}/5</small>
        <p>₹{price}</p>
        <small>{inStock ? "In Stock" : "Out of Stock"}</small>
      </div>
      <button disabled={!inStock} style={{backgroundColor: inStock ? null : "gray"}} class="primary-button darkBlue">{inStock ? "Add To Cart" : "Out Of Stock"}</button>
      <span style={{display: isNew ? null : "none"}} class="badge">New!</span>
      <span class="heart">
        <img
          class="ecomm__icon"
          src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/heart.svg"
          alt="white heart"
        />
      </span>
    </div>
  );
}

export default ProductCard;
