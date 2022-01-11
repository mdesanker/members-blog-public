import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
});

export const {} = postSlice.actions;

export default postSlice.reducer;

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ username, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, password });

    try {
      const res = await axios.get(
        "http://localhost:5000/api/post/all",
        body,
        config
      );
    } catch (err) {}
  }
);
