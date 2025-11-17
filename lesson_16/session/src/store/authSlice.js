import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user
        state.isAuthenticated = true
        state.loading = false
      })
      .addMatcher(
        apiSlice.endpoints.getCurrentUser.matchFulfilled,
        (state, action) => {
          state.user = action.payload.user
          state.isAuthenticated = true
          state.loading = false
        }
      )
      .addMatcher(apiSlice.endpoints.getCurrentUser.matchRejected, (state) => {
        state.user = null
        state.isAuthenticated = false
        state.loading = false
      })
      .addMatcher(apiSlice.endpoints.logout.matchFulfilled, (state) => {
        state.user = null
        state.isAuthenticated = false
        state.loading = false
      })
  },
})

export const { clearAuth, setLoading } = authSlice.actions

export default authSlice.reducer
