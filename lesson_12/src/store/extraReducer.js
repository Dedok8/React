import {
  fetchCreatePost,
  fetchDeletePost,
  fetchMorePosts,
  fetchPosts,
} from "./postsThunks";

export const fetchPostsExtraReducer = (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.postsList = action.payload.items;
      const paginationData = action.payload.pagination;
      state.currentPageNumber = paginationData.currentPage;
      state.postsNumberPerPage = paginationData.pageSize;
      state.totalPagesNumber = paginationData.totalPages;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

export const fetchMorePostsExtraReducer = (builder) => {
  builder
    .addCase(fetchMorePosts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchMorePosts.fulfilled, (state, action) => {
      state.status = "success";
      const newItems = action.payload.items;
      const paginationData = action.payload.pagination;

      const existingIds = new Set(state.postsList.map((p) => p.id));
      const uniqueNewPosts = newItems.filter((p) => !existingIds.has(p.id));
      state.postsList = [...state.postsList, ...uniqueNewPosts];

      state.currentPageNumber = paginationData.currentPage;
      state.totalPagesNumber = paginationData.totalPages;
    })
    .addCase(fetchMorePosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

export const fetchDeleteExtraReducer = (builder) => {
  builder
    .addCase(fetchDeletePost.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchDeletePost.fulfilled, (state, action) => {
      state.status = "success";
      const deletedId = action.payload?.id ?? action.payload;
      state.postsList = state.postsList.filter((post) => post.id !== deletedId);
    })
    .addCase(fetchDeletePost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

export const fetchCreatePostExtraReducer = (builder) => {
  builder
    .addCase(fetchCreatePost.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchCreatePost.fulfilled, (state, action) => {
      state.status = "success";
      const post = action.payload;
      state.postsList = [post, ...state.postsList];
    })
    .addCase(fetchCreatePost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
