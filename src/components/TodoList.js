import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Item from './Item';

const sampleTodoData = {
  item1: {
    content: 'This is my first todo item.'
  },

  item2: {
    content: 'This is my second todo item.'
  },

  item3: {
    content: 'This is my third todo item.'
  },
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
  }

  addTodoItem = (item) => {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`todoitem-${timestamp}`] = item;
    this.setState({items: items});
  }

  updateItem = (key, updatedItem) => {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({items});
  }

  removeItem = (key) => {
    const items = {...this.state.items};
    delete items[key];
    this.setState({items});
  }

  loadSamples = () => {
    this.setState({
      items: sampleTodoData
    });
  }

  render() {
    return (
      <div>
        <TodoItems
          addTodoItem={this.addTodoItem}
          removeItem={this.removeItem }
          loadSamples={this.loadSamples}
          items={this.state.items}
          updateItem={this.updateItem}
        />
        <ul>
          {/*Object.keys() returns an array of property names from the object.*/}
          {
            Object
              .keys(this.state.items)
              .map(key => <Item key={key} details={this.state.items[key]}/>)
          }
        </ul>
      </div>

    );
  }
}

export default TodoList;
