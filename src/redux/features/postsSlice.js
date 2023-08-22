import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_url = "https://jsonplaceholder.typicode.com/posts";
export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  try {
    const response = await axios.get(Base_url);
    return [...response.data];
  } catch (e) {
    return e.message;
  }
});
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(Base_url, initialPost);
      return response.data;
    } catch (e) {
      return e.message;
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: false,
  },

  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.status = false;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.status = true;
      state.posts = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = false;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

const postReducer = postsSlice.reducer;
export default postReducer;
