import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";
import alertsSlice from "./slices/alertSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    comments: commentsReducer,
    alerts: alertsSlice,
  },
});

export default store;
