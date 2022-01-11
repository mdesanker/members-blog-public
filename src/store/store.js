import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    comments: commentsReducer,
  },
});

export default store;
