import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartWishListContextProvider from "./context/cart-wishlist-context";

ReactDOM.render(
  <React.StrictMode>
    <CartWishListContextProvider>
      <App />
    </CartWishListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
