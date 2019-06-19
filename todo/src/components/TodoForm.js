import React, { Component } from "react";
import { addNewTodo } from "../actions/index";
import { connect } from "react-redux";

class TodoForm extends Component {
  state = {
    newTodo: ""
  };
  handleChanges = e => {
    // this.setState({ newTodo: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            name="newTodo"
            type="text"
            value={this.state.addTodo}
            onChange={this.handleChanges}
            placeholder="Add New member"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addNewTodo }
)(TodoForm);
