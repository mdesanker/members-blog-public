import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Timed error thunk
export const timedError = (error) => (dispatch) => {
  const id = uuidv4();
  dispatch(setAlert({ ...error, id: id }));

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, 5000);
};

const initialState = [];

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.push(action.payload);
    },
    removeAlert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { setAlert, removeAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
