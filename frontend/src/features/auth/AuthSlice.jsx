import { AuthService } from "./AuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const userregister = createAsyncThunk("register", async (data) => {
  try {
    return await AuthService.register(data);
  } catch (error) {
    throw new error();
  }
});

export const reset = createAction("reset");

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  ismessage: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //register
      .addCase(userregister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userregister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.success;
        state.isError = false;
        state.ismessage = action.payload.message;
        state.isstatus_code = action.payload.status_code;
        state.register = action.payload.data;

        // Object.assign(state, initialState);
        // state = AuthSlice.reducer(state, reset());
        // state.RegisteredData = action.payload.data;
      })
      .addCase(userregister.rejected, (state, action) => {
        state.isError = true;
        state.ismessage = action.payload.message;
      });
  },
});

export const { resetState } = AuthSlice.actions;
export default AuthSlice.reducer;
