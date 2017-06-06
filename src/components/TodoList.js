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

  onInputSubmit = (input) => {
    var todos = [];
    todos.push(input);
    this.setState({todos: todos});
    input.preventDefault();
  }

  render() {
    var todos=Array.from(this.state.todos);
    const listItem = todos.map((todos) =>
      <li>{todos}</li>
    );
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>{listItem}</ul>
      </div>
    );
  }
}

export default TodoList;
