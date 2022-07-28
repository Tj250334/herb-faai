// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export interface Post {
  id: number;
  name: string;
  geography: string;
  habitat: string;
  morphology: string;
  traditional_use: string;
  part_used: string;
}
export interface PostAdd {
  name: string;
  geography: string;
  habitat: string;
  morphology: string;
  traditional_use: string;
  part_used: string;
}
export interface herbImage {
  id: number;
  herb_id: number;
  image: string;
}

type PostsResponse = Post[];

export const postApi = createApi({
  reducerPath: "postsApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://thaiherb.thddns.net:4661" }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({

    getPosts: build.query<Post[], void>({
      query: () => "/herbs",
      // Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Posts", id } as const)),
              { type: "Posts", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Posts", id: "LIST" }],
    }),

    getPost: build.query<Post[], number>({
      query: (id) => `/herb/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),

    addPost: build.mutation<PostAdd, Partial<PostAdd>>({
      query(body) {
        return {
          url: `/herb`,
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),

    updatePost: build.mutation<Post, Partial<Post>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/herb`,
          method: "PUT",
          body: data,
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
    }),

    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/herb/${id}`,
          method: "DELETE",
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),

    addHerbImg: build.mutation<{}, FormData>({
      query(body) {
        return {
          url: `/upload`,
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),

    getHerbImg: build.query<herbImage[], number>({
      query: (id) => `/img/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),

  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddHerbImgMutation,
  useGetHerbImgQuery,
} = postApi;
