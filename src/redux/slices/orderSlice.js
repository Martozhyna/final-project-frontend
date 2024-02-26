import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ordersService} from "../../services";

const initialState = {
    orders:[],
    total_pages: null,
    page: 1,
    ordering: null,
    comments: [],

    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'orderSlice/getAll',
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await ordersService.getAll(params);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getAllComments = createAsyncThunk(
    'orderSlice/getAllComments',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await ordersService.getAllCommentsByOrder(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createComment = createAsyncThunk(
    'orderSlice/createComment',
    async ({id, comment}, thunkAPI) => {
        try {
            const {data} = await ordersService.setComments(id, comment);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
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
                // state.page = page;
                state.offset = offset;
                state.total_pages = total_pages;
                // state.ordering = ordering
                state.loading = false;
            })

            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })

            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllComments.fulfilled,(state, action) => {
                const {comments} = action.payload
                state.comments = comments;
            })
            .addCase(createComment.fulfilled,(state, action) => {
                state.orders = state.orders.map((order) => {
                    if (order.id === action.payload.order_id){
                        return {
                            ...order,
                            status: 'In work',
                            manager: action.payload.order
                        };

                    }
                    return order
                })
            })
            .addCase(createComment.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {reducer:orderReducer, actions:{getOrdering}} = orderSlice;

const orderActions = {
    getAll,
    getOrdering,
    createComment,
    getAllComments
};

export {
    orderReducer,
    orderActions
};