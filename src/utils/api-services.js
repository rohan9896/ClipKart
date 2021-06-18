import axios from "axios";
import { apiUrl } from "./constants";

export const fetchProductsData = async (dispatch) => {
  try {
    const resp = await axios.get(apiUrl + "/products");

    if (resp.data.success) {
      const productsData = resp.data.products;
      const productsDataWithId = productsData.map((product) => {
        return { ...product, id: product._id, _id: undefined };
      });
      return productsDataWithId;
    }
  } catch (err) {
      console.log(err);
  }
};
