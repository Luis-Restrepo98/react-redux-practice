import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

const rootReducer = {
    counter: counterSlice
}

const store = configureStore({
    reducer: rootReducer
})

export default store;