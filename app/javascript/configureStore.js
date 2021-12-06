import { createStore } from "redux";

const initialState = {
  greetings: [
    {
      id: 1,
      text: "Hello"
    },
    {
      id: 2,
      text: "World"
    }
  ]
}

function rootReducer(state = initialState, action) {
  console.log(action.type, 'TEST');
  switch (action.type) {
    default:
      return state;
  }
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}