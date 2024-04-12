import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './rudux';

export const store = configureStore({
    reducer: rootReducer,
});