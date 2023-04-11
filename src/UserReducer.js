import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "./MOCK_DATA.json"

const userSlice = createSlice({
    name: "user",
    initialState: MOCK_DATA,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => { 
            state.splice(action.payload, 1)
        },
        updateUser: (state, action) => {
            const {id, e_firstName, e_lastName, e_gender, e_phone, e_date, e_email} = action.payload
            const user = state.find(user => user.id === id)
            // console.log(user);
            if(user){
                user.id = id;
                user.e_firstName = e_firstName;
                user.e_lastName = e_lastName;
                user.e_gender = e_gender;
                user.e_phone = e_phone;
                user.e_date = e_date;
                user.e_email = e_email;  
            }
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer