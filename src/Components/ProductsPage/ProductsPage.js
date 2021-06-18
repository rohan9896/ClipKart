import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import Heading from "../Heading/Heading";
import ProductCard from "../ProductCard/ProductCard";
import { useData } from "../../context/data-context";
import Search from "../Search/Search";

function ProductsPage() {
  const { state, dispatch, getSortedData, getFilteredData } = useData();
  const sortedData = getSortedData(state.productsArr, state.sortBy);
  const filteredData = getFilteredData(
    sortedData,
    state.excludeOutOfStock,
    state.newProductsOnly
  );

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }, [])

  const [sortPopoutClicked, setSortPopoutClicked] = useState(false);
  const [filterPopoutClicked, setFilterPopoutClicked] = useState(false);
  return (
    <div className="productsPage__wrapper">
      <div className="DesktopList">
        <div className="sortAndFilter__container">
          <h1>Sort and Filters</h1>
          <h2>Sort By</h2>
          <div className="sortBy">
            <label>
              <input
                checked={state.sortBy && state.sortBy === "PRICE_HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                }
                name="sort"
                type="radio"
              />
              Price High To Low
            </label>
            <label>
              <input
                checked={state.sortBy && state.sortBy === "PRICE_LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                }
                name="sort"
                type="radio"
              />
              Price Low To High
            </label>
          </div>
          <h2>Filters</h2>
          <div className="filters">
            <label>
              <input
                checked={state.excludeOutOfStock}
                onChange={() => dispatch({ type: "TOGGLE_IN_STOCK" })}
                type="checkbox"
              />
              Exclude Out Of Stock
            </label>
            <label>
              <input
                checked={state.newProductsOnly}
                onChange={() => dispatch({ type: "TOGGLE_NEW_PRODUCTS" })}
                type="checkbox"
              />
              Show New Products Only
            </label>
          </div>
          <div
            className="clearAll"
            onClick={() => dispatch({ type: "SHOW_ALL_PRODUCTS" })}
          >
            <p>Clear all Filters</p>
          </div>
        </div>
      </div>
      <div className="MobileList">
        <div className="SortAndFilter">
          <p className="sorticon__mobile">
            Sort
            <span
              onClick={() => setSortPopoutClicked(!sortPopoutClicked)}
              role="img"
              aria-label="down-arrow"
            >
              🔽
            </span>
            <div
              style={{ display: sortPopoutClicked ? null : "none" }}
              className="sort_popout"
            >
              <div className="sortBy mobile">
                <label>
                  <input
                    checked={
                      state.sortBy && state.sortBy === "PRICE_HIGH_TO_LOW"
                    }
                    onChange={() =>
                      dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                    }
                    name="sort"
                    type="radio"
                  />
                  Price High To Low
                </label>
                <label>
                  <input
                    checked={
                      state.sortBy && state.sortBy === "PRICE_LOW_TO_HIGH"
                    }
                    onChange={() =>
                      dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                    }
                    name="sort"
                    type="radio"
                  />
                  Price Low To High
                </label>
              </div>
            </div>
          </p>
          <p className="filtericon__mobile">
            Filter
            <span
              onClick={() => setFilterPopoutClicked(!filterPopoutClicked)}
              role="img"
              aria-label="down-arrow"
            >
              🔽
            </span>
            <div
              style={{ display: filterPopoutClicked ? null : "none" }}
              className="filter_popout"
            >
              <div className="filters mobile">
                <label>
                  <input
                    checked={state.excludeOutOfStock}
                    onChange={() => dispatch({ type: "TOGGLE_IN_STOCK" })}
                    type="checkbox"
                  />
                  Exclude Out Of Stock
                </label>
                <label>
                  <input
                    checked={state.newProductsOnly}
                    onChange={() => dispatch({ type: "TOGGLE_NEW_PRODUCTS" })}
                    type="checkbox"
                  />
                  Show New Products Only
                </label>
              </div>
            </div>
          </p>
        </div>
        <div
          className="clearAll"
          onClick={() => dispatch({ type: "SHOW_ALL_PRODUCTS" })}
        >
          <p>Clear all Filters</p>
        </div>
      </div>
      <div>
        <Heading text="PRODUCTS" />
        <Search />
        <div className="ProductsPage__List">
          {filteredData.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
