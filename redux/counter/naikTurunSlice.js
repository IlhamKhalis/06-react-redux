import { createSlice } from "@reduxjs/toolkit";

export const naikTurunSlice = createSlice({
    name: 'CounterNaikTurun',
    initialState:{
        totalCounter: 0
    },
    reducers: {
        tambahCounter(state) {
            state.totalCounter += 1;
        },
        kurangCounter(state) {
            state.totalCounter -= 1;
        }
    },
});

export const { tambahCounter, kurangCounter } = naikTurunSlice.actions;
export default naikTurunSlice.reducer;