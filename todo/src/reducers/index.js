import { ADD_NEW_TODO } from "../actions/index";

const initialState = {
  todos: [
    { task: "sleep", taskStatus: false },
    { task: "eat", taskStatus: false }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { task: action.payload, taskStatus: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};

export default todoReducer;
