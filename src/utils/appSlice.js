import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu: (state) =>{            //to collapse side bar on hamburger action in homepage(Body"/")
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{             //to collapse the sidebar in watchpage
            state.isMenuOpen=false;     
        }
    }
});
export const{toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;