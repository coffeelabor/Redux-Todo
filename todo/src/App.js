import React from "react";

import TodoContainer from "./components/TodoContainer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoContainer />
    </div>
  );
};

export default App;
