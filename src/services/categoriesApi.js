import { BACKEND_URL } from "../constants/backend";

export const categoriesApi = {
  getAll: () => fetch(`${BACKEND_URL}/categories/all`),
  getProducts: (id) => fetch(`${BACKEND_URL}/categories/${id}`),
};
