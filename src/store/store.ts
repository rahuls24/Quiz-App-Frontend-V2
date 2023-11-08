'use client';
import {
	PreloadedState,
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import globalSlice from '@/store/globalSlice';
import { api } from './apiSetup';
import { authenticationApi } from '../services/auth/auth';

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	[authenticationApi.reducerPath]: authenticationApi.reducer,
	global: globalSlice,
	//add all your reducers here
});

/**
 * setupStore Function
 *
 * Sets up and configures the Redux store with the specified preloaded state.
 *
 * @param {PreloadedState<RootState>} preloadedState - The preloaded state for the Redux store (optional).
 * @returns {Store<RootState>} The configured Redux store.
 */
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
