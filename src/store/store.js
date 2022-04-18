import { createStore } from "redux";

const initalState = {
  user: {
    id: "",
    name: "",
  },
};
const reducer = (state = initalState, action) => {
  let newState = state;

  switch (action.type) {
    case "LOGIN":
      newState = {
        ...state,
        user: {
          ...state.user,
          id: action.params.id,
          name: action.params.name,
        },
      };
      return newState;
    default:
      return newState;
  }
};
const store = createStore(reducer);

export default store;
