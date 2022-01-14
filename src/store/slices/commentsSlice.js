import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedError } from "./alertSlice";

// Fetch comments by post id
export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchByPostId",
  async ({ id }, thunKAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/comment/post/${id}`
      );
      console.log(res.data);
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          thunKAPI.dispatch(timedError(error));
        });
      }
      return thunKAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = [];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

// export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
