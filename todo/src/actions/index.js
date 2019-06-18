export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const addNewTodo = newTodo => {
  return {
    type: newTodo,
    payload: newTodo
  };
};
