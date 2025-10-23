import apiClient from "@/api/apiClient";
import initialPosts from "@/data/initialPosts";
import { createAsyncThunk } from "@reduxjs/toolkit";

const postsApi = apiClient("posts", 500, initialPosts);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeletePost = createAsyncThunk(
  "posts/fetchDeletePost",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await postsApi.delete(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCreatePost = createAsyncThunk(
  "posts/fetchCreatePost",
  async ({ item }, { rejectWithValue }) => {
    try {
      const response = await postsApi.create(item);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMorePosts = createAsyncThunk(
  "posts/fetchMorePosts",
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
