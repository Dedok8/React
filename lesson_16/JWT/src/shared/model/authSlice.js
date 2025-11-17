import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  accessToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
    tokenRefreshed(state, action) {
      state.accessToken = action.payload.accessToken
      state.user = action.payload.user
    },
    logout(state) {
      state.user = null
      state.accessToken = null
    },
  },
})

export const { loginSuccess, tokenRefreshed, logout } = authSlice.actions

export const selectAuthUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken

export default authSlice.reducer
