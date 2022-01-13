import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { timedError } from "./alertSlice";

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
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedError(error)));
      }
      return thunkAPI.rejectWithValue(err.response.data);
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
        console.log(res.status);
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedError(error)));
      }
      thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const loadUser = createAsyncThunk("user/loadUser", async (thunkAPI) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      "http://localhost:5000/api/user/detail",
      config
    );
    return res.data;
  } catch (err) {
    console.error(err.response.data);
    thunkAPI.rejectWithValue(err.response.data);
  }
});

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducers
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(signupUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(loadUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loadUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
