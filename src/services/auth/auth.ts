import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  normalizeAuthWithEmailErrorRes,
  normalizeSigninWithEmailSuccessRes,
} from './responseNormalizer';

// Define our single API slice object
export const authenticationApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'quiz-app-auth',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://a-quiz-app-for-anyone.onrender.com/api',
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    signupUserByEmail: builder.mutation({
      query: (userDetails) => ({
        url: 'auth/register-user-with-email',
        method: 'POST',
        body: userDetails,
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return normalizeAuthWithEmailErrorRes(baseQueryReturnValue.data);
      },
    }),
    signinUserByEmail: builder.mutation({
      query: (userDetails) => ({
        url: '/auth/signin-user-with-email',
        method: 'POST',
        body: userDetails,
      }),
      transformResponse(baseQueryReturnValue) {
        return normalizeSigninWithEmailSuccessRes(baseQueryReturnValue);
      },
      transformErrorResponse(baseQueryReturnValue) {
        return normalizeAuthWithEmailErrorRes(baseQueryReturnValue.data);
      },
    }),
  }),
});

export const { useSigninUserByEmailMutation, useSignupUserByEmailMutation } =
  authenticationApi;
