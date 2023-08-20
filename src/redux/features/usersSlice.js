import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(url);
    return [...response.data];
  } catch (e) {
    return e.message;
  }
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
