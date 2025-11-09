import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { DbOperations } from "./api/DbOperations";

const db = new DbOperations("dreams");

export const dreamsApi = createApi({
  reducerPath: "dreamsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Dreams"],
  endpoints: (builder) => ({
    getAllDreams: builder.query({
      async queryFn() {
        try {
          const data = await db.getAll();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Dreams"],
    }),

    getDreamsPagination: builder.query({
      async queryFn({
        page = 1,
        perPage = 5,
        cursors = [],
        filters = {},
        sortOrder = "",
      }) {
        try {
          const { data, cursor, hasMore } = await db.getAllPaginated({
            page,
            perPage,
            cursors,
            filters,
            sortOrder,
          });
          return { data: { data, cursor, hasMore } };
        } catch (error) {
          return { error: { status: 500, message: error.message } };
        }
      },
      providesTags: ["Dreams"],
    }),

    getDreamById: builder.query({
      async queryFn(id) {
        try {
          const data = await db.getById(id);
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, id) => [{ type: "Dreams", id }],
    }),

    detaileDream: builder.query({
      async queryFn(id) {
        try {
          const data = await db.detail(id);
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, id) => [{ type: "Dreams", id }],
    }),

    addNewDream: builder.mutation({
      async queryFn(newDream) {
        try {
          const data = await db.add(newDream);
          return { data };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dreams"],
    }),

    updateDream: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data);
          return { data: { id, ...data } };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Dreams", id },
        "Dreams",
      ],
    }),

    deleteDream: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dreams"],
    }),
  }),
});

export const {
  useGetAllDreamsQuery,
  useGetDreamsPaginationQuery,
  useGetDreamByIdQuery,
  useAddNewDreamMutation,
  useUpdateDreamMutation,
  useDeleteDreamMutation,
  useDetaileDreamQuery,
} = dreamsApi;
