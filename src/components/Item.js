import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.details.content}</li>
    );
  }
}

export default Item;
