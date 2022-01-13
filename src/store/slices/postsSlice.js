import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedError } from "./alertSlice";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:5000/api/post/all");
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedError(error)));
      }
      return thunkAPI.rejectWithValue(err.data.response);
    }
  }
);

const initialState = {
  posts: [],
  post: null,
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, actions) => {
      state.posts = actions.payload;
    });
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;
