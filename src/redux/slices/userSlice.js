import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../services";
import {createBrowserHistory} from "history";

const initialState = {
    user: [],
    users: [],
    total_pages: null,
    userStatistic: null,

};

const getMe = createAsyncThunk(
    'userSlice/getMe',
    async (_, {rejectWithValue}) => {
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
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getUserStatistic = createAsyncThunk(
    "userSlice/getUserStatistic",
    async (_, { rejectWithValue, getState }) => {
        try {

                const { data } = await usersService.getOrderStatistics();
                return data;

            }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const banUser = createAsyncThunk(
    "userSlice/banUser",
    async (id, { rejectWithValue, getState }) => {
        try {

            const { data } = await usersService.banUser(id);
            return data;

        }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const unbanUser = createAsyncThunk(
    "userSlice/unbanUser",
    async (id, { rejectWithValue, getState }) => {
        try {

            const { data } = await usersService.unbanUser(id);
            return data;

        }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const createUser = createAsyncThunk(
    "userSlice/createUser",
    async (user, { rejectWithValue}) => {
        try {

            const { data } = await usersService.createUser(user);
            return data;

        }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);




const activateUser = createAsyncThunk(
    "userSlice/activateUser",
    async ({token, password}, { rejectWithValue}) => {
        try {
            const { data } = await usersService.activateUser(token, password);
            return data;
        }
        catch (e) {

            return rejectWithValue(e.response.data);
        }
    }
);





const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
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
            .addCase(getUserStatistic.fulfilled, (state, action) => {
                state.userStatistic = action.payload.statistics;
            })
            .addCase(banUser.fulfilled, (state, action) => {
                const user = state.users.find(user => user.id === action.payload.id);
                user.is_active = action.payload.is_active;
            })
            .addCase(unbanUser.fulfilled, (state, action) => {
                const user = state.users.find(user => user.id === action.payload.id);
                user.is_active = action.payload.is_active;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.unshift(action.payload)
            })
            .addCase(activateUser.fulfilled, (state, action) => {
                const history = createBrowserHistory();
                history.replace("/login");
            })
            .addCase(activateUser.rejected, (state, action) => {
                state.error = action.payload;
            })


});

const {reducer: userReducer,} = userSlice;

const userActions = {
    getMe,
    getAllUsers,
    getUserStatistic,
    banUser,
    unbanUser,
    createUser,
    activateUser
};

export {
    userActions,
    userReducer
};