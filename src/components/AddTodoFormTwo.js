import React, { Component } from 'react';

class AddTodoFormTwo extends Component {
  onInputSubmit = (e) => {
    e.preventDefault();
    const todo = {content: this.content.value};
    this.props.addTodo(todo);
    this.InputForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.InputForm = input} onSubmit={this.onInputSubmit}>
        <input
          type="text"
          ref={(input) => this.content=input}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

export default AddTodoFormTwo;
