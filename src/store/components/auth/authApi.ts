/* eslint-disable no-restricted-globals */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApis",

  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `auth/sign-in-admin`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
