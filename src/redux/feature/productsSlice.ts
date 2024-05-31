// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RawDataProducts } from '../../types/products/product'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ["products"],
  endpoints: (builder) => ({

    getAllProducts : builder.query<RawDataProducts, string>({
      query: () => `products`,
      providesTags:["products"]
    }),
    
    /*
    createNewPost : builder.mutation({
      query: (dataToPost) => ({
        url: 'posts',
        method: 'POST',
        body: dataToPost
      }),
      invalidatesTags: ["posts"]
    }),

    deletePost : builder.mutation({
      query: (deleteId) => ({
        url: `posts/${deleteId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["posts"]
    }),

    getPost: builder.query({
      query(id) {
        return {
          url: `/posts/${id}`,
          credentials: 'include',
        };
      },
      providesTags: (result, error, id) => [{ type: 'posts', id }],
    }),
    */

 

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, 
    //useCreateNewPostMutation, useDeletePostMutation, useGetPostQuery 
} = productsApi