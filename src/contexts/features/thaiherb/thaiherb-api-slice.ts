import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Herb {
  id: number;
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

export const herbApi = createApi({
  reducerPath: "herbsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://thaiherb.thddns.net:4661" }),
  tagTypes: ["Herbs"],
  endpoints: (build) => ({

    getHerbs: build.query<Herb[], void>({
      query: () => "/herbs",
      providesTags: ["Herbs"],
    }),

    getHerb: build.query<Herb[], number>({
      query: (id) => `/herb/${id}`,
      providesTags: ["Herbs"],
    }),

    //herb name can't be optional
    addHerb: build.mutation<void, Partial<Herb>>({
      query: (body) => ({
        url: "/herb",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Herbs"]
    }),

    updateHerb: build.mutation<void, Partial<Herb>>({
      query: (data) => ({
        url: "/herb",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Herbs"],
    }),

    deleteHerb: build.mutation<void, number>({
      query: (id) => ({
        url: `/herb/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Herbs"],
    }),

    addHerbImg: build.mutation<{}, FormData>({
      query: (body) => ({
        url: "/upload",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Herbs"]
    }),

    addTestData: build.mutation<{}, FormData>({
      query: (body) => ({
        url: "/test",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Herbs"]
    }),

    getHerbImg: build.query<herbImage[], number>({
      query: (id) => `/img/${id}`,
      providesTags: ["Herbs"],
    }),

    deleteHerbImg: build.mutation<void, herbImage>({
      query: ({id, ...body}) => ({
        url: `/image-delete/${id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Herbs"],
    }),

  }),
});

export const {
  useGetHerbQuery,
  useGetHerbsQuery,
  useAddHerbMutation,
  useUpdateHerbMutation,
  useDeleteHerbMutation,
  useAddHerbImgMutation,
  useGetHerbImgQuery,
  useDeleteHerbImgMutation,
  useAddTestDataMutation,
} = herbApi;
