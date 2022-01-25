import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../constants';

interface ItemsState {
  data: Item[];
}

const initialState: ItemsState = {
  data: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      state.data.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((item) => item.id === action.payload);
      state.data.splice(index, 1);
    },
    setFromStorage: (state, action: PayloadAction<Item[]>) => {
      state.data = action.payload;
    },
  },
});

export const { add, remove, setFromStorage } = itemsSlice.actions;

export default itemsSlice.reducer;
