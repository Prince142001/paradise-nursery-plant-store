import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;
      const existing = state.items.find((it) => it.id === payload.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((it) => it.id !== action.payload);
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          state.items = state.items.filter((it) => it.id !== id);
        }
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((it) => it.id === id);
      if (item) {
        item.qty += 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseQty, increaseQty, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartSlice;
