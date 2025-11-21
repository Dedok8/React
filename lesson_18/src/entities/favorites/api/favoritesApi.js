import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "@/shared/api/DbOperations";

const db = new DbOperations("favorites");

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getUserFavorites: builder.query({
      async queryFn(userId) {
        try {
          const favorites = await db.getFavoritesByUserId(userId);
          return { data: favorites };
        } catch (error) {
          return {
            error: { message: error?.message || "Error loading favorites" },
          };
        }
      },
      providesTags: (result, error, userId) => [
        { type: "Favorites", id: userId },
      ],
    }),

    addFavorite: builder.mutation({
      async queryFn({ userId, favorite }) {
        try {
          if (!favorite?.id) {
            throw new Error("Favorite must have an id");
          }

          const created = await db.addToFavorites(userId, favorite);
          return { data: created };
        } catch (error) {
          return {
            error: { message: error?.message || "Error adding to favorites" },
          };
        }
      },
      invalidatesTags: (result, error, { userId }) => [
        { type: "Favorites", id: userId },
      ],
    }),

    removeFavorite: builder.mutation({
      async queryFn({ userId, productId }) {
        try {
          if (!productId) {
            throw new Error("Product ID is required");
          }

          const removed = await db.removeFromFavorites(userId, productId);
          return { data: removed };
        } catch (error) {
          return {
            error: {
              message: error?.message || "Error removing from favorites",
            },
          };
        }
      },
      invalidatesTags: (result, error, { userId }) => [
        { type: "Favorites", id: userId },
      ],
    }),

    toggleFavorite: builder.mutation({
      async queryFn({ userId, favorite }) {
        try {
          if (!favorite?.id) {
            throw new Error("Favorite must have an id");
          }

          const currentFavorites = await db.getFavoritesByUserId(userId);

          const isFavorite = favorite.id in currentFavorites;

          if (isFavorite) {
            await db.removeFromFavorites(userId, favorite.id);
            return { data: { added: false, productId: favorite.id } };
          } else {
            await db.addToFavorites(userId, favorite);
            return { data: { added: true, productId: favorite.id } };
          }
        } catch (error) {
          return {
            error: { message: error?.message || "Error toggling favorite" },
          };
        }
      },
      invalidatesTags: (result, error, { userId }) => [
        { type: "Favorites", id: userId },
      ],
    }),
  }),
});

export const {
  useGetUserFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useToggleFavoriteMutation,
} = favoritesApi;
