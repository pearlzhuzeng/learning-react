import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState(
      {date: new Date()}
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>The current time is {this.state.date.toLocaleTimeString()}</div>
    );
  }
}

export default Clock;
