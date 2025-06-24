import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person } from "../../types/Peron";

export const personApiSlice = createApi({
    reducerPath: "personApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),
    tagTypes: ["Person"], // for cache invalidation
    endpoints: (builder) => ({
        getAllPersons: builder.query<Person[], void>({
            query: () => ({
                url: "/all-persons",
                method: "GET"
            }),
            providesTags: (result, error, arg) => (
                result
                    ? [
                        ...result.map((person) => ({ type: "Person" as const, id: person._id })),
                        { type: "Person", id: "LIST" }
                    ]
                    : [{ type: "Person", id: "LIST" }]
            )
        }),
        getPersonById: builder.query<Person, string>({
            query: (id: string) => ({
                url: `/person/${id}`,
                method: "GET"
            }),
            providesTags: (result) => (
                result ? [{ type: "Person", id: result._id }] : []
            )
        })
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPersonsQuery, useGetPersonByIdQuery } = personApiSlice;