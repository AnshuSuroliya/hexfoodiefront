import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const displayRestaurant=createAsyncThunk("displayRestaurant", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/displayRestaurant",{
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
export const displayDefault=createAsyncThunk("displayDefault", async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/display",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
       
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
const superAdminSlice=createSlice({
    name:"superAdminSlice",
    initialState:{
        restaurants:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(displayRestaurant.pending,(state)=>{
                state.isLoading=true;
         })
         .addCase(displayRestaurant.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.restaurants=action.payload;
         })
         .addCase(displayRestaurant.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
         })
         .addCase(displayDefault.pending,(state)=>{
            state.isLoading=true;
     })
     .addCase(displayDefault.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.restaurants=action.payload;
     })
     .addCase(displayDefault.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
     })
       
    }
})
export default superAdminSlice.reducer;