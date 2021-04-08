import React from "react";
import Heading from "../Heading/Heading";
import "./LessProductsGrid.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LessProductsGrid({ item, heading, trendingBrands }) {
  return (
    <>
      <div className="ShowCaseSection__productsContainer">
        <Heading text={heading} />
        <div className="ShowCaseSection__productsList">
          {item.map((product) => {
            return (
              <div key={product.id} className="card2">
                <LazyLoadImage
                  effect="blur"
                  style={{ width: "18rem" ,maxWidth: "100%", height: "15rem" }}
                  alt="prod"
                  src={product.img}
                />
                <span className="card2__brand">{trendingBrands ? `${product.brand}` : `${product.name}`  }</span>
                <span>{trendingBrands ? `Upto ${product.discountPercent}% OFF` : `Discount Price: ₹${product.price}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LessProductsGrid;
