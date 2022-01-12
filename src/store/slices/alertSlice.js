import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
    removeAlert: (state, action) => {
      state.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { setAlert, removeAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
