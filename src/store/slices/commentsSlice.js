import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedError } from "./alertSlice";

// Fetch comments by post id
export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchByPostId",
  async ({ id }, thunKAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/comment/post/${id}`
      );
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          thunKAPI.dispatch(timedError(error));
        });
      }
      return thunKAPI.rejectWithValue(err.response.data);
    }
  }
);

// Create comment for post form user
export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ content, post }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ content, post });

    try {
      console.log(content);
      const res = await axios.post(
        "http://localhost:5000/api/comment/create",
        body,
        config
      );
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => {
          return thunkAPI.dispatch(timedError(error));
        });
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// Delete comment by Id
export const deleteCommentById = createAsyncThunk(
  "comment/deleteById",
  async ({ id }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ id }),
    };

    try {
      console.log("DELETING COMMENT");
      const res = await axios.delete(
        "http://localhost:5000/api/comment/delete",
        config
      );
      console.log("DELETE");
      console.log(res.data);
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          return thunkAPI.dispatch(timedError(error));
        });
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  comments: [],
  commentCount: 0,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByPostId.fulfilled, (state, actions) => {
      state.comments = actions.payload;
      state.commentCount = actions.payload.length;
    });
    builder.addCase(fetchCommentsByPostId.rejected, (state, actions) => {
      state.comments = [];
      state.commentCount = 0;
    });
    builder.addCase(createComment.fulfilled, (state, actions) => {
      state.comments.push(actions.payload);
      state.commentCount++;
    });
  },
});

// export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
