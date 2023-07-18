import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    acccessToken: '',
    isLoading: false,
    currentUser: null,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const {} = userSlice.actions

export default userSlice.reducer