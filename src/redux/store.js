import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {orderReducer} from "./slices";
import {groupReducer} from "./slices";

const rootReducer = combineReducers({
    order: orderReducer,
    group: groupReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};