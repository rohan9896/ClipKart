import { createContext, useContext, useReducer } from "react";
import { productsData } from "../data/faker-productsData";

const CartWishListContext = createContext();

const productsArr = productsData;
const cartArr = [];
const wishlistArr = [];


// const containsInWishlist = (product) =>
//   state.wishlistArr.some((item) => item.id === product.id);

// const containsInCart = (product) =>
//   state.cartArr.some((item) => item.id === product.id);

const cartWishlistReducerFunc = (state, action) => {
  // switch (action.type) {
  //   case "":
      
  
  //   default:
  //     return;
  // }
}

export default function CartWishListContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartWishlistReducerFunc, {
    productsArr,
    cartArr,
    wishlistArr,
  });

  return (

    <CartWishListContext.Provider
      value={{ state, dispatch
        //  containsInCart, containsInWishlist
         }}
    >
      {children}
    </CartWishListContext.Provider>
  );
}

export const useCartWishlist = () => useContext(CartWishListContext);
