import axios from "axios";
import { apiUrl } from "./constants";

const getAllProducts = async () => {
  try {
    const resp = await axios.get(apiUrl + "/products");
  } catch (err) {
      
  }
};
