import { legacy_createStore as createStore } from "redux";

const commonReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(commonReducer);
export default store;
