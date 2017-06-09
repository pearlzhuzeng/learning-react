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
          {this.state.todos.map(
            (todo, i) =>
              <TodoItem
                key={todo.timestamp}
                i={i}
                todo={todo}
                onUpdate={this.handleUpdate}
                onDelete={this.handleDelete}
              /> // key is react internal, needs to live here.
          )}
        </ul>
      </div>
    )
  }
}

export default TodoListThree

class TodoItem extends React.Component {
  handleChangeCompleted = () => {
    const { i, todo, onUpdate } = this.props
    onUpdate(i, { ...todo, completed: !todo.completed })
  }

  handleChangeContent = (e: SyntheticInputEvent) => {
    const { i, todo, onUpdate } = this.props
    onUpdate(i, { ...todo, content: e.target.value })
  }

  handleDelete = () => {
    const { i, onDelete } = this.props
    onDelete(i)
  }

  render () {
    const { todo } = this.props // object destructuring
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleChangeCompleted}
        />
        {' '}
        <input
          style={{ color: todo.completed ? 'grey' : 'black' }}
          value={todo.content}
          onChange={this.handleChangeContent}
        />
        {/* {this.state.completed: true} ? <span style={{ color: 'grey' }}>{todo}</span> : {todo} */}
        <button onClick={this.handleDelete}>[x]</button>
      </li>
    )
  }
}
