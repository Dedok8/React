import { createSlice } from "@reduxjs/toolkit";
import { postThunk } from "./postThunk";

const initialState = {
  postList: [],
  loading: true,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.postList = action.payload;
        state.error = null;
      })
      .addCase(postThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
