import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";
import alertsSlice from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    comments: commentsReducer,
    alerts: alertsSlice,
  },
});

export default store;
