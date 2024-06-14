import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Each item should be an object with an id and name
      state.items.push({ id: new Date().toISOString(), ...action.payload });
    },
    removeItem: (state, action) => {
      // Remove item by id
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
