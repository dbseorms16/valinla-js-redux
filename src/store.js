import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== parseInt(action.payload));
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) =>
    state.filter((todo) => todo.id !== parseInt(action.payload)),
});

export const actionCreater = {
  addTodo,
  deleteTodo,
};

const store = createStore(reducer);

export default store;
