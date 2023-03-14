import { createStore } from "redux";
// import { createStore } from "./node_modules/redux/src/createStore";
// import { type } from "./node_modules/redux/index.d";

const store = createStore(reducer);

//reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  return state;
}

//global state
// console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);

// store.dispatch({ type: "increment" });

console.log(store.getState());
