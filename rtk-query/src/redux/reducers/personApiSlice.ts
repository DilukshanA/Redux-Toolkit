import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person } from "../../types/Peron";

export const personApiSlice = createApi({
    reducerPath: "personApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),
    endpoints: (builder) => ({
        getAllPersons: builder.query<Person[], void>({
            query: () => ({
                url: "/all-persons",
                method: "GET"
            })
        }),
        getPersonById: builder.query({
            query: (id: string) => ({
                url: `/person/${id}`,
                method: "GET"
            })
        })
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPersonsQuery, useGetPersonByIdQuery } = personApiSlice;