import http from "../http-common";

const getProducts = (token, lang) => {
  let url;
  if (lang === "ar") {
    url = `/product/?lang=ar`;
  } else {
    url = "/product";
  }
  return http.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const addProduct = (data, token) => {
  return http.post("/product", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const editProduct = (id, data, token) => {
  console.log(id, data);
  return http.put(`/product/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteProduct = (id, token) => {
  return http.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getProduct = (id, token) => {
  return http.get(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const productService = {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
};

export default productService;
