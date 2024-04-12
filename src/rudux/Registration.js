import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    user: {},
};

export const getUser = createAsyncThunk(
    'registration/get-user',
    async (thunkAPI) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            const data = await response.json();
            return data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const RegistrationSlice = createSlice({
    name:'user/registration',
    initialState: initState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
            .addCase(getUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                state.user = payload;
            })
            .addCase(getUser.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = payload.error;
            })
    }
});

export default RegistrationSlice.reducer;