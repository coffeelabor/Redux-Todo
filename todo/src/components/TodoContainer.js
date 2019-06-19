import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodosList";

const TodoContainer = () => {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoContainer;
