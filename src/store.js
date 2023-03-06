import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.slice";
import languageReducer from "./slice/language.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
  },
});

export default store;
