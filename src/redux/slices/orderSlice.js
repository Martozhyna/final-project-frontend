import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ordersService} from "../../services";

const initialState = {
    orders:[],
    total_pages: null,
    page: 1,
    ordering: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'orderSlice/getAll',
    async ({page, ordering}, {rejectWithValue}) => {
        try {
            const {data} = await ordersService.getAll(page, ordering);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {total_pages, offset, page, results, ordering} = action.payload
                state.orders = results;
                state.page = page;
                state.offset = offset;
                state.total_pages = total_pages;
                state.ordering = ordering
                state.loading = false;
            })

            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })

            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
});

const {reducer:orderReducer, actions:{getOrdering}} = orderSlice;

const orderActions = {
    getAll,
    getOrdering
};

export {
    orderReducer,
    orderActions
};