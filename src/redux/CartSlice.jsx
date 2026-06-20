import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ✅ 1. addItem
    addItem: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ 2. removeItem
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );
    },

    // ✅ 3. updateQuantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
