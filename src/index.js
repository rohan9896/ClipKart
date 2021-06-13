import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartWishListContextProvider from "./context/cart-wishlist-context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartWishListContextProvider>
        <App />
      </CartWishListContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
