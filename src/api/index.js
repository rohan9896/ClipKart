import axios from "axios";

const url = "https://e-comm-backend.rohangupta7.repl.co/products";

const loadProductsData = async () => {
  const resp = await axios.get(url);
  if(resp.data.success) {
    return resp.data.productsData;
  }
}

export const productsData = loadProductsData();