import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";

const todoModifier = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case TODO_DELETE:
      const newState = state.filter((item) => {
        return item.id !== action.id;
      });
      return newState;
    default:
      return state;
  }
};

const todoStore = createStore(todoModifier);

const addTodo = (text) => {
  return { type: TODO_ADD, text };
};

const deleteTodo = (id) => {
  return { type: TODO_ADD, id };
};

const paintTodo = () => {
  ul.innerHTML = "";
  const todos = todoStore.getState();
  todos.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.innerHTML = item.text;
    li.id = item.id;
    btn.innerHTML = "del";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
};

const dispatchAddTodo = (text) => {
  todoStore.dispatch(addTodo(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  dispatchAddTodo(input.value);
  input.value = "";
};

todoStore.subscribe(paintTodo);

form.addEventListener("submit", onSubmit);
