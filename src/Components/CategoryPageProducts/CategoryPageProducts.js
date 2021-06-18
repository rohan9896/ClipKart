import React from "react";
import { useData } from "../../context/data-context";
import Heading from "../Heading/Heading";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductsPage/ProductsPage.css";

function CategoryPageProducts({ categoryName }) {
  const { state: {productsArr} } = useData();
  return (
    <>
      <Heading text={categoryName} />
      <div className="ProductsPage__List">
        {productsArr
          .filter((product) => product.category === categoryName)
          .map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </div>
    </>
  );
}

export default CategoryPageProducts;
