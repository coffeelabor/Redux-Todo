export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const addNewtodo = newTodo => {
  return {
    type: newTodo,
    payload: newTodo
  };
};
