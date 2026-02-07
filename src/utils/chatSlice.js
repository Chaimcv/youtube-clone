import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);           //after 10 msg it will remove 1 msg from top
            state.messages.push(action.payload);               //to make the new msg appear from bottom
        },
    },
});
export const { addMessage }=chatSlice.actions;
export default chatSlice.reducer;