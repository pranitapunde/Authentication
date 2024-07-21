import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./athService";

const userExist = JSON.parse(localStorage.getItem('user'))

const initialState ={
    user : userExist ? userExist: null,
    isLoading:false,
    isSuccess: true,
    isError : false,
    message: "",
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending , (state) => {
            state.isLoading = true
            state.isError = false
            state.message = ""
        })
        .addCase(registerUser.fulfilled,(state,action)=> {
            state.isSuccess = true
            state.isLoading = false
            state.user = action.payload
        })
        .addCase(registerUser.rejected,(state,action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
        })

        // login 

        .addCase(loginUser.pending ,(state) => {
            state.isLoading = true
            state.isError = false
            state.message = ""
        })
        .addCase(loginUser.fulfilled,(state,action)=> {
            state.isSuccess = true
            state.isLoading = false
            state.user = action.payload
        })
        .addCase(loginUser.rejected,(state,action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
        })

        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        })


    },

})

export default authSlice.reducer

//  register user

 export const registerUser = createAsyncThunk("REGISTER/USER", async(formData,thunkAPI) => {
  try {

    return await authService.register(formData)
  } catch (error) {

  const message = error.response.data.message;
  return thunkAPI.rejectWithValue(message)
  }
})

// login user

 export const loginUser = createAsyncThunk("LOGIN/USER" , async(formDatalogin , thunkAPI) => {
  try {
    return await authService.login(formDatalogin)
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message)
    
  }
})

 export const logoutUser = createAsyncThunk("LOGOUT/USER" ,async() => {
    localStorage.removeItem('user')
})