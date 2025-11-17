// services/auth.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery(
          '/refresh-token',
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(setToken(refreshResult.data))
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
          window.location.href = '/login' // Перенаправлення
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/user',
    }),
  }),
})
