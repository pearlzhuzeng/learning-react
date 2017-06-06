import React from 'react';
import AddItemForm from './AddItemForm';

class TodoItems extends React.Component {
  handleChange = (e, key) => {
    const item = this.props.items[key];
    const updatedItem = {
      ...item,
      [e.target.name]: e.target.value
    }
    this.props.updateItem(key, updatedItem);
  }

  renderTodoItems = (key) => {
    const item = this.props.items[key];
    return (
      <div key={key}>
        <input type="text" name="content" value={item.content} placeholder="Item Content" onChange={(e)=>this.handleChange(e, key)}/>
        <button onClick={()=>this.props.removeItem(key)}>remove item</button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h3>My Todo List</h3>
        {Object.keys(this.props.items).map(this.renderTodoItems)}
        <AddItemForm addTodoItem={this.props.addTodoItem} />
        <button onClick={this.props.loadSamples}>Load my todo list</button>
      </div>

    )
  }
}

export default TodoItems;
