import { createSlice } from "@reduxjs/toolkit";
import concat from "lodash/concat";
import filter from "lodash/filter";
import map from "lodash/map"

const initialState = {
    collection: [],
};

const slice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: () => initialState,
        add: (state, action) => {
            const {todo} = action.payload;
            state.collection = concat(state.collection, todo)
        },
        remove: (state, action) => {
            const {todo} = action.payload;
            state.collection = filter(state.collection, item => item.id !== todo.id)
        },
        clear: (state, action) => {
            state.collection = filter(state.collection, todo => !todo.complete)
        },
        show: (state, action) => {

        },
        toggle: (state, action) => {
            const {todo} = action.payload;
            state.collection = map(state.collection, item => item.id === todo.id?
                { ...item, complete: !item.complete }:{...item })
        },
    },
});


export const { add, remove, clear, toggle, show} = slice.actions;

export default slice.reducer;