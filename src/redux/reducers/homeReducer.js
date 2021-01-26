import { createSlice } from "@reduxjs/toolkit";


export const home = createSlice({
    name: 'home',
    initialState: {
        count: 0,
    },
    reducers: {
        setCount: (state, res) => {
            state.count = res.payload;
        }
    },
});

export const { setCount } = home.actions;

export const getCount = (state) => state.home.count;

export default home.reducer;