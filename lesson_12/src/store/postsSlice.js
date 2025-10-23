import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCreatePostExtraReducer,
  fetchDeleteExtraReducer,
  fetchMorePostsExtraReducer,
  fetchPostsExtraReducer,
} from "./extraReducer";

const initialState = {
  postsList: [],
  currentPageNumber: 1,
  postsNumberPerPage: 5,
  totalPagesNumber: 1,
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    fetchPostsExtraReducer(builder);
    fetchDeleteExtraReducer(builder);
    fetchCreatePostExtraReducer(builder);
    fetchMorePostsExtraReducer(builder);
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } = postsSlice.actions;

export default postsSlice.reducer;
