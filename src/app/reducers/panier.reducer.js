import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        toast.success("Ajouté au panier!");
      } else {
        toast("Le produit est déjà dans le panier.", {
          icon: "👌",
        });
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
        (item) =>
          item.token === action.payload.token &&
          item.buttons === action.payload.buttons
      );
      if (item) {
        item.quantite++;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(
        (item) =>
          item.token === action.payload.token &&
          item.buttons === action.payload.buttons
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
