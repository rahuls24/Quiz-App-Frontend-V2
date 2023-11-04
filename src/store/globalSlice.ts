'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
type GlobalState = {
  isLoggedIn: boolean;
};
const initialState: GlobalState = {
  // Add global state here
  isLoggedIn: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = globalSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.global.isLoggedIn;

export default globalSlice.reducer;
