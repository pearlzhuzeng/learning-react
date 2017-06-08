/**
 * @providesModule TodoListThree
 * @flow
 */

import React from 'react'

import { append, remove } from 'ramda'

type Item = {
  content: string,
  completed: boolean,
}

class TodoListThree extends React.Component {
  state: { content: string, todos: Item[] } = {
    content: '',
    todos: [],
  }

  handleChange = (e: SyntheticInputEvent) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    // const todos = [...this.state.todos, this.state.content]
    const todos = append(this.state.content, this.state.todos)
    this.setState({ content: '', todos })
  }

  handleDelete = (i: number) => {
    const todos = remove(i, 1, this.state.todos)
    this.setState({ todos })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>My Todo List</h3>
          <input
            value={this.state.content}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">+</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) =>
            <li key={todo}>
              {todo} <button onClick={() => this.handleDelete(i)}>[x]</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoListThree
