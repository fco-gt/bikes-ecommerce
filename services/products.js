import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("http://localhost:8000/api/products/");
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(
    "http://localhost:8000/api/products/",
    product
  );
  return response.data;
};
