import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.getElementsByTagName("span");

const ModifierCount = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(ModifierCount);

const onChange = () => {
  console.log(countStore.getState());
  span[0].innerHTML = countStore.getState();
};

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

countStore.subscribe(onChange);

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
