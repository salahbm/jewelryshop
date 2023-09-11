import { StoreItem, userInfo } from "@/app/type";
import { createSlice } from "@reduxjs/toolkit";

interface ShopInterface {
  productData: StoreItem[];
  userInfo: null | userInfo;
}
const initialState: ShopInterface = {
  productData: [],
  userInfo: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: StoreItem) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreItem) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreItem) => item._id === action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
  },
});
export const { addToCart, plusQuantity, minusQuantity, deleteItem, resetCart } =
  shopSlice.actions;
export default shopSlice.reducer;
