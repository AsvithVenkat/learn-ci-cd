import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => ({
                url: `get-user/${id}`
            }),
            transformResponse: (response) => {
                console.log(response, 'response')
                if (!response || response.length === 0) {
                    return {data:'No data Found'};
                }

                return response;
            },
        })
    })
})

export const { useGetUserQuery } = userApi;