import { configureStore } from "@reduxjs/toolkit";
import { personSliceReducer } from "./reducers/personSlice";
import { personApiSlice } from "./reducers/personApiSlice";

const store = configureStore({
    reducer: {
        persons: personSliceReducer,
        [personApiSlice.reducerPath]: personApiSlice.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling and other features of RTK Query
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            personApiSlice.middleware
        );
    }
});

export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store