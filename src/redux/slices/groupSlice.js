import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {groupsService} from "../../services";

const initialState = {
    groups: [],
    errors: null,
    loading: null,
    total_pages: 0,
    previousPageGroups: null,
    nextPageGroups: null,
};

const getAll = createAsyncThunk(
    'groupSlice/getAll',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await groupsService.getAll(page);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createGroup = createAsyncThunk(
    'groupSlice/createComment',
    async ({group}, thunkAPI) => {
        try {
            const {data} = await groupsService.create(group);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const groupSlice = createSlice({
    name: 'groupSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.groups = action.payload
                state.total_pages = action.payload.total_pages;
                state.previousPageGroups = action.payload.prev;
                state.nextPageGroups = action.payload.next;
                state.loadingGroups = false;
            })

            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })

            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
});

const {reducer: groupReducer} = groupSlice;

const groupAction = {
    getAll,
    createGroup
};



export {
    groupReducer,
    groupAction
};