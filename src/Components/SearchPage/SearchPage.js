import React from "react";
import Search from "../Search/Search";
import "./SearchPage.css";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import NavBar from "../NavBar/NavBar";
import Heading from "../Heading/Heading";
import ProductCard from "../ProductCard/ProductCard";
import BottomNav from "../BottomNav/BottomNav";

function SearchPage() {
  const { state, containsInSearchedProducts } = useCartWishlist();

  return (
    <>
      <NavBar />
      <Heading text={`RESULTS - ${state.searchedProducts.length}`} />
      <Search />
      <div className="SearchProducts__productsConatiner">
        {state.productsArr.map((product) =>
          containsInSearchedProducts(product.id) ? (
            <ProductCard key={product.id} {...product} />
          ) : null
        )}
      </div>
      <BottomNav />
    </>
  );
}

export default SearchPage;
