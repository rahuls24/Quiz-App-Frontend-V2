'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
type GlobalState = {
  isLoggedIn: boolean;
  authToken: string;
};
const initialState: GlobalState = {
  // Add global state here
  isLoggedIn: false,
  authToken: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
  },
});

export const { setIsLoggedIn, setAuthToken } = globalSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.global.isLoggedIn;
export const selectAuthToken = (state: RootState) => state.global.authToken;

export default globalSlice.reducer;
