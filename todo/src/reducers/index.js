import { ADD_NEW_TODO } from "../actions/index";

const initialState = {
  todos: [
    { id: 1, task: "sleep", taskStatus: false },
    { id: 2, task: "eat", taskStatus: false }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = {
        id: state.todos[state.todos.length - 1].id + 1,
        task: action.payload,
        taskStatus: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};

export default todoReducer;
