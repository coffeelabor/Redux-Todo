import React from "react";
import { connect } from "react-redux";

import { addNewTodo } from "../actions/index";

class TodoList extends React.Component {
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
    //   console.log(props.todos)
    return (
      <div>
        <h1>Test</h1>
        {this.props.todos.map(todo => {
          return <div>{todo.value}</div>;
        })}
        <input
          type="text"
          value={this.state.addTodo}
          onChange={this.handleChanges}
          placeholder="Add New member"
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo }
)(TodoList);
