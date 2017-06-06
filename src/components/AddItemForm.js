import React from 'react';

class AddItemForm extends React.Component {
  createItem = (e) => {
    e.preventDefault();
    const item = {content: this.content.value}
    this.props.addTodoItem(item);
    this.ItemForm.reset();
  }

  render() {
    return (
      <form ref={(input)=>this.ItemForm=input} onSubmit={this.createItem}>
        <input
          type="text"
          placeholder="Add item"
          ref={(input) => this.content = input}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

export default AddItemForm;
