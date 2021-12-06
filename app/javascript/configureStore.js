import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const initialState = {
  greetings: [
    {
      id: 1,
      name: "Hello"
    },
    {
      id: 2,
      name: "World"
    }
  ]
}

function rootReducer(state = initialState, action) {
  console.log(action.type, 'TEST');
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      console.log(action.json);
      return { greetings: action.json.greetings };
    default:
      return state;
  }
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}