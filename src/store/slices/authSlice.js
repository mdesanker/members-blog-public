import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create user thunk
export const createUserPost = createAsyncThunk(
  "user/createUser",
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
      console.error(err.response.data);
    }
  }
);

// Login user thunk
export const loginUserPost = createAsyncThunk(
  "user/loginUser",
  async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(user);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        body,
        config
      );

      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
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
