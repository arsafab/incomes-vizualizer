import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Month } from '../../constants';

interface OptionsState {
  month?: Month;
}

const initialState: OptionsState = {};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setMonth: (state, action: PayloadAction<Month>) => {
      state.month = action.payload;
    },
  },
});

export const { setMonth } = optionsSlice.actions;

export default optionsSlice.reducer;
