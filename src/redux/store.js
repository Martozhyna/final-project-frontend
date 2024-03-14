import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {orderReducer} from "./slices";
import {groupReducer} from "./slices";
import {userReducer} from "./slices";

const rootReducer = combineReducers({
    order: orderReducer,
    group: groupReducer,
    user: userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};