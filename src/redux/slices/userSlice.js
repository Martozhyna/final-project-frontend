import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    user:[],

};

const getMe = createAsyncThunk(
    'userSlice/getMe',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await usersService.getMe();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {


    },
    extraReducers: builder =>
        builder
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload
            })

});

const {reducer:userReducer, } = userSlice;

const userActions = {
    getMe,
};

export {
    userActions,
    userReducer
};