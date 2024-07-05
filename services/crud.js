import axios from "axios";

const crudUrl = "https://backend-jm7y.onrender.com/api/products/";

const getProducts = () => {
  return axios.get(crudUrl);
};

const getProduct = (productId) => {
  return axios.get(`${crudUrl}${productId}/`);
};

const createProduct = (product) => {
  return axios.post(crudUrl, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateProduct = (productId, product) => {
  return axios.put(`${crudUrl}${productId}/`, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteProduct = (productId) => {
  return axios.delete(`${crudUrl}${productId}/`);
};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
