import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }

  updateInput = (e) => {
    this.setState({input: e.target.value});
  }

  updateTodos = (item) => {
    var todos = this.state.todos;
    todos.push(item);
    this.setState({todos: todos});
  }

  render() {
    var todos = this.state.todos;
    var todoItem = todos.map((todo) => <li>{todo}</li>)

    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <input type="button" value="+" onClick={this.updateTodos} />
        </form>
        <ul>{todoItem}</ul>
      </div>
    );
  }
}

export default TodoList;
