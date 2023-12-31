import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
})