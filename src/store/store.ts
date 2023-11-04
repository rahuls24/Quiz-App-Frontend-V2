'use client';
import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import globalSlice from '@/store/globalSlice';
import { api } from './apiSetup';
import { authenticationApi } from '../../services/auth';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  global: globalSlice,
  //add all your reducers here
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat([
        api.middleware,
        authenticationApi.middleware,
      ]),
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
