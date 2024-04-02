import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    user:[],
    users: [],
    total_pages: null

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

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll(page);
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
            .addCase(getAllUsers.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.users = results
                state.total_pages = total_pages
            })

});

const {reducer:userReducer, } = userSlice;

const userActions = {
    getMe,
    getAllUsers
};

export {
    userActions,
    userReducer
};