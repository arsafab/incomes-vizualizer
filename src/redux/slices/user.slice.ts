import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email?: string;
  name?: string;
  uid?: string;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { name, email, uid } = action.payload;
      state.name = name;
      state.email = email;
      state.uid = uid;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
