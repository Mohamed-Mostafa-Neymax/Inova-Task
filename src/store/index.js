import { configureStore } from "@reduxjs/toolkit";

import { uiReducer } from "./ui-slice";
import { testReducer } from "./test-slice";

const store = configureStore({
    reducer: {
        uiReducer,
        testReducer
    }
});

export default store;