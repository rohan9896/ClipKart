import { createContext, useContext, useReducer } from "react";
import { productsData } from "../data/faker-productsData";

const CartWishListContext = createContext();

const productsArr = productsData;
const cartArr = [];
const wishlistArr = [];

const actionTypes = {
  SHOW_ALL_PRODUCTS: "SHOW_ALL_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
  MOVE_TO_CART_FROM_WISHLIST: "MOVE_TO_CART_FROM_WISHLIST",
  SEARCH_PRODUCTS: "SEARCH_PRODUCTS",
};

const cartWishlistReducerFunc = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALL_PRODUCTS:
      return {
        ...state,
        productsArr: productsData,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartArr: [
          ...new Set(
            state.cartArr.concat(
              state.productsArr.filter(
                (product) => product.id === action.payload
              )
            )
          ),
        ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartArr: state.cartArr.filter(
          (product) => product.id !== action.payload
        ),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartArr: state.cartArr.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartArr: state.cartArr.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistArr: state.wishlistArr.concat(
          state.productsArr.filter((product) => product.id === action.payload)
        ),
        productsArr: state.productsArr.map((product) =>
          product.id === action.payload
            ? { ...product, wishlisted: !product.wishlisted }
            : product
        ),
      };
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistArr: state.wishlistArr.filter(
          (product) => product.id !== action.payload
        ),
        productsArr: state.productsArr.map((product) =>
          product.id === action.payload
            ? { ...product, wishlisted: false }
            : product
        ),
      };
    case actionTypes.MOVE_TO_CART_FROM_WISHLIST:
      return {
        ...state,
        wishlistArr: state.wishlistArr.filter(
          (product) => product.id !== action.payload
        ),
        cartArr: [
          ...new Set(
            state.cartArr.concat(
              state.productsArr.filter(
                (product) => product.id === action.payload
              )
            )
          ),
        ],
        productsArr: state.productsArr.map((product) =>
          product.id === action.payload
            ? { ...product, wishlisted: false }
            : product
        ),
      };
    case actionTypes.SEARCH_PRODUCTS:
      if (action.payload === "") return;
      return {
        ...state,
        productsArr: state.productsArr.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return;
  }
};

export default function CartWishListContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartWishlistReducerFunc, {
    productsArr,
    cartArr,
    wishlistArr,
  });

  // const containsInWishlist = (id) =>
  //   state.wishlistArr.some((item) => item.id === id);

  const containsInCart = (id) => state.cartArr.some((item) => item.id === id);

  return (
    <CartWishListContext.Provider
      value={{
        state,
        dispatch, //state setter function
        containsInCart, //returns function which takes product id as argument
      }}
    >
      {children}
    </CartWishListContext.Provider>
  );
}

export const useCartWishlist = () => useContext(CartWishListContext);
