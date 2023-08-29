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
        existingItem.quantity = quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );
    },
    updateItem: (state, action) => {
      const {product_id, quantity} = action.payload;
      const currentItem = state.items.find(
        (item) => item.product_id === product_id
      );
      currentItem.quantity = quantity;
    },
    removeAll: (state) => {
      state.items = [];
    }
  }
});

export const {
  addItem,
  removeItem,
  updateItem,
  removeAll
} = cartSlice.actions;
export default cartSlice.reducer;