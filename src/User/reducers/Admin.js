import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const addMenuItems=createAsyncThunk("addMenuItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/addfooditem",{
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
        addItemData:[],
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
         .addCase(addMenuItems.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.addItemData=action.payload;
        })
        .addCase(addMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
       
    }
})
export default adminSlice.reducer;