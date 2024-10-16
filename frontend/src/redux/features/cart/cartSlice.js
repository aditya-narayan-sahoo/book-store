import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItems = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItems) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "🎉 Product Added to Cart!",
          text: "You can view your cart anytime.",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          customClass: {
            title: "swal-title",
            text: "swal-text",
            popup: "swal-popup",
          },
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "warning",
          title: "⚠️ Already in Cart",
          text: "This product is already in your cart.",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
