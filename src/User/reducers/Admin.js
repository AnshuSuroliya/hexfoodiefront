import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const displayMenuItems=createAsyncThunk("displayMenuItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/displaymenu",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
const adminSlice=createSlice({
    name:"adminSlice",
    initialState:{
        menu:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(displayMenuItems.pending,(state)=>{
                state.isLoading=true;
         })
         .addCase(displayMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.menu=action.payload;
         })
         .addCase(displayMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
         })
        
       
    }
})
export default adminSlice.reducer;