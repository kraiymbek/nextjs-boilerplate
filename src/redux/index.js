import { configureStore } from "@reduxjs/toolkit";

import home from './reducers/homeReducer';

export default configureStore({
    reducer: {
        home,
    },
});