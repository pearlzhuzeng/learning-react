import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {number: 0};
  }

  increase = () => {
    this.setState(prevState => (
      {number: prevState.number + 1}
    ));
  }

  decrease = () => {
    this.setState(prevState => (
      {number: prevState.number - 1}
    ));
  }

  render() {
    return (
      <div>
        <button onClick= {this.increase}>+</button>
        <h2>{this.state.number}</h2>
        <button onClick={ this.decrease }>-</button>
      </div>
    );
  }
}

export default Counter;
