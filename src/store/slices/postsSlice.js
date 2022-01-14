import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedError } from "./alertSlice";

// Fetch all posts
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

// Fetch post by id
export const fetchPostById = createAsyncThunk(
  "post/fetchById",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/post/${id}`);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedError(error)));
      }
      return thunkAPI.rejectWithValue(err.response.data);
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
    builder.addCase(fetchAllPosts.rejected, (state, actions) => {
      state.posts = [];
    });
    builder.addCase(fetchPostById.fulfilled, (state, actions) => {
      state.post = actions.payload;
    });
    builder.addCase(fetchPostById.rejected, (state, actions) => {
      state.post = null;
    });
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;
