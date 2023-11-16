import {createSlice} from "@reduxjs/toolkit"

const initialValue = {
    counter: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
})

export default counterSlice.reducer;

export const {increment, decrement} = counterSlice.actions;