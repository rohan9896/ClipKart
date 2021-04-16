import React from "react";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import Heading from "../Heading/Heading";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductsPage/ProductsPage.css";
import { Routes, Route } from "react-router-dom";

function CategoryPageProducts({ categoryName }) {
  const { state } = useCartWishlist();
  return (
    <>
      <Heading text={categoryName} />
      <div className="ProductsPage__List">
        {state.productsArr
          .filter((product) => product.category === categoryName)
          .map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </div>
    </>
  );
}

export default CategoryPageProducts;
