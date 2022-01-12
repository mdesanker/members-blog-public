import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create user thunk
export const createUser = createAsyncThunk(
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

      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  }
);

// Login user thunk
export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
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

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.loading = false;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
