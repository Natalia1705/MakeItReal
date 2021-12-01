import { createStore } from "redux";
const defaulState = { counter: 0 };

const counterReducer = (state = defaulState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "reset") {
    return {
      counter: 0,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
