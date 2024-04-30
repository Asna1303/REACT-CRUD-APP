import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name :"users",
    initialState :userList ,
    reducers:{
        addUser: (state,action)=> {
           state.push(action.payload);
        },
        updateUser:(state,action)=>{

        }


    }

})
export const {addUser,udateUser} = userSlice.actions;
export default userSlice.reducer;