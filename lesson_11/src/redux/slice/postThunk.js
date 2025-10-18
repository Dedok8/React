import { postApi } from "@/services/postApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postThunk = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await postApi.fetchAllPosts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
