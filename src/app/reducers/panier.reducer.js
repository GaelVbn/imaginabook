import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  numberOfItems: 1,
};

export const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exist = state.items.find(
        (item) =>
          item.token === action.payload.token &&
          item.buttons === action.payload.buttons
      );
      if (!exist) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.token === action.payload.token &&
            item.buttons === action.payload.buttons
          )
      );
    },
    clearPanier: (state) => {
      state.items = [];
    },
    increment: (state, action) => {
      const item = state.items.find(
        (item) => item.token === action.payload.token
      );
      if (item) {
        item.quantite++;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(
        (item) => item.token === action.payload.token
      );
      if (item && item.quantite > 1) {
        item.quantite--;
      }
    },
  },
});

export const { addItem, removeItem, clearPanier, increment, decrement } =
  panierSlice.actions;
export default panierSlice.reducer;
