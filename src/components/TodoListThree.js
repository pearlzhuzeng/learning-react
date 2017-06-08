/**
 * @providesModule TodoListThree
 * @flow
 */

import React from 'react'

import { append, remove, update } from 'ramda'

type Item = {
  content: string,
  completed: boolean,
}

class TodoListThree extends React.Component {
  state: { todos: Item[] } = {
    content: '',
    completed: false,
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

  handleUpdate = (i: number, updatedcontent: string) => {
    const todos = update(i, updatedcontent, this.state.todos)
    this.setState({ content: '', todos })
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
              <input
                type="checkbox"
                checked={this.state.completed}
                onChange={!this.state.completed}
              />
              {' '}{todo}
              {/* {this.state.completed: true} ? <span style={{ color: 'grey' }}>{todo}</span> : {todo} */}
              <button onClick={() => this.handleDelete(i)}>[x]</button>
              <button onClick={() => this.handleUpdate(i, this.state.content)}>
                update
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoListThree
