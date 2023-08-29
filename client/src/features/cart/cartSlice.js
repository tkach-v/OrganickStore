import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const {product_id, quantity} = action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === product_id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );
    },
  }
});

export const {addItem, removeItem} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;