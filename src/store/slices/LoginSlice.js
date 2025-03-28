import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: false,
    reducers: {
        setLogin(state, action) {
            return action.payload;
        }
    }
})

export default loginSlice.reducer;

export const { setLogin } = loginSlice.actions;
