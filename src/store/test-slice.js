import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myNum: 0
}

const testSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        increaseNumber(state) {
            state.myNum+= 1;
        }
    }
});

export const testReducer = testSlice.reducer;
export const testActions = testSlice.actions;