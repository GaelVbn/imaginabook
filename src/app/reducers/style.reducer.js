import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  isVisible: false,
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = styleSlice.actions;
export default styleSlice.reducer;
