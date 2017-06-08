/**
 * @providesModule TodoListThree
 * @flow
 */

import React from 'react'

import { append, remove, update } from 'ramda'

type Item = {
  content: string,
  completed: boolean,
  timestamp: Date,
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
    const todos = append(
      { content: this.state.content, completed: false, timestamp: new Date() },
      this.state.todos
    )
    this.setState({ content: '', todos })
  }

  handleDelete = (i: number) => {
    const todos = remove(i, 1, this.state.todos)
    this.setState({ todos })
  }

  handleUpdate = (i: number, updatedcontent: Item) => {
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
            <li key={todo.timestamp}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e: SyntheticInputEvent) => {
                  this.handleUpdate(i, { ...todo, completed: !todo.completed })
                }}
              />
              {' '}
              <input
                style={{ color: todo.completed ? 'grey' : 'black' }}
                value={todo.content}
                onChange={(e: SyntheticInputEvent) => {
                  this.handleUpdate(i, { ...todo, content: e.target.value })
                }}
              />
              {/* {this.state.completed: true} ? <span style={{ color: 'grey' }}>{todo}</span> : {todo} */}
              <button onClick={() => this.handleDelete(i)}>[x]</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoListThree
