// redux slice for authentication state management
// Handles user login/logout and role management
// For simplicity, this example uses hardcoded user data and roles.

import { ROLES } from "../../constants/roles";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    role: ROLES.VIEWER,
    isAuthenticated: false
};

const authSlice = createSlice({
    name : " auth",
    initialState,

    reducers: {
        login : (state, action ) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.isAuthenticated = true ;
        },
        logout: (state) => {
            state.user = null;
            state.role = ROLES.VIEWER;
            state.isAuthenticated = false;
          },

          setRole: (state, action) => {
            state.role = action.payload;
          }
    }
})

export const {login, logout, setRole} = authSlice.actions;

export default authSlice.reducer;