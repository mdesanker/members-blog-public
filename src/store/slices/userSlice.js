import { createSlice } from "@reduxjs/toolkit";

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
