import { createStore } from "redux";
// import { createStore } from "./node_modules/redux/src/createStore";

const store = createStore(reducer);

function reducer(state = { amount: 1 }, action) {
  return state;
}

//global state
console.log(store.getState());
