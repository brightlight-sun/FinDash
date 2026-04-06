// main Redux store configuration for the application
// combines auth and transactions reducers and sets up the store using Redux Toolkit's configureStore function
// this file is imported in index.js to provide the store to the entire app using the Provider component from react-redux
// also allows for easy addition of new reducers in the future as the app grows

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer
  }
});