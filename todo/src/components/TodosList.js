import React from "react";
import { connect } from "react-redux";

import { addNewTodo } from "../actions/index";

class TodosList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default TodosList;
