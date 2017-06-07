import React, { Component } from 'react';
import AddTodoFormTwo from './AddTodoFormTwo';

class TodoListTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []}
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos];
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = todo;
    this.setState({todos});
  }

  render() {
    var todos=Array.from(this.state.todos);
    return (
      <div>
        <AddTodoFormTwo addTodo={this.addTodo} />
        <ul>
          {todos.map((todo) =>
            <li>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoListTwo;
