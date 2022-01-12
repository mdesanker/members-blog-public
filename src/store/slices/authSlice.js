import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// // Fetch all posts thunk
export const fetchAllPosts = createAsyncThunk("posts/getAll", async () => {
  try {
    console.log("fetching");
    const res = await axios.get("http://localhost:5000/api/post/all");
    console.log(res.data);
  } catch (err) {
    console.error(err.message);
  }
});

// Fetch user thunk
export const createUserPost = createAsyncThunk(
  "users/createUserPost",
  async (newUser) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(newUser);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/",
        body,
        config
      );

      console.log(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }
);

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
