import { createSlice } from "@reduxjs/toolkit";
import { saveCartToLS } from "../../utils/saveCartToLS";

const cartItems = localStorage.getItem("cart");

const initialState = {
  items: cartItems ? JSON.parse(cartItems) : [],
  itemsCount: cartItems
    ? JSON.parse(cartItems).reduce((acc, curr) => {
        return acc + curr.count;
      }, 0)
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      const findedIndex = state.items.findIndex((item) => item.id === payload.id);

      if (findedIndex !== -1) {
        state.items = state.items.map((item, index) =>
          index === findedIndex ? { ...item, count: item.count + payload.count } : item
        );
      } else {
        state.items = [...state.items, payload];
      }

      state.itemsCount += payload.count;
      saveCartToLS(state.items);
    },
    putItemFromCart(state, { payload }) {
      state.items = state.items.map((item) => {
        if (item.id === payload.id && item.count > 1) {
          state.itemsCount -= 1;
          return { ...item, count: item.count - 1 };
        } else return item;
      });
      saveCartToLS(state.items);
    },
    removeItemFromCart(state, { payload }) {
      state.itemsCount -= state.items.find((item) => item.id === payload.id).count;
      state.items = state.items.filter((item) => item.id !== payload.id);
      saveCartToLS(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.itemsCount = 0;

      saveCartToLS([]);
    },
  },
});

export const { addItemToCart, putItemFromCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
