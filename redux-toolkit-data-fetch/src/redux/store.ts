import { configureStore } from "@reduxjs/toolkit";
import { personSliceReducer } from "./reducers/personSlice";

const store = configureStore({
    reducer: {
        // add reducers here
        allPersons: personSliceReducer
    }
})

export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store