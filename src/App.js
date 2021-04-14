import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import BottomNav from "./Components/BottomNav/BottomNav";
import WishListPage from "./Components/WishlistPage/WishListPage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import CartPage from "./Components/CartPage/CartPage";
import EmptyPage from "./Components/EmptyPage/EmptyPage";
import { useCartWishlist } from "./context/cart-wishlist-context";
import NoProductFoundPage from "./Components/NoProductFoundPage/NoProductFoundPage";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";

function App() {
  const { state } = useCartWishlist();

  return (
    <div className="App">
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
              {state.productsArr.length === 0 ? (
                <NoProductFoundPage />
              ) : (
                <ProductsPage />
              )}
              <BottomNav />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <NavBar />
              {/* <h1>Categories will go here...</h1> */}
              <CategoriesPage />
              <BottomNav />
            </>
          }
        />
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
    </div>
  );
}

export default App;
