import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const shopSlice = createSlice({
  name: "MrJoni",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productData = action.payload;
    },
  },
});
export const { addToCart } = shopSlice.actions;
export default shopSlice.reducer;
