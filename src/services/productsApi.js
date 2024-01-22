import { BACKEND_URL } from "../constants/backend";

export const productsApi = {
  getAll: () => fetch(`${BACKEND_URL}/products/all`),
  getById: (id) => fetch(`${BACKEND_URL}/products/${id}`),
};
