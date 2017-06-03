import React, { Component } from 'react';
import FormatDate from './FormatDate';

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
      <FormatDate date={this.state.date} />
    );
  }
}

export default Clock;
