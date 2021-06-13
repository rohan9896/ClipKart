import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import BottomNav from "./BottomNav/BottomNav";
import WishListPage from "./WishlistPage/WishListPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import CartPage from "./CartPage/CartPage";
import EmptyPage from "./EmptyPage/EmptyPage";
import { useCartWishlist } from "../context/cart-wishlist-context";
import NoProductFoundPage from "./NoProductFoundPage/NoProductFoundPage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import CategoryPageProducts from "./CategoryPageProducts/CategoryPageProducts";
import { categories } from "../categories-name-in-uri-format";
import LoadingComponent from "./LoadingComponent/LoadingComponent";
import SearchPage from "./SearchPage/SearchPage";

function RouterComponent() {
  const { state, isProductsReceived } = useCartWishlist();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <NavBar />
              {isProductsReceived ? <ProductsPage /> : <LoadingComponent />}
              <BottomNav />
            </>
          }
        />
        <Route
          path="categories"
          element={
            <>
              <NavBar />
              <Route path="/" element={<CategoriesPage />} />
              <BottomNav />
            </>
          }
        />
        {categories.map((category, idx) => {
          return (
            <Route
              key={idx}
              path={`categories/${category}`}
              element={
                <>
                  <NavBar />
                  <CategoryPageProducts
                    categoryName={decodeURIComponent(category)}
                  />
                  <BottomNav />
                </>
              }
            />
          );
        })}
        <Route
          path="/cart"
          element={
            <>
              <NavBar />
              {state.cartArr.length === 0 ? (
                <EmptyPage
                  img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/23abfd6d1dc3f4df585291366274fc516071ee22/icons/ecomm/emptyCart.svg"
                  pageType="Cart"
                />
              ) : (
                <CartPage />
              )}
              <BottomNav />
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              <NavBar />
              {state.wishlistArr.length === 0 ? (
                <EmptyPage
                  img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/551189fca98a388829785311f690d06c18ed8be9/icons/ecomm/empty_wishlist.svg"
                  pageType="Wishlist"
                />
              ) : (
                <WishListPage />
              )}
              <BottomNav />
            </>
          }
        />
        <Route
          path="/products/search"
          element={
            <>
              {state.searchedProducts.length === 0 ? (
                <NoProductFoundPage />
              ) : (
                <SearchPage />
              )}
            </>
          }
        />
        <Route
          path="*"
          element={
            <EmptyPage
              img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/main/icons/ecomm/undraw_page_not_found_su7k.svg"
              noLine
            />
          }
          noLine
        />
      </Routes>
    </>
  );
}

export default RouterComponent;
