import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// [Step 1] Use Default Redux
// 
// const ADD = "ADD";
// const DELETE = "DELETE";
// const addTodo = text => {
//     return {
//         type: ADD,
//         text
//     }
// }
// const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id
//     }
// }
//
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addTodo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteTodo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// [Step 2] Use createAction(), createReducer
// const addTodo = createAction("ADD");;
// const deleteTodo = createAction("DELETE");
// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() })
//     },
//     [deleteTodo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
// })
// 
// export const actionCreators = {
//     addTodo,
//     deleteTodo,
// }


const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) =>
            state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({ reducer: toDos.reducer });

export const {
    add, remove
} = toDos.actions;

export default store;