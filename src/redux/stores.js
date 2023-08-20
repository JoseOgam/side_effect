import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./features/usersSlice";
import postReducer from "./features/postsSlice";

const store = configureStore({
  reducer: {
    users: usersReducers,
    posts: postReducer,
  },
});

export default store;
