import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '@/shared/api/authApi'
import { usersApi } from '@/shared/api/usersApi'
import authReducer from '@/shared/model/authSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
})
