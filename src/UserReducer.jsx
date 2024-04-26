import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name :"users",
    initialState :userList ,
    reducers:{
        addUser: (sate,action)=> {
            console.log(action);
        }


    }

})
export const {addUser} = userSlice.actions;
export default userSlice.reducer;