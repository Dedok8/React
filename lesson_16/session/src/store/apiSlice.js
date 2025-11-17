import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include', // Важливо для httpOnly cookies
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  tagTypes: ['User', 'Users', 'Reports', 'Data', 'Content'],
  endpoints: (builder) => ({
    // Auth endpoints
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => '/auth/me',
      providesTags: ['User'],
    }),

    // Admin endpoints
    getUsers: builder.query({
      query: () => '/admin/users',
      providesTags: ['Users'],
    }),

    // Management endpoints
    getReports: builder.query({
      query: () => '/management/reports',
      providesTags: ['Reports'],
    }),

    // Protected data endpoints
    getProtectedData: builder.query({
      query: () => '/protected/data',
      providesTags: ['Data'],
    }),

    // Public content with role-specific sections
    getPublicContent: builder.query({
      query: () => '/public/content',
      providesTags: ['Content'],
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useGetReportsQuery,
  useGetProtectedDataQuery,
  useGetPublicContentQuery,
} = apiSlice
