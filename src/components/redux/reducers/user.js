import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    name: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserEmail(state, action) {
            state.email = action.payload
        },
        addUserPassword(state,action) {
            state.password = action.payload
        },
        addUserName(state,action) {
            state.name = action.payload
        }
    }
})

export const {addUserEmail, addUserPassword, addUserName} = userSlice.actions
export default userSlice.reducer