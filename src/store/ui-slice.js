import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: 'Ui Slice'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changeText(state) {
            state.text = 'The good slice';
        }
    }
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;