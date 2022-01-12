import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async ({ username, password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, password });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user",
        body,
        config
      );
      console.log(res.data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (err) {
      console.error(err.response.data);
      return thunkAPI.rejectWithValue(err.res.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ username, password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, password });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        body,
        config
      );
      console.log(res.data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (err) {
      console.error(err.message);
      thunkAPI.rejectWithValue(err.res.data);
    }
  }
);

const initialState = {
  user: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducers
  },
  extraReducers: {
    // Extra reducers
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
