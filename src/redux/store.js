import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {orderReducer} from "./slices";

const rootReducer = combineReducers({
    order: orderReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};