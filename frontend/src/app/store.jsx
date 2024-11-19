import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
