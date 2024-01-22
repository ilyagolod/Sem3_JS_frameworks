import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../services/productsApi";
import { categoriesApi } from "../../services/categoriesApi";

export const fetchAllProducts = createAsyncThunk("products/getAll", async () => {
  const response = await productsApi.getAll();
  const json = await response.json();
  return json;
});

export const fetchProductById = createAsyncThunk("products/getById", async (id) => {
  const response = await productsApi.getById(id);
  const json = await response.json();
  return json;
});

export const fetchProductsByCategoryId = createAsyncThunk("categories/getProductsById", async (id) => {
  const response = await categoriesApi.getProducts(id);
  const json = await response.json();
  return json;
});

export const fetchCategories = createAsyncThunk("categories/getAll", async (id) => {
  const response = await categoriesApi.getAll();
  const json = await response.json();
  return json;
});

const initialState = {
  products: [],
  saleProducts: [],
  categoryProducts: [],
  categoryTitle: "",
  categories: [],
  currentProduct: {},
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    resetCurrentProduct(state) {
      state.currentProduct = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.saleProducts = payload.filter((item) => item.discont_price);
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      if (payload.result !== "ERR") {
        state.currentProduct = payload[0];
      } else {
        state.currentProduct = null;
      }
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
    builder.addCase(fetchProductsByCategoryId.fulfilled, (state, { payload }) => {
      state.categoryProducts = payload.data;
      state.categoryTitle = payload.category.title;
    });
  },
});

export const { resetCurrentProduct } = shopSlice.actions;
export default shopSlice.reducer;
