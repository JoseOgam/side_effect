import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return fetch(url, { method: "GET" }).then((res) => res.json());
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = true;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const usersReducers = usersSlice.reducer;
export default usersReducers;
