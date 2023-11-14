'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserDetails } from '@/types/userRelated';
type GlobalState = {
  isLoggedIn: boolean;
  authToken: string;
  userDetails: UserDetails | null;
};
const initialState: GlobalState = {
  // Add global state here
  isLoggedIn: false,
  authToken: '',
  userDetails: null,
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
    setUserDetails: (state, action: PayloadAction<UserDetails | null>) => {
      state.userDetails = action.payload;
    },
    handleLogout: () => {
      return initialState;
    },
  },
});

export const { setIsLoggedIn, setAuthToken, setUserDetails, handleLogout } =
  globalSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.global.isLoggedIn;
export const selectAuthToken = (state: RootState) => state.global.authToken;
export const selectUserDetails = (state: RootState) => state.global.userDetails;

export default globalSlice.reducer;
