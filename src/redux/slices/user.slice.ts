import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: 'users',
//   initialState: { entities: [], loading: 'idle' },
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     })
//   },
// })

// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
