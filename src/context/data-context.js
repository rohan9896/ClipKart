import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getSortedData, getFilteredData } from "./filters-functions";
import { actionTypes } from "./action-types";
import axios from "axios";
import { apiUrl } from "../utils/constants";

const DataContext = createContext();

//initial state values
const productsArr = [];
const cartArr = [];
const wishlistArr = [];
const sortBy = "";
const excludeOutOfStock = false;
const newProductsOnly = false;
const searchedProducts = [];

export default function DataContextProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [isProductsReceived, setIsProductsReceived] = useState(false);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(apiUrl + "/products");

      if (resp.data.success) {
        const productsData = resp.data.products;
        const productsDataWithId = productsData.map((product) => {
          return { ...product, id: product._id, _id: undefined };
        });
        dispatch({ type: "SET_PRODUCTS_DATA", payload: productsDataWithId }); //for setting the state of products
        setApiData(productsData); //for storing the original products data recived from serevr
        setIsProductsReceived(true);
      }
    })();
  }, []);

  //reducer func
  const dataReducerFunc = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_PRODUCTS_DATA:
        return {
          ...state,
          productsArr: action.payload,
        };
      case actionTypes.SHOW_ALL_PRODUCTS:
        return {
          ...state,
          productsArr: apiData,
          sortBy: "",
          excludeOutOfStock: false,
          newProductsOnly: false,
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
        if (
          state.wishlistArr.some((product) => product.id === action.payload)
        ) {
          return state;
        }
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
          searchedProducts: state.productsArr.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      case actionTypes.SORT:
        return {
          ...state,
          sortBy: action.payload,
        };
      case actionTypes.TOGGLE_IN_STOCK:
        return {
          ...state,
          excludeOutOfStock: !state.excludeOutOfStock,
        };
      case actionTypes.TOGGLE_NEW_PRODUCTS:
        return {
          ...state,
          newProductsOnly: !state.newProductsOnly,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(dataReducerFunc, {
    productsArr,
    cartArr,
    wishlistArr,
    sortBy,
    excludeOutOfStock,
    newProductsOnly,
    searchedProducts,
  });

  const containsInCart = (id) => state.cartArr.some((item) => item.id === id);
  const containsInSearchedProducts = (id) =>
    state.searchedProducts.some((item) => item.id === id);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch, //state setter function
        containsInCart, //returns function which takes product id as argument
        containsInSearchedProducts, //returns function which takes product id as argument
        getSortedData,
        getFilteredData,
        isProductsReceived,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
