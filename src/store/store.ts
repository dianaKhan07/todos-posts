import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { postSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [postSlice.name]: postSlice.reducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
