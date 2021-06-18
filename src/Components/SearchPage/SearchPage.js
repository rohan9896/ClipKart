import React from "react";
import Search from "../Search/Search";
import "./SearchPage.css";
import { useData } from "../../context/data-context";
import NavBar from "../NavBar/NavBar";
import Heading from "../Heading/Heading";
import ProductCard from "../ProductCard/ProductCard";
import BottomNav from "../BottomNav/BottomNav";

function SearchPage() {
  const { state, containsInSearchedProducts } = useData();

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
